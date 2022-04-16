<template>
  <div>
    <el-header style="height: 60px">
      <v-header />
    </el-header>

    <el-main>
      <router-view class="main" />
    </el-main>
    <el-footer>
      <v-footer />
    </el-footer>
  </div>
</template>
<script>
import Header from "@/layout/common/Header";
import Footer from "@/layout/common/Footer";

export default {
  name: "Layout",
  components: {
    "v-header": Header,
    "v-footer": Footer,
  },
};
</script>

<style scoped="scoped">
.el-header {
  background: #fff;
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
  z-index: 80;
}

.el-main {
  padding: 0;
  background-attachment: fixed;
  min-height: 85vh;
  overflow-x: hidden;
}

.el-footer {
  position: relative;
  width: 100%;
  padding-top: 1.2rem;
  background: #fff;
  border-top: 1px solid rgba(0, 40, 100, 0.12);
  z-index: 80;
}

.main {
  color: #333;
  text-align: center;
  margin: 78px auto;
  min-height: 550px;
}
@media screen and (max-width: 600px) {
  .main {
    width: 95%;
    padding: 3px;

    position: relative;
    top: 0;
    bottom: 0;
  }
}
@media screen and (min-width: 1196px) {
  .main {
    width: 1024px;
  }
}
</style>
