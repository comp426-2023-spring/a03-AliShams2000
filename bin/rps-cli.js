#!/usr/bin/env node
import { rps } from '../lib/rpsls.js'
import { rpsls } from 'node-rpsls'

const args = minimist(process.argv.slice(2));

// displays the help message if -h or -help is given in command prompt and exits application
if (args.h || args.help){
	console.log('Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n\n',
    '  -h, --help      display this help message and exit\n',
    '  -r, --rules     display the rules and exit\n\nExamples:\n',
    '  node-rps        Return JSON with single player RPS result.\n',
    '                  e.g. {"player":"rock"}\n',
    '  node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n',
    '                  e.g {"player":"rock","opponent":"scissors","result":"win"}')
	process.exit(0);
}

// displays the rules if -r or -rules is given in command prompt and exits application
if (args.r || args.rules){
	onsole.log('Rules for Rock Paper Scissors:\n\n',
    ' - Scissors CUTS Paper\n',
    ' - Paper COVERS Rock\n',
    ' - Rock CRUSHES Scissors')
	process.exit(0);
}

if (args._.length <= 2) {
    console.log(JSON.stringify(rps()))
} else if (args._.length > 3) {
    console.error("ERROR: arguments out of range")
} else {
    console.log(JSON.stringify(rps(...args._.slice(2))))
}
