// 侦测
import axios from "axios";

export function detect(params: any): boolean {
  return Boolean(params.type === 'github')
}

export function getRepoByID({repoID}:{ repoID: string }) {
  return axios.get(`https://api.github.com/repos/${repoID}`).then(({data}) => data).catch((e) => ({message: e.message}))
}

export function getRepoFileRaw({repoID, filepath, sha}:{ repoID: string, filepath: string, sha: string }) {
  return axios.get(`https://api.github.com/repos/${repoID}/contents/${filepath}?ref=${sha}`).then(({data}) => data).catch((e) => ({message: e.message}))
}

export function getCommit({repoID, sha}:{ repoID: string, sha: string }) {
  return axios.get(`https://api.github.com/repos/${repoID}/commits/${sha}`).then(({data}) => data).catch((e) => ({message: e.message}))
}