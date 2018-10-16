#!/usr/bin/env node

var path = require('path');
var package = require(path.resolve('./package.json'));
var spawn = require('child_process').spawn;

var peerDependencies = package.peerDependencies || {};
var installList = Object.keys(peerDependencies).map(function(key) {
    return `${key}@${peerDependencies[key]}`
});


if (installList.length) {
	console.log('Installing', installList);

	// Lighter than installing npm as a dependency
	spawn('npm', ['install', '--no-save'].concat(installList), {
		stdio: 'inherit',
		shell: true
	});
}
