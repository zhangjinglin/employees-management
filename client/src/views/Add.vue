<template>
  <div>
    <h1>Add</h1>
    <el-input v-model="newEmp.name" placeholder="Please input the name" /><br />
    <el-input v-model="newEmp.phone" placeholder="the telephone number" /><br />
    <el-input v-model="newEmp.email" placeholder="" /><br />
    <el-input v-model="newEmp.avatar" placeholder="" /><br />
    <el-button type="primary" @click="addNewEmp()">Add</el-button>
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
