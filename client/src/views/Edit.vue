<template>
  <div>
    <h1>Edit</h1>
    <input v-model="emp.id" /><br />
    <input v-model="emp.name" /><br />
    <input v-model="emp.phone" /><br />
    <input v-model="emp.email" /><br />
    <input v-model="emp.avatar" /><br />
    <button @click="update">Save</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Edit',
    props: ['editEmp'],
    data() {
      return {
        emp: {
          id: 0,
          name: '',
          phone: '',
          email: '',
          avatar: '',
        },
      }
    },

    mounted() {
      if (this.editEmp != null) {
        this.emp = this.editEmp
      }
    },

    methods: {
      ...mapActions(['updateEmp']),
      update() {
        this.updateEmp(this.emp)
        this.$router.push('/')
      },
    },
  }
</script>
