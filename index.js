#!/usr/bin/env node

//modify require to use esm which allows ES6 imports
require = require('esm')(module);


// import the cli function from cli.js
//The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched
require('./src/cli').cli(process.argv);
