<template>
  <div>
    <el-row :gutter="20" class="pt-10">
      <el-col :span="8" v-for="e in emps" :key="e.id">
        <el-card class="box-card mb-5">
          <div slot="header" class="clearfix">
            <span>{{ e.name }}</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="edit(e.id)"
              >Edit</el-button
            >
          </div>
          <div class="text item">
            <el-avatar :size="100" :src="e.avatar"></el-avatar><br />
            phone: {{ e.phone }}<br />
            email: {{ e.email }}<br />
          </div>
        </el-card>
      </el-col>
    </el-row>
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
