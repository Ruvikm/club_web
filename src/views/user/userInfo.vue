<template>
  <el-row type="flex" justify="center" :gutter="8">
    <el-col v-if="user" :span="20">
      <el-col :span="4">
        <el-menu
          default-active="account"
          class="el-menu-vertical-demo"
          @select="handleSelectMenu"
        >
          <el-menu-item index="account">
            <i class="el-icon-s-data"></i>
            <span slot="title">基本信息</span>
          </el-menu-item>
          <el-menu-item index="notification">
            <i class="el-icon-monitor"></i>
            <span slot="title">社团信息</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-col>
    <el-col v-else class="text-center">
      <el-alert
        title="用户无权限"
        type="warning"
        center
        show-icon
        :closable="false"
      >
      </el-alert>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Settings",
  computed: {
    user() {
      return this.$store.getters.name;
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSelectMenu(item) {
      let _ts = this;
      _ts.$router.push({
        path: `/userinfo/${item}`,
      });
    },
  },
};
</script>

<style scoped>
</style>
