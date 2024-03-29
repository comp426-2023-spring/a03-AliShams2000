#!/usr/bin/env node

import { rps } from '../lib/rpsls.js'
import minimist from "minimist"

const args = minimist(process.argv.slice(2));

if(args.help_message || args.h){
	help_message();
	process.exit(0);
}
if(args.rules_message || args.r){
	rules_message();
	process.exit(0);
}

const move_choice = args._[0]
try{
	console.log(JSON.stringify(rps(move_choice)));
} catch (e){
	help_message();
	rules_message();
	process.exit(0);
}


// Displays the help message if -h or -help is given in command prompt and exits application
function help_message(){
	console.log(`Usage: node-rps [SHOT]
	Play Rock Paper Scissors (RPS)
 		 -h, --help      display this help message and exit
 		 -r, --rules     display the rules and exit
	Examples:
  		node-rps        Return JSON with single player RPS result.
                  		e.g. {"player":"rock"}
  		node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  		e.g {"player":"rock","opponent":"scissors","result":"win"}`);
}


// Displays the rules if -r or -rules is given in command prompt and exits application
function rules_message(){
	console.log(`Rules for Rock Paper Scissors:
			- Scissors CUTS Paper
			- Paper COVERS Rock
			- Rock CRUSHES Scissors`);
}
