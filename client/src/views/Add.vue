<template>
  <div>
    <h1>Add</h1>
    <input v-model="newEmp.name" /><br />
    <input v-model="newEmp.phone" /><br />
    <input v-model="newEmp.email" /><br />
    <input v-model="newEmp.avatar" /><br />
    <button @click="addNewEmp()">Add</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Add',
    data() {
      return {
        newEmp: {
          name: '',
          phone: '',
          email: '',
          avatar: '',
        },
      }
    },
    methods: {
      ...mapActions(['addEmp']),
      addNewEmp() {
        this.addEmp(this.newEmp)
        this.$router.push('/')
      },
    },
  }
</script>
