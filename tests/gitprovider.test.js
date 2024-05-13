// sum.test.js
import { expect, test } from 'vitest'
import {getCommit, getRepoByID, getRepoFileRaw} from '../src/index'

test('test getRepoByID', async () => {
    const data = await getRepoByID({type:'github',repoID:'canyon-project/canyon1'})
    expect({
        id:data.id,
        name:data.name,
    }).toEqual({
        id:490316875,
        name:'canyon',
    })
})

test('test getCommit', async () => {
    const data = await getCommit({type:'github',repoID:'canyon-project/canyon',sha:'2fee12d9e76366d98cdc01d1187cd14b09ad5b4e'}).catch(e=>({error:e}))
    expect({
        sha:data.sha,
    }).toEqual({
        sha:'2fee12d9e76366d98cdc01d1187cd14b09ad5b4e',
    })
})

test('test getRepoFileRaw', async () => {
    const data = await getRepoFileRaw({type:'github',repoID:'canyon-project/canyon',sha:'2fee12d9e76366d98cdc01d1187cd14b09ad5b4e',filepath:'packages/canyon-platform/src/components/CanyonReport/line/number.tsx'}).catch(e=>({error:e}))
    expect({
        name:data.name,
    }).toEqual({
        name:'number.tsx',
    })
})