<template>
  <el-row
    class="wrapper verify"
    style="background-color: #f6f7f8; padding-top: 10%"
  >
    <el-col :xs="24" :sm="12" :xl="12" class="verify-wrap flex-inline">
      <el-form
        :model="regForm"
        ref="regForm"
        :rules="rules"
        status-icon
        label-width="100px"
        style="width: 375px"
      >
        <el-form-item>
          <img src="@/assets/rymcu.png" alt="RYMCU" class="icon-rymcu" />
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="regForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="regForm.password"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input
            type="password"
            v-model="regForm.confirmPassword"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            style="width: 60%"
            type="primary"
            @click="register"
            :loading="registerLoading"
            plain
            >立即注册</el-button
          >
          <el-button style="width: 32%" @click="login" plain>登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :xs="24" :sm="12" :xl="12" class="intro vditor-reset verify__sign">
      <div>
        <h2>欢迎来到 Club Square</h2>
        <p><a rel="nofollow" href="/">RYMCU</a> 是一个分享社团日常的平台。</p>
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
import { addUserApi } from "@/api/user";
export default {
  name: "register",
  data() {
    //验证两次数据密码是否一致
    var validateRepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入确认密码"));
      } else if (value !== this.regForm.password) {
        callback(new Error("两次的密码不一致"));
      } else {
        callback();
      }
    };
    return {
      regForm: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      registerUser:{
        id: "",
        deptId: "",
        editType: "", //0新增 1：编辑
        deptName: "",
        email: "",
        loginName: "",
        mobile: "",
        nickName: "",
        password: "",
        username: "",
        sex: "",
      },
      registerLoading: false,
      loading: false,
      rules: {
        username: [
          {
            required: true,
            trigger: "blur",
            message: "请填写用户名称",
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            message: "请输入密码",
          },
        ],
        confirmPassword: [
          {
            required: true,
            trigger: "blur",
            message: "请输入确认密码",
          },
          {
            required: true,
            validator: validateRepassword,
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    register() {
      this.$refs.regForm.validate(async (valid) => {
        if (valid) {
          console.log(this.regForm);
          this.registerUser.username = this.regForm.username;
          this.registerUser.password = this.regForm.password;
          let res = await addUserApi(this.regForm);
          if (res && res.code == 200) {
            this.$message.success(res.msg);
            this.$router.push({
                path: "/login",
              });
          }
        }
      });
    },
    login() {
      this.$router.push({
        path: "/login",
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
