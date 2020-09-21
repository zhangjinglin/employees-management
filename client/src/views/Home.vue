<template>
  <div>
    <ul>
      <li v-for="e in emps" :key="e.id">
        {{ e.name }}
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
    components: {},
  }
</script>
