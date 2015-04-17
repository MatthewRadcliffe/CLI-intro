import semver from 'Semver';

export default function Bump(currentVersion, type, preid) {
    //Need t add code to handle exceptions gracefully
    let newVersion = semver.inc(currentVersion, type, preid);

    if(!semver.gt(newVersion, currentVersion)) {
        throw new Error('Older Version');
    }
    return newVersion;
}