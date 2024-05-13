import providerList from "./git_providers";

export function getRepoByID({
                                type,
                                repoID
                            }: { type: string, repoID: string }) {
    for (const provider of providerList) {
        if (provider.detect({type})) {
            return provider.getRepoByID({type, repoID})
        }
    }
}

export function getRepoFileRaw({repoID, filepath, sha,type}: { type: string, repoID: string,filepath:string, sha: string }) {
    for (const provider of providerList) {
        if (provider.detect({type})) {
            return provider.getRepoFileRaw({type,repoID, sha,filepath})
        }
    }
}

export function getCommit({type,repoID, sha}: { type: string, repoID: string, sha: string}) {
    for (const provider of providerList) {
        if (provider.detect({type})) {
            return provider.getCommit({type,repoID,sha})
        }
    }
}