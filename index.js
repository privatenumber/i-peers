#!/usr/bin/env node

var path = require('path');
var package = require(path.resolve('./package.json'));
var npm = require('npm');

var peerDependencies = package.peerDependencies || {};
var installList = Object.keys(peerDependencies).map(function(key) {
    return `${key}@${peerDependencies[key]}`
});

npm.load({ save: false }, function() {
	npm.commands.install(installList);
});