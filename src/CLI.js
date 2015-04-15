import VersionBumper from "../lib/Version-Bump.js";
import commander from 'commander';
import pjson from '../package.json';
import fsp from 'fs-promise';
import {exec} from 'child-process-promise';
let vb = new VersionBumper();

function executeCommand(command) {
   return exec(command)
        .then(function (result) {
            let stdout = result.stdout;
            let stderr = result.stderr;
            console.log('stdout: ', stdout);
            console.log('stderr: ', stderr);
        })
        .fail(function (err) {
            console.error('ERROR: ', err);
        })
}

commander
    .version(pjson.version)
    .usage('<bumpType> [preid]')
    .arguments('<bumpType> [preid]')
    .action(function(bumpType, preid) {
        pjson.version = vb.Bump(pjson.version, bumpType, preid);
        fsp.writeFile('package.json', JSON.stringify(pjson, null, '\t')); 
    
        executeCommand('git add package.json').then(function() {
            executeCommand('git commit -m "v.' + pjson.version + '"').then(function() {
                executeCommand('git tag ' + pjson.name + ' v' + pjson.version).then(function() {
                    executeCommand('git push').then(function() {
                        executeCommand('echo release').then(function() {
                            executeCommand('echo publishing')
                        })
                    })
                })
            })
        })
});
                

commander.on('--help', function() {
    console.log('');
});

commander.parse(process.argv);
