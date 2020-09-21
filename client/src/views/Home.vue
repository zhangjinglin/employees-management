<template>
  <div>
    {{ emps.length }}
  </div>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      emps() {
        return this.$store.state.employees
      },
    },
    components: {},
  }
</script>
