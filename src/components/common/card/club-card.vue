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
                @click="Apply(item.name)"
                >申请加入</el-button
              >
            </div>
            <div class="text item" style="float: left; padding: 3px 0 ;height:20px">
              <span>{{ item.introduction }}</span>
            </div>
          </el-card>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>


export default {
  name: "clubCard",
  props: {
    clubList: {
      type: Array,
    },
  },
  methods: {
    Apply(name) {
      this.$emit('Apply', name);
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
