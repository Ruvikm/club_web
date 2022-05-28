<template>
  <el-row class="wrapper">
    <el-row>
      <el-col>
        <el-col v-if="IsApply">
          <el-col>
            <h1>创建社团</h1>
          </el-col>
          <el-form
            :model="InfoModel"
            :rules="rules"
            ref="ApplyForm"
            label-width="100px"
          >
            <el-form-item label="社团名称" prop="deptName">
              <el-input v-model="InfoModel.deptName"></el-input>
            </el-form-item>
            <el-form-item label="社团编码" prop="deptCode">
              <el-input v-model="InfoModel.deptCode"></el-input>
            </el-form-item>
            <el-form-item label="社团地址" prop="deptAddress">
              <el-input v-model="InfoModel.deptAddress"></el-input>
            </el-form-item>
            <el-form-item label="社团电话" prop="deptPhone">
              <el-input v-model="InfoModel.deptPhone"></el-input>
            </el-form-item>
            <el-form-item label="社团介绍" prop="introduction">
              <el-input
                type="textarea"
                v-model="InfoModel.introduction"
              ></el-input>
            </el-form-item>
            <el-form-item style="text-align: right">
              <el-button type="primary" round plain @click="CreateClub"
                >提交申请</el-button
              >
            </el-form-item>
          </el-form>
        </el-col>
        <el-col v-else>
          <el-col>
            <h1>申请创建状态</h1>
          </el-col>
          <el-table :data="ApplyList" empty-text="暂无申请" style="width: 100%">
            <el-table-column prop="deptName" label="社团名称">
            </el-table-column>
            <el-table-column prop="deptCode" label="社团编码">
            </el-table-column>
            <el-table-column prop="deptAddress" label="社团地址">
            </el-table-column>
            <el-table-column prop="deptPhone" label="社团电话">
            </el-table-column>
            <el-table-column prop="introduction" label="社团介绍">
            </el-table-column>
            <el-table-column prop="applyTime" label="申请时间">
            </el-table-column>
            <el-table-column prop="state" label="申请状态">
              <template slot-scope="scope">
                <el-tag
                  size="normal"
                  v-if="scope.row.state == '0'"
                  disable-transitions
                  >待审核中</el-tag
                >
                <el-tag
                  size="normal"
                  type="success"
                  v-if="scope.row.state == '1'"
                  disable-transitions
                  >审核通过</el-tag
                >
                <el-tag
                  size="normal"
                  type="danger"
                  v-if="scope.row.state == '2'"
                  disable-transitions
                  >审核失败</el-tag
                >
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import { addClubApplyApi, CheckStateApi } from "@/api/department";
export default {
  data() {
    return {
      ApplyList: [],
      parms: {
        username: this.$store.getters.name,
      },
      InfoModel: {
        username: this.$store.getters.name,
        deptName: "",
        deptCode: "",
        deptAddress: "",
        deptPhone: "",
        introduction: "",
        pid: 0,
      },
      rules: {
        deptName: [
          { required: true, message: "请输入社团名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 5 个字符", trigger: "blur" },
        ],
        introduction: [
          { required: true, message: "请输入社团介绍", trigger: "blur" },
        ],
      },
    };
  },
  created(){
    this.getApplyList(this.parms);
  },
  computed: {
    IsApply() {
      if (this.ApplyList.length == 0) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async CreateClub() {
      this.$refs.ApplyForm.validate(async (valid) => {
        if (valid) {
          let res = await addClubApplyApi(this.InfoModel);
          if (res && res.code == 200) {
            this.$message.success(res.msg);
            this.getApplyList(this.parms);
          }
        }
      });
    },
    async getApplyList() {
      let res = await CheckStateApi(this.parms);
      if (res && res.code == 200) {
        this.ApplyList = res.data;
      }
    },
  },
  components: {},
};
</script>

<style scoped>
</style>
