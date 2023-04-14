#!/usr/bin/env node

import { rpsls } from '../lib/rpsls.js'
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
	console.log(JSON.stringify(rpsls(move_choice)));
} catch (e){
	help_message();
	rules_message();
	process.exit(0);
}


// Displays the help message if -h or -help is given in command prompt and exits application
function help_message(){
	console.log(`Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit
Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
}


// Displays the rules if -r or -rules is given in command prompt and exits application
function rules_message(){
	console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors`);
}
