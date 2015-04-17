import semver from 'semver';

export default function Bump(currentVersion, type, preid) {
    //Need to add code to handle exceptions gracefully
    let newVersion = semver.inc(currentVersion, type, preid);

    if(!semver.gt(newVersion, currentVersion)) {
        throw new Error('Older Version');
    }
    return newVersion;
}