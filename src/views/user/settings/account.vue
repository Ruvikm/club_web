<template>
  <el-row>
    <el-col>
      <h1>基本信息</h1>
    </el-col>
    <el-col>
      <el-form
        :model="InfoModel"
        :rules="rules"
        ref="InfoForm"
        label-width="100px"
      >
        <el-form-item label="姓名" prop="realname">
          <el-input v-model="InfoModel.realname"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="InfoModel.sex">
            <el-radio label="0">保密</el-radio>
            <el-radio label="1">男</el-radio>
            <el-radio label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="InfoModel.age" type="number"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-input v-model="InfoModel.major"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="InfoModel.phone"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍" prop="introduction">
          <el-input type="textarea" v-model="InfoModel.introduction"></el-input>
        </el-form-item>
        <el-form-item style="text-align: right">
          <el-button type="primary" round plain @click="updateUserInfo"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { getInfoApi, editUserInfoApi } from "@/api/user";

export default {
  data() {
    return {
      parms: {
        username: this.$store.getters.name,
      },

      InfoModel: {
        realname: "",
        sex: "",
        age: "",
        major: "",
        phone: "",
        introduction: "",
        id: "",
      },
      rules: {
        realname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 5 个字符", trigger: "blur" },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          { min: 1, max: 2, message: "长度在 1 到 2 个字符", trigger: "blur" },
        ],
        major: [{ required: true, message: "请选择专业", trigger: "blur" }],
      },
    };
  },
  created() {
    this.GetInfo();
  },
  methods: {
    async updateUserInfo() {
      //console.log(this.InfoModel);
      this.$refs.InfoForm.validate(async (valid) => {
        if (valid) {
          let res = await editUserInfoApi(this.InfoModel);
          if (res && res.code == 200) {
            this.$message.success(res.msg);
            this.GetInfo();
          }
        }
      });
    },
    async GetInfo() {
      // console.log(this.parms);
      let res = await getInfoApi(this.parms);
      console.log(res);
      if (res && res.code == 200) {
        this.InfoModel = res.data;
        let sex = this.InfoModel.sex.toString();
        this.InfoModel.sex = sex;
      }
    },
  },
  components: {},
};
</script>

<style scoped>
</style>
