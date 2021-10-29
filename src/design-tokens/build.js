const StyleDictionary = require('style-dictionary');

const myStyleDictionary = StyleDictionary.extend({
	"source": ["properties/**/*.json"],
	"platforms": {
		"js": {
			"transformGroup": "js",
			"buildPath": "build/ts/",
			"files": [{
				"destination": "index.js",
				"format": "javascript/module"
			}]
		},
		"ts": {
			"transformGroup": "js",
			"buildPath": "build/ts/",
			"files": [{
				"destination": "index.d.ts",
				"format": "typescript/module-declarations"
			}]
		}
	}
});

myStyleDictionary.buildAllPlatforms();