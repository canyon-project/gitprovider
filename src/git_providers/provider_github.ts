// 侦测

export function detect(params: any): boolean {
  return Boolean(params.type === 'github')
}

function request(url:string) {
  return fetch(url).then((res) => {
    if (res.ok) {
      return res.json()
    }
    throw new Error(res.statusText)
  })
}

export function getRepoByID({repoID}:{ repoID: string }) {
  return request(`https://api.github.com/repos/${repoID}`)
}

export function getRepoFileRaw({repoID, filepath, sha}:{ repoID: string, filepath: string, sha: string }) {
  return request(`https://api.github.com/repos/${repoID}/contents/${filepath}?ref=${sha}`)
}

export function getCommit({repoID, sha}:{ repoID: string, sha: string }) {
  return request(`https://api.github.com/repos/${repoID}/commits/${sha}`)
}