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
    getAllEmps() {
      fetch('http://localhost:3000/employees', {
        headers: { Accept: 'application/json' },
      }).then(response => response.json())
      .then(result => console.log(result))
    },
  },
})
