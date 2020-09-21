<template>
  <div>
    <h1>Edit</h1>
    <el-input v-model="emp.id" /><br />
    <el-input v-model="emp.name" /><br />
    <el-input v-model="emp.phone" /><br />
    <el-input v-model="emp.email" /><br />
    <el-input v-model="emp.avatar" /><br />
    <el-button type="primary" @click="update">Save</el-button>
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
