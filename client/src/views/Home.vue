<template>
  <div>
    <ul>
      <li v-for="e in emps" :key="e.id">
        {{ e.name }} <button @click="edit(e.id)">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    computed: {
      ...mapGetters(['emps']),
    },
    methods: {
      edit(id) {
        console.log(id)
      },
    },
    components: {},
  }
</script>
