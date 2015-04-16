import semver from 'semver';

class VersionBumper {
    //Need to add code to handle exceptions gracefully
    Bump(currentVersion, type, preid) {
        //let semver = require('semver');
        let newVersion = semver.inc(currentVersion, type, preid);

        if(!semver.gt(newVersion, currentVersion)) {
            throw new Error('Older Version');
        }
        
        return newVersion;
    }
}

export default VersionBumper;