import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 3 * 60 * 1000 // Three minutes
})

const instance = axios.create({
  adapter: cache.adapter,
  baseURL: 'https://gcq2gnybeb.execute-api.us-east-1.amazonaws.com/dev'
})

export const fetchJobsByCategory = category =>
  instance.get(`/github/jobs/${category}`).then(res => res.data)

export const fetchJob = (ownerName, issueNumber) =>
  instance
    .get(`/github/jobs/repository/${ownerName}/${issueNumber}`)
    .then(res => res.data)

export default instance
