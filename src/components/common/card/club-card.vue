<template>
  <div class="wrapper">
    <el-row class="row-cards row-deck" :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="12"
        v-for="item in clubList"
        :key="item.id"
      >
        <el-col style="margin-bottom: 20px">
          <el-card class="box-card" :body-style="{ padding: '20px' }">
            <div slot="header" class="clearfix">
              <span style="float: left; padding: 2px 0">{{ item.name }}</span>
              <el-button
                style="float: right; padding: 2px 0"
                type="text"
                @click="Apply"
                >申请加入</el-button
              >
            </div>
            <div class="text item" style="float: left; padding: 3px 0">
              {{ item.introduction }}
            </div>
          </el-card>
        </el-col>
      </el-col>
      <el-col>
        <div class="vertical-container text-center" style="padding-top: 10px">
          <el-pagination
            :hide-on-single-page="true"
            v-model="clubParm"
            layout="prev, pager, next"
            :current-page="1"
            :total="6"
            prev-text="上一页"
            next-text="下一页"
            @current-change="currentChange"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "clubCard",
  // props: {
  //   clubList: {
  //     type: Object,
  //   },
  // },
  data() {
    return {
      clubParm: [
        {
          currentPage: "1",
          total: "6",
        },
      ],

      clubList: [
        {
          name: "111",
          introduction: "2324",
        },
        {
          name: "222",
          introduction: "321",
        },
        {
          name: "fdh",
          introduction: "121231",
        },
        {
          name: "qewq",
          introduction: "dsfsfd",
        },
        {
          name: "qewq",
          introduction: "dsfsfd",
        },
        {
          name: "qewq",
          introduction: "dsfsfd",
        },
        {
          name: "qewq",
          introduction: "dsfsfd",
        },
        {
          name: "qewq",
          introduction: "dsfsfd",
        },
      ],
    };
  },
  methods: {
    Apply() {},
    currentChange(page) {
      this.$emit("currentChange", page);
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
  width: 350px;
}
</style>
