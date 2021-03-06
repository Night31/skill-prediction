const Ping = require('./ping');
const utils = require('./utils');
const preset = require('../config/preset');

class AbnormalityPrediction {
	constructor(dispatch) {
		this.dispatch = dispatch;
		this.DEBUG = false;
		this.ping = Ping(dispatch);
		this.enabled = true;
		this.gameId = null;
		this.myAbnormals = {};
		let abnormals = require('../config/data/abnormalities');

		//------start of nightmare-------
		//blocked abnormies parser... don't ask me wdf is going on here 
		let skills = dispatch.base.majorPatchVersion >= 67 ? require('../config/data/awakening') : require('../config/data/skills');
		let found = [];
		for (let id of Object.keys(skills)) {
			let classObject = skills[id];

			let supportedSkills = Object.keys(classObject);
			for (let skillId of supportedSkills) {
				if (!preset[id]["enabled"]) continue;
				if (preset[id][skillId]) {
					found.push(utils.getDataFromObjectByField(classObject[skillId], "triggerAbnormal"));
				}
			}
		}
		Object.assign(abnormals, utils.getFlatArray(found).reduce((map, value) => {
			map[value] = true;
			return map
		}, {}));

		//GC our hero! Maybe...
		found = null;
		skills= null;
		//------the end of nightmare-------

		dispatch.hook('S_LOGIN', dispatch.base.majorPatchVersion >= 67 ? 10 : 9, event => {
			this.gameId = event.gameId
		});

		dispatch.hook('S_RETURN_TO_LOBBY', 1, () => {
			this.removeAll()
		});

		dispatch.hook('S_CREATURE_LIFE', 2, event => {
			if (event.gameId.equals(this.gameId) && !event.alive) this.removeAll()
		});

		let abnormalityUpdate = (type, event) => {
			if (event.target.equals(this.gameId)) {
				if (this.DEBUG) utils.writeDebugMessage('<-', type, event.id, event.duration, event.stacks, abnormals[event.id] == true ? 'X' : '');

				let info = abnormals[event.id];
				if (info && this.enabled) {
					if (info == true) return false;

					if (info.overrides && this.exists(info.overrides)) this.remove(info.overrides)
				}

				if (event.duration != 0x7fffffff) event.duration = Math.max(event.duration - this.ping.min, 0);

				if (type === 'S_ABNORMALITY_BEGIN' === this.exists(event.id)) { // Transform packet type so it will always be valid
					this.add(event.id, event.duration, event.stacks);
					return false
				}

				this._add(event.id, event.duration);
				return true
			}
		};

		dispatch.hook('S_ABNORMALITY_BEGIN', 2, abnormalityUpdate.bind(null, 'S_ABNORMALITY_BEGIN'));
		dispatch.hook('S_ABNORMALITY_REFRESH', 1, abnormalityUpdate.bind(null, 'S_ABNORMALITY_REFRESH'));

		dispatch.hook('S_ABNORMALITY_END', 1, event => {
			if (event.target.equals(this.gameId)) {
				if (this.DEBUG) utils.writeDebugMessage('<- S_ABNORMALITY_END', event.id, abnormals[event.id] == true ? 'X' : '');

				if (abnormals[event.id] == true && this.enabled) return false;

				if (!this.myAbnormals[event.id]) return false;

				this._remove(event.id)
			}
		})
	}

	exists(id) {
		return !!this.myAbnormals[id]
	}

	inMap(map) {
		for (let id in this.myAbnormals)
			if (map[id]) return true;
		return false
	}

	add(id, duration, stacks, delay = 0) {
		let type = this.myAbnormals[id] ? 'S_ABNORMALITY_REFRESH' : 'S_ABNORMALITY_BEGIN',
			version = this.myAbnormals[id] ? 1 : 2;

		if (this.DEBUG) utils.writeDebugMessage('<*', type, id, duration, stacks);
		setTimeout(() => {
			this.dispatch.toClient(type, version, {
				target: this.gameId,
				source: this.gameId,
				id,
				duration,
				unk: 0,
				stacks,
				unk2: 0
			});

			this._add(id, duration)
		}, delay);
	}

	remove(id) {
		if (!this.exists(id)) return;

		if (this.DEBUG) utils.writeDebugMessage('<* S_ABNORMALITY_END', id);

		this.dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: this.gameId,
			id
		});

		this._remove(id)
	}

	removeAll() {
		for (let id in this.myAbnormals) this.remove(id)
	}

	_add(id, duration) {
		clearTimeout(this.myAbnormals[id]);
		this.myAbnormals[id] = duration >= 0x7fffffff ? true : setTimeout(() => {
			this.remove(id)
		}, duration)
	}

	_remove(id) {
		clearTimeout(this.myAbnormals[id]);
		delete this.myAbnormals[id]
	}
}

let map = new WeakMap();

module.exports = function Require(dispatch) {
	if (map.has(dispatch.base)) return map.get(dispatch.base);

	let abn = new AbnormalityPrediction(dispatch);
	map.set(dispatch.base, abn);
	return abn
};