<template>
  <el-row class="wrapper">
    <el-col style="margin-bottom: 1rem">
      <el-menu
        type="border-card"
        style="margin-top: -5px; border: 0"
        mode="horizontal"
        @select="handleSelectTopic"
      >
        <el-menu-item index="new">最新</el-menu-item>
        <el-menu-item index="Admissions">招生</el-menu-item>
        <el-menu-item index="Daily">日常分享</el-menu-item>
        <el-menu-item index="Event">活动回顾</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "topicNav",
  props: {
    currentTopic: {
      type: String,
      default: "news",
    },
  },
  computed: {},
  methods: {
    handleSelectTopic(item) {
      // console.log(item);
      this.$emit("handleSelectTopic", item);
    },
  },
};
</script>

<style scoped>
</style>
