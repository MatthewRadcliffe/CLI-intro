import VersionBumper from "../lib/Version-Bump.js";
import commander from 'commander';
import pjson from '../package.json';
import fsp from 'fs-promise';
import {exec} from 'child-process-promise';
let vb = new VersionBumper();

export default function Parse(args) {
    commander
        .version(pjson.version)
        .usage('<bumpType> [preid/option] [option]')
        .option('-d, --dry', 'Dry run')
        .arguments('<bumpType> [preid]')
        .action(function(bumpType, preid) {
            pjson.version = vb.Bump(pjson.version, bumpType, preid);
            fsp.writeFile('package.json', JSON.stringify(pjson, null, '\t'))
                .then(() => exec(`git add package.json`))
                .then(() => exec(`git commit -m "Release v.${pjson.version}"`))
                .then(() => exec(`git tag v.${pjson.version}`))
                .then(() => {
                                if(commander.dry) {
                                    exec(`git push --dry-run`) 
                                } else {
                                    exec('git push');
                                }
                            })
                .then(() => exec(`echo release`))
                .then(() => exec(`echo Publishing`));
    });

    commander.on('--help', function() {
        console.log('Examples:');
        console.log('');
        console.log('   preminor beta');
        console.log('   prepatch alpha -d');
        console.log('   major --dry');
    });

    commander.parse(args);
}