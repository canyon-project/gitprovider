// import { IProvider } from '../types'

import * as providerGitLabci from './provider_github'
// import * as providerJenkinsci from './provider_gitlab'

// Please make sure provider_local is last
const providerList: any[] = [
  providerGitLabci,
  // providerJenkinsci,
]

export default providerList
