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
        this.$router.push({
          name: 'Edit',
          params: { editEmp: this.emps.find((e) => e.id === id) },
        })
      },
    },
    components: {},
  }
</script>
