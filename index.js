#!/usr/bin/env node

var path = require('path');
var package = require(path.resolve('./package.json'));
var execSync = require('child_process').execSync;

var peerDependencies = package.peerDependencies || {};
var installList = Object.keys(peerDependencies).map(function(key) {
    return `${key}@${peerDependencies[key]}`
});

console.log('Installing', installList);

// Lighter than installing npm as a dependency
execSync('npm install --no-save ' + installList.join(' '));
