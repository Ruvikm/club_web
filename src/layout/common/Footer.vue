<template>
  <el-row class="footer">
    <el-col>
      <el-col :span="12" style="text-align: left">
        <el-link
          class="footer-link"
          rel="nofollow"
          :underline="false"
          :href="rules"
          style="vertical-align: baseline"
          ><span>社区规章</span></el-link
        >
        <el-link
          class="footer-link"
          rel="nofollow"
          :underline="false"
          :href="email"
          style="vertical-align: baseline"
          ><span>意见反馈</span></el-link
        >
        <el-link
          class="footer-link"
          rel="nofollow"
          :underline="false"
          :href="aboutMe"
          style="vertical-align: baseline"
          ><span>关于作者</span></el-link
        >
      </el-col>
      <el-col :span="12" style="text-align: right">
        <el-col> {{introduce}} </el-col>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "PcFooter",
  data() {
    return {
      introduce:"一个分享社团日常的平台  ……\ ( > < ) /",
      rules: "",
      aboutMe: "https://blog.csdn.net/ruvikm",
      email:"mailto:ruvikm@126.com"
    };
  },
};
</script>

<style scoped>
.footer {
  font-size: 14px;
  align-items: center;
  display: flex;
}
.footer .footer-link {
  margin-left: 2rem;
}
</style>
