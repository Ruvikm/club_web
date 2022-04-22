<template>
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
          <img src="@/assets/rymcu.png" alt="RYMCU" class="navbar-brand-img" />
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
        <!-- 如果已登录 -->
        <el-col v-if="user" style="text-align: right">
          <!-- <el-link
            rel="nofollow"
            :underline="false"
            style="padding-left: 10px; padding-right: 10px"
            @click="Post"
            >发帖
          </el-link> -->
          <el-link rel="nofollow" :underline="false" style="margin-left: 10px">
            <el-dropdown trigger="click" @command="handleCommand">
              <el-avatar
                v-if="avatarURL"
                size="small"
                :src="avatarURL"
              ></el-avatar>
              <el-avatar
                v-else
                size="small"
                src="https://static.rymcu.com/article/1578475481946.png"
              ></el-avatar>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="user" style="align-items: center">
                  <el-avatar
                    class="mr-3"
                    v-if="avatarURL"
                    size="small"
                    style="margin-top: 1rem"
                    :src="avatarURL"
                  ></el-avatar>
                  <el-avatar
                    class="mr-3"
                    v-else
                    size="small"
                    style="margin-top: 1rem"
                    src="https://static.rymcu.com/article/1578475481946.png"
                  ></el-avatar>
                  <el-link
                    rel="nofollow"
                    :underline="false"
                    style="margin-left: 10px; margin-bottom: 1rem"
                    >{{ nickname }}</el-link
                  >
                </el-dropdown-item>
                <el-dropdown-item command="user-info"
                  >个人资料</el-dropdown-item
                >
                <el-dropdown-item command="logout" divided
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-link>
        </el-col>

        <!-- 如果未登录 -->
        <el-col v-else style="text-align: right">
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
</template>

<script>
import {
  removeToken,
  clearStorage,
  getToken,
  removeTokenTime,
} from "@/utils/auth";
import { loginOutApi } from "@/api/user";
export default {
  data() {
    return {};
  },
  computed: {
    user() {
      //console.log("登录状态栏"+this.$store.getters.name);
      return this.$store.getters.name;
    },
    avatarURL() {},
    nickname() {
      let _this = this;
      return _this.$store.getters.name;
    },
  },
  methods: {
    Post() {
      this.$router.push({
        path: "/ipost",
      });
    },
    handleSelectMenu(item) {
      let _this = this;
      switch (item) {
        case "index":
          _this.$router.push({
            path: "/",
          });
          break;
        case "approve":
          _this.$router.push({
            path: "/clublist",
          });
          break;
        case "passage":
          _this.$router.push({
            path: "/article",
          });
          break;
        default:
          _this.$router.push({
            name: item,
          });
      }
    },
    login() {
      this.$router.push({
        path: "/login",
      });
    },
    register() {
      this.$router.push({
        path: "/register",
      });
    },
    async handleCommand(item) {
      let _this = this;
      switch (item) {
        case "user-info":
          _this.$router.push({
            path: "/userInfo",
          });
          break;
        case "logout":
          let confirm = await this.$myconfirm("确定退出登录吗？");
          if (confirm) {
            _this.$store.commit("SET_NAME", null);
            item = "login";
            window.location.reload();
          }
          break;
        default:
          _this.$router.push({
            name: item,
          });
      }
    },
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
</style>
