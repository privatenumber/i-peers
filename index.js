#!/usr/bin/env node

var path = require('path');
var pkg = require(path.resolve('./package.json'));
var spawnSync = require('child_process').spawnSync;

if (process.argv.includes('-a')) {
	spawnSync('npm', ['install'], {
		stdio: 'inherit',
		shell: true,
	});
}

var peerDependencies = pkg.peerDependencies || {};
var installList = Object.keys(peerDependencies).map(function (key) {
	return `${key}@${peerDependencies[key]}`;
});

if (installList.length) {
	console.log('Installing peer dependencies:', installList.join(' '));

	// Lighter than installing npm as a dependency
	spawnSync('npm', ['install', '--no-save'].concat(installList), {
		stdio: 'inherit',
		shell: true,
	});
}
