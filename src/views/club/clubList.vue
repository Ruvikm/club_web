<template>
  <el-row class="wrapper">
    <el-col>
      <h1>社团目录</h1>
    </el-col>
    <el-col>
      <el-input
        placeholder="请输入内容，回车搜索"
        prefix-icon="el-icon-search"
        v-model="SearchName"
        @keyup.enter.native="Search"
      >
      </el-input>
    </el-col>
    <el-col>
      <left-image-card :clubList="clubListData" @Apply="ApplyClub" />
    </el-col>
    <el-col>
      <div class="vertical-container text-center" style="padding-top: 10px">
        <el-pagination
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page.sync="parms.currentPage"
          :page-size="parms.pageSize"
          layout="prev, pager, next"
          :total="parms.total"
          background
        >
        </el-pagination>
      </div>
    </el-col>
    <!-- 新增或编辑 -->
    <sys-dialog
      :title="applyDialog.title"
      :height="applyDialog.height"
      :width="applyDialog.width"
      :visible="applyDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="ApplyModule"
          ref="ApplyForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="deptId" label="选择部门">
            <el-select
              v-model="ApplyModule.deptId"
              placeholder="请选择"
              @focus="getChoiceList"
              @change="getSelect(ApplyModule.deptId)"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item prop="introduction" label="自我介绍">
            <el-input
              v-model="ApplyModule.introduction"
              type="textarea"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
  </el-row>
</template>

<script>
import LeftImageCard from "@/components/common/card/club-card.vue";
import {
  getClubListApi,
  addApplyApi,
  getChoiceListApi,
} from "@/api/department";
import SysDialog from "@/components/system/SysDialog";
export default {
  name: "clubList",
  data() {
    return {
      SearchName:"",
      // 选择社团部门数据
      options: [],
      //申请规则
      rules: {
        deptId: [
          {
            required: true,
            trigger: "change",
            message: "请填写支出类型名称",
          },
        ],
        introduction: [
          {
            required: true,
            trigger: "blur",
            message: "请填写个人介绍",
          },
          {
            min: 5,
            max: 18,
            message: "5-18个字符",
            trigger: "change",
          },
        ],
      },
      //分页数据
      parms: {
        currentPage: 1, //当前是第几页
        pageSize: 6, //每页查询条数
        total: 0,
        SearchName:""
      },
      //社团列表
      clubListData: [],
      //申请信息数据源
      ApplyModule: {
        username: "",
        introduction: "",
        deptName: "",
        state: 0,
        deptId: "",
      },
      //申请弹窗
      // 新增或编辑弹窗数据
      applyDialog: {
        title: "",
        height: 200,
        width: 610,
        visible: false,
      },
    };
  },
  created() {
    this.getclubListData();
  },
  methods: {
    async Search() {
      this.parms.SearchName=this.SearchName;
       let res = await getClubListApi(this.parms);
      if (res && res.code == 200) {
        this.parms.total = res.data.total;
        this.clubListData = res.data.records;
      }
    },
    //获取选中的值
    getSelect(deptId) {
      this.ApplyModule.deptId = deptId;
    },
    //获取选项列表
    async getChoiceList() {
      let parms = {
        deptName: this.ApplyModule.deptName,
      };
      let res = await getChoiceListApi(parms);
      if (res && res.code == 200) {
        console.log(res.data);
        this.options = res.data;
      }
    },
    // 分页相关
    currentChange(val) {
      this.parms.currentPage = val;
      this.getclubListData();
      console.log("当前页");
      console.log(val);
    },
    sizeChange(val) {
      console.log("页容量");
      console.log(val);
      this.parms.currentPage = 1;
      this.parms.pageSize = val;
      this.getclubListData();
    },
    //获取社团列表
    async getclubListData() {
      //console.log(this.parms);
      let res = await getClubListApi(this.parms);
      if (res && res.code == 200) {
        this.parms.total = res.data.total;
        this.clubListData = res.data.records;
      }
    },
    //关闭弹窗
    onClose() {
      this.applyDialog.visible = false;
    },
    //确认
    onConfirm() {
      this.$refs.ApplyForm.validate(async (valid) => {
        if (valid) {
          let username = this.$store.getters.name;
          this.ApplyModule.username = username;
          console.log(this.ApplyModule);
          let res = await addApplyApi(this.ApplyModule);
          if (res && res.code == 200) {
            //刷新列表
            this.$message.success(res.msg);
          }
          this.applyDialog.visible = false;
        }
      });
    },
    //申请社团
    ApplyClub(name) {
      //先判断是否登录
      this.IsLogin();
      let username = this.$store.getters.name;
      if (username != "") {
        //清空表单数据
        this.$resetForm("ApplyForm", this.ApplyModule);
        //设置弹框属性
        this.applyDialog.title = name + "社团申请";
        this.applyDialog.visible = true;
        this.ApplyModule.deptName = name;
      }
    },
    //判断登录状态
    async IsLogin() {
      let username = this.$store.getters.name;
      //console.log(username);
      if (username == "") {
        let confirm = await this.$myconfirm("用户未登录，是否跳转到登录页面？");
        if (confirm) {
          this.$router.push({
            path: "/login",
          });
        }
      }
    },
  },
  components: {
    LeftImageCard,
    SysDialog,
  },
};
</script>

<style scoped>
</style>
