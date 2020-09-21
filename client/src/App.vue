<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/edit">Edit</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'App',
    methods: mapActions(['getAllEmps']),
    mounted() {
      this.getAllEmps()
    },
  }
</script>
<style></style>
