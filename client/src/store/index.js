import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employees: [],
  },
  mutations: {
    setAllEmps(state, emps) {
      state.employees = emps
    },
  },
  actions: {
    async getAllEmps(state) {
      const response = await fetch('http://localhost:3000/employees', {
        headers: { Accept: 'application/json' },
      })

      const result = await response.json()

      state.commit('setAllEmps', result)
    },
  },

  getters: {
    emps: (state) => state.employees,
  },
})
