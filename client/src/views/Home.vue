<template>
  <div>
    {{ emps.length }}
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
