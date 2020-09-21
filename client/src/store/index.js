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
    addEmp(state, emp) {
      state.employees.push(emp)
    },
    updateEmp(state, emp) {
      const index = state.employees.findIndex((e) => e.id === emp.id)
      state.employees.splice(index, 1, emp)
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
    async addEmp(state, emp) {
      console.log(emp)
      const response = await fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(emp),
      })
      const result = await response.json()
      state.commit('addEmp', result)
    },
    async updateEmp({ commit }, emp) {
      const response = await fetch(
        `http://localhost:3000/employees/${emp.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(emp),
        }
      )

      const result = await response.json()
      commit('updateEmp', result)
    },
  },

  getters: {
    emps: (state) => state.employees,
  },
})
