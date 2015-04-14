import VersionBumper from "../lib/Version-Bump.js";
import commander from 'commander';
import pjson from '../package.json';
import fsp from 'fs-promise';
let vb = new VersionBumper();

function printToConsole(val) {
    console.log(val);
}

//Still trying to figure out how i want to do the commands
commander
    .version(pjson.version)
    .usage('[options]')
    .option('<bumpType>', 'bumps the version number', printToConsole)
    .option('<bumpType> -p, --preid <string>','prerelease version bump', printToConsole);

commander.on('--help', function() {
    console.log('');
});


//Bumps the version number // will have a command to execute it
//pjson.version = vb.Bump(pjson.version, 'major');
//fsp.writeFile('package.json', JSON.stringify(pjson, null, '\t'));

commander.parse(process.argv);


