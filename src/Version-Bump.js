class VersionBumper {
    Bump(currentVersion, type, preid) {
        let semver = require('semver');
        let newVersion = semver.inc(currentVersion, type, preid);

        if(!semver.gt(newVersion, currentVersion)) {
            throw new Error('Older Version');
        }
        
        return newVersion;
    }
}

export default VersionBumper;