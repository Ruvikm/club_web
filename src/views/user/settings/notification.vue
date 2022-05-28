<template>
  <el-row>
    <el-col>
      <h1>社团信息</h1>
    </el-col>
    <el-col>
      <el-form :model="InfoModel" ref="InfoForm" label-width="100px">
        <el-col v-if="IsMember">
          <el-form-item label="社团名称:">
            <span>{{ InfoModel.deptName }}</span>
          </el-form-item>

          <el-form-item label="角色名称:">
            <span>{{ InfoModel.roleName }}</span>
          </el-form-item>

          <el-form-item label="近期会议:">
            <el-table
              :data="MeetingData"
              empty-text="暂无会议"
              style="width: 80%"
            >
              <el-table-column prop="meetingName" label="会议名称" width="180">
              </el-table-column>
              <el-table-column prop="meetingTime" label="会议时间" width="180">
              </el-table-column>
              <el-table-column prop="meetingPlace" label="会议地点">
              </el-table-column>
            </el-table>
          </el-form-item>
          <!-- 占位用 -->
          <el-form-item></el-form-item>
          <el-form-item></el-form-item>
          <el-form-item>
            <el-col :span="12" :offset="16">
              <el-button type="danger" plain @click="LeaveClub"
                >退出社团</el-button
              >
            </el-col>
          </el-form-item>
        </el-col>
        <el-col v-else>
          <el-form-item label="申请状态:">
            <template>
              <el-tag
                size="normal"
                v-if="InfoModel.state == -1"
                disable-transitions
                >未申请社团</el-tag
              >
              <el-tag
                size="normal"
                v-if="InfoModel.state == 0"
                disable-transitions
                >待审核中</el-tag
              >
              <el-tag
                size="normal"
                type="success"
                v-if="InfoModel.state == 1"
                disable-transitions
                >审核通过</el-tag
              >
              <el-tag
                size="normal"
                type="danger"
                v-if="InfoModel.state == 2"
                disable-transitions
                >审核失败</el-tag
              >
            </template>
          </el-form-item>
        </el-col>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { getShowDataApi, LeaveClubApi } from "@/api/user";

export default {
  data() {
    return {
      prams: {
        username: this.$store.getters.name,
      },
      InfoModel: {
        deptName: "",
        roleName: "",
        latestMeeting: [],
        state: "",
      },
      MeetingData: [],
    };
  },
  created() {
    this.getShowData();
  },
  computed: {
    IsMember() {
      let deptName = this.InfoModel.deptName;
      if (deptName != null) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async LeaveClub() {
      let confirm = await this.$myconfirm("确认退出当前社团？");
      if (confirm) {
        console.log(this.prams);
        let res = await LeaveClubApi(this.prams);
        if(res && res.code ==200){
           this.$message.success(res.msg);
           //刷新
           this.getShowData();
        }
      }
    },

    async getShowData() {
      let res = await getShowDataApi(this.prams);
      console.log(res);
      if (res && res.code == 200) {
        this.InfoModel = res.data;
        console.log(this.InfoModel);
        if (this.InfoModel.roleName == null) {
          this.InfoModel.roleName = "普通成员";
        }
        if (this.InfoModel.latestMeeting == null) {
          this.MeetingData = null;
        } else {
          var a = new Array();
          a.push(this.InfoModel.latestMeeting);
          this.MeetingData = a;
        }
      }
    },
  },
  components: {},
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
