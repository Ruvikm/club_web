<template>
  <el-row
    class="wrapper verify"
    style="background-color: #f6f7f8; padding-top: 10%"
  >
    <el-col :xs="24" :sm="12" :xl="12" class="verify-wrap flex-inline">
      <el-form
        :model="loginForm"
        ref="loginForm"
        status-icon
        label-width="100px"
        style="width: 375px"
      >
        <el-form-item>
          <img src="@/assets/rymcu.png" alt="RYMCU" class="icon-rymcu" />
        </el-form-item>
        <el-form-item
          label="账号"
          prop="username"
          :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]"
        >
          <el-input v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          @keyup.enter.native="login"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            style="width: 60%"
            type="primary"
            @click="login"
            :loading="loginLoading"
            plain
            >立即登录</el-button
          >
          <el-button style="width: 32%" @click="register" plain>注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :xs="24" :sm="12" :xl="12" class="intro vditor-reset verify__sign">
      <div>
        <h2>欢迎来到 Alona</h2>
        <p><a rel="nofollow" href="/">Alona</a> 是一个分享社团日常的平台。</p>
        <p>
          这是一个小众社区。大家在这里相互<strong>信任</strong>，以<em
            >平等 • 自由 • 奔放</em
          >的价值观进行分享交流。最终，希望大家能够找到与自己志同道合的伙伴，共同成长。
        </p>
        <p>最后请大家共同爱护这个<i>自由</i>的交流环境</p>
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loading: false,
      loginLoading: false,
      historyUrl: "",
    };
  },
  computed: {},
  methods: {
    login() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          console.log(this.loginForm);
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(async() => {
              this.$router.push({
                path: "/",
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        }
      });
    },
    register() {
      this.$router.push({
        path: "/register",
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.icon-rymcu {
  margin: 0 auto;
  display: block;
  height: 4rem;
}

.flex-inline {
  display: flex;
  align-items: center;
}

.verify .intro {
  padding: 50px;
  background-color: #f1f7fe;
  /*width: 40%;*/
  color: #616161;
}

.verify__sign {
  background-color: transparent !important;
}

.vditor-reset {
  font-variant-ligatures: no-common-ligatures;
  font-family: Helvetica Neue, Luxi Sans, DejaVu Sans, Tahoma, Hiragino Sans GB,
    Microsoft Yahei, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Noto Color Emoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
  word-wrap: break-word;
  overflow: auto;
  line-height: 1.5;
  font-size: 16px;
  word-break: break-word;
}
</style>
