## Introduction

`preset.js` gives the option of disabling or enabling specific skills or classes from being emulated by SP. 

Path: `<skill-prediction-folder>/config/preset.js`.

## How To Edit Preset.js

This is best explained along an example of what you're gonna see inside the file. *You won't see the arrows and indications along them written in the example from here on the actual file, that's part of the explanation.*

```JS
0: { // Warrior <- Class category.
		"enabled": true, // <- Set this to false for disabling ALL skills for this class(this ignores skill specific settings, the ones from below).
		1: true, // Combo Attack <- This skill is enabled.
		2: true, // Evasive Roll <- This skill is enabled.
		3: false, // Torrent of Blows <- This skill is disabled.
		4: true, // Rain of Blows <- This skill is enabled.
		5: true, // Battle Cry <- This skill is enabled.
		8: false, // Assault Stance <- This skill is disabled.
		9: false // Defensive Stance <- This skill is disabled.
```