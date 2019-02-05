import Vuex from 'vuex'
import { fetchJobsByCategory, fetchJob } from '~/utils/githubAPI'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      jobs: {
        frontend: undefined,
        backend: undefined,
        mobile: undefined
      }
    }),
    mutations: {
      setJobsByCategory(state, { category, jobs }) {
        state.jobs[category] = jobs
      }
    },
    actions: {
      fetchJobs({ commit }, { category }) {
        return fetchJobsByCategory(category).then(jobs =>
          commit('setJobsByCategory', { category, jobs })
        )
      },
      fetchJob({ commit, dispatch }, { category, serviceName, jobNumber }) {
        return fetchJob(serviceName, jobNumber)
          .then(job => commit('setJobsByCategory', { category, jobs: [job] }))
          .catch(dispatch.bind(dispatch, 'fetchJobs', { category }))
      }
    }
  })
}

export default createStore
