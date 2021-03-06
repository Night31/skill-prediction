//------------------------------------
//by SaltyMonkey 
//Reworked loader for skill prediction
//In theory a bit slower with bunch of modules than old loader
//but can detect copypasted SP instances
//------------------------------------

const {
	lstatSync,
	readdirSync,
	existsSync
} = require('fs');
const path = require('path');
const utils = require("./utils");
const sysmsg = require('tera-data-parser').sysmsg,
	childModules = [
		require('./core'),
		require('./cooldowns')
	];

/**
 * Check path for directory
 * @param {String} source  full path
 * @returns {Boolean} true - directory, false - nope
 */
let isDirectory = source => lstatSync(source).isDirectory();

/**
 * Check "string" (with short name for directory) for active proxy module
 * Tera proxy ignoring modules with "_" and "." 
 * @param {String} source short name
 * @returns {Boolean}
 */
let isActiveModule = source => !["_", "."].includes(source[0]);

/**
 * Grab short name from full path and translate it to lower case
 * Example: return "c" from "a/b/c" 
 * @param {String} source full path
 * @returns {String} short name
 */
let getShortDirName = source => (source.slice(source.lastIndexOf(path.sep) + 1, source.length)).toLowerCase();

/**
 * Return short names for all active modules from folder with modules
 * @param {String} source 
 * @returns {Array} short names
 */
const getModules = source =>
	(readdirSync(source).map(name => path.join(source, name))
		.filter(isDirectory))
		.map(elem => getShortDirName(elem))
		.filter(isActiveModule);

//------------------------------------------------------------------------
let blockedModules = ['cooldowns', 'lockons', 'lockons-master', 'fastfire', 'fast-fire', 'fast-fire-master', 'fast-block',
	'skill-prediction', 'skill-prediction-master', 'skill-prediction-exp', 'skill-prediction-experimental',
	'sp', 'cooldowns-master', 'fast-block-master', 'skillprediction', 'pinkie-sp', 'sp-pinkie', 'best', 'bestsp'
];

let errorState = false;
let installedModules = null;

let currentDir = getShortDirName(utils.getFullPath("../"));
let updatePath = utils.getFullPath("../migration/steps.json");
let originalConfigPath = utils.getFullPath("../config/config.json");
let defaultConfigFilePath = utils.getFullPath("../config/data/default-config.json");
//------------------------------------------------------------------------

//all installed modules except current dir
installedModules = (getModules(path.resolve(__dirname, '../../'))).filter(element => element !== currentDir);

//check for blocked modules
for (item of installedModules) {
	for (blk of blockedModules) {
		if (item === blk) {
			utils.writeErrorMessage(`Blocked module ${item} installed.`);
			errorState = true
		}
	}
}

//check for "command"
if (!installedModules.includes('command') && !installedModules.includes('command-master')) {
	utils.writeErrorMessage(`[${currentDir}] ERROR! Missing module \'Command\'. Close tera-proxy and install it.`);
	errorState = true
}

if (!existsSync(originalConfigPath)) {
	utils.writeWarningMessage("Your config file broken. Fixing...");
	utils.saveJson(updateFile, utils.loadJson(defaultConfigFilePath));
	utils.writeWarningMessage("Config file restored with default values.");
}

let updateFile = utils.loadJson(updatePath);
let originalConfig = utils.loadJson(originalConfigPath);

//run update/cleanup
if (updateFile && originalConfig && originalConfig.version != updateFile["version"]) {
	let diff = utils.compareFieldsInObjects(originalConfig, updateFile["config"]);
	if (diff != null) {                    
		utils.writeLogMessage("Updating config...");
		let obj = Object.assign(originalConfig, diff);
		obj["version"] = updateFile.version;
		utils.saveJson(obj, originalConfigPath);
		utils.writeLogMessage("Done!");
	}   
	if (updateFile["remove"]) {
		utils.writeLogMessage("Cleanup task...");
		let cleanupObj = updateFile["remove"];
		console.log(cleanupObj);
		if (Array.isArray(cleanupObj)) {
			cleanupObj.forEach((item) => utils.removeByPath(utils.getFullPath(item))) 
		} else 
			utils.removeByPath(utils.getFullPath(cleanupObj));
		utils.writeLogMessage("Done!");
	}
}

module.exports = function SkillPredictionCore(dispatch) {
	if (errorState) {
		utils.writeErrorMessage(`[${currentDir}] Start cancelled!`);
		return
	}

	dispatch.hookOnce('C_CHECK_VERSION', 'raw', () => {
		if (sysmsg.maps.get(dispatch.base.protocolVersion))
			for (let mod of childModules) mod(dispatch)
		else {
			utils.writeErrorMessage("Your tera borked. Bye");
			return;
		}
	});
};