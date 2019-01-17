// Unauthenticated request per minute: max 10

import { flatten } from 'ramda'
import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 60 * 1000
})

const instance = axios.create({
  adapter: cache.adapter,
  baseURL: `https://api.github.com`
})

// Endpoints
export const jobEndpoints = {
  frontendbr: '/repos/frontendbr/vagas/issues?labels=Remoto&state=open',
  reactbrasil:
    '/repos/react-brasil/vagas/issues?labels=aloca%C3%A7%C3%A3o/Remoto&state=open',
  backendbr: '/repos/backend-br/vagas/issues?labels=Remoto&state=open',
  soujava: '/repos/soujava/vagas-java/issues?labels=Remoto&state=open',
  androiddevbr: '/repos/androiddevbr/vagas/issues?labels=Remoto&state=open',
  cocoaheadsbrasil:
    '/repos/CocoaHeadsBrasil/vagas/issues?labels=Remoto&state=open',
  phpdevbrasil:
    '/repos/phpdevbr/vagas/issues?labels=aloca%C3%A7%C3%A3o/Remoto&state=open'
}

export const repoNameByOwner = {
  frontendbr: 'vagas',
  reactbrasil: 'vagas',
  backendbr: 'vagas',
  soujava: 'vagas-java',
  androiddevbr: 'vagas',
  cocoaheadsbrasil: 'vagas',
  phpdevbrasil: 'vagas'
}

export const serviceNamesByCategory = {
  frontend: ['frontendbr', 'reactbrasil'],
  backend: ['backendbr', 'soujava', 'phpdevbrasil'],
  mobile: ['androiddevbr', 'cocoaheadsbrasil']
}

export const fetchJobs = jobServiceName => {
  return instance
    .get(jobEndpoints[jobServiceName])
    .then(res => res.data)
    .catch(console.error.bind(console))
}

export const fetchJobsByCategory = category =>
  Promise.all(serviceNamesByCategory[category].map(fetchJobs))
    .then(res =>
      res.map((repositoryResult, index) =>
        repositoryResult.map(vacancy =>
          Object.assign(vacancy, {
            service_name: serviceNamesByCategory[category][index]
          })
        )
      )
    )
    .then(flatten)
    .then(res => console.log(res) || res)
    .catch(console.error)

export const fetchJob = (repositoryName, issueId) => {
  return instance
    .get(
      `/repos/${repositoryName}/${
        repoNameByOwner[repositoryName]
      }/issues/${issueId}`
    )
    .then(res => res.data)
}

export default instance
