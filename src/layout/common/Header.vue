<template>
  <el-main>
    <el-row justify="space-between" type="flex">
      <el-col>
        <el-col
          :xs="8"
          :sm="4"
          :md="4"
          :xl="3"
          style="padding-top: 0.5rem; text-align: left"
        >
          <a rel="nofollow" class="navbar-brand" href="/">
            <img
              src="@/assets/rymcu.png"
              alt="RYMCU"
              class="navbar-brand-img"
            />
          </a>
        </el-col>
        <el-col :xs="0" :sm="8" :md="8" :xl="12" style="text-align: center">
          <el-row type="flex" justify="center">
            <el-col>
              <el-menu
                style="margin-top: -2px; border: 0"
                mode="horizontal"
                @select="handleSelectMenu"
              >
                <el-menu-item index="index">首页</el-menu-item>
                <el-menu-item index="approve">社团申请</el-menu-item>
                <el-menu-item index="passage">社团风采</el-menu-item>
                
              </el-menu>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="16" :sm="12" :md="12" :xl="9" style="padding-top: 1rem">
          <el-col style="text-align: right">
            <el-link
              rel="nofollow"
              :underline="false"
              style="margin-left: 10px"
              @click="login"
              >登录</el-link
            >
            <el-link
              rel="nofollow"
              :underline="false"
              style="margin-left: 10px"
              @click="register"
              >注册</el-link
            >
          </el-col>
        </el-col>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSelectMenu(item) {},
    login() {},
    register() {},
  },
  components: {},
};
</script>

<style scoped>

.navbar-brand {
  color: inherit;
  margin-right: 1rem;
  font-size: 1.25rem;
  white-space: nowrap;
  font-weight: 600;
  padding: 0;
  transition: 0.3s opacity;
  line-height: 3rem;
}

.navbar-brand-img {
  height: 3rem;
  line-height: 3rem;
  vertical-align: top;
  width: auto;
}

.search-result-box {
  min-width: 20vw !important;
}

.search-result-type {
  padding-right: 5px;
}
</style>
