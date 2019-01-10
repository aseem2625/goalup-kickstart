#!/usr/bin/env node

var chalk = require('chalk');
var program = require('commander');
var sys = require('util')
var exec = require('child_process').exec;

program
	.version('1.0.0')
	.description('Kickstarter CLI for your static-websites with best practices. Easily extendible + modifiable!')
	.usage('new [project_name] : Folder with name project_name will be created. Default project_name is goalup-kickstart-example')

program
	.command('new [project_name]')
	.action(function(dir) {
		var folder_name = dir || 'goalup-kickstart-example';

		exec('./creator.sh ' + folder_name,
	  	function (error, stdout, stderr) {
		    if (error !== null) {
		    	console.log(chalk.red.bold.underline("exec error:") + error);
		    } else {
			    
			    stderr && console.log(chalk.red("Error: ") + stderr);

			    if(!stderr) {
			    	console.log(chalk.green.bold.underline("Result:") + 'Boilerplate successfully created!');	
			    }
	    	}
		});
	})


program.parse(process.argv);
