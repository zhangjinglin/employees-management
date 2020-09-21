<template>
  <div id="app">
    <div id="nav" class="bg-gray-600 p-4 flex justify-between text-gray-200">
      <div>
        <h1 class="text-2xl">Employees Management</h1>
      </div>
      <div class="mt-2">
        <router-link to="/" class="hover:text-pink-100 mr-10"
          >Home
        </router-link>
        <router-link to="/add" class="hover:text-pink-100 mr-10"
          >Add
        </router-link>
        <router-link to="/about" class="hover:text-pink-100 mr-10"
          >About</router-link
        >
      </div>
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
