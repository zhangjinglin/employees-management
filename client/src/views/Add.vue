<template>
  <div>
    <h1>Add</h1>
    <input v-model="name" /><br />
    <input v-model="phone" /><br />
    <input v-model="email" /><br />
    <input v-model="avatar" /><br />
    <button @click="addEmp()">Add</button>
  </div>
</template>

<script>
  export default {
    name: 'Add',
    data() {
      return {
        name: '',
        phone: '',
        email: '',
        avatar: '',
      }
    },
    methods: {
      addEmp() {
        console.log(this.name, this.phone, this.email, this.avatar)
      },
    },
  }
</script>
