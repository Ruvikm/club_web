<template>
  <el-row class="wrapper"> 
    <el-col>
      <h1>社团目录</h1>
    </el-col>
    <el-col>
      <left-image-card />
    </el-col>
  </el-row>
</template>

<script>
import LeftImageCard from "@/components/common/card/club-card.vue";
export default {
  data() {
    return {
      leftUrl: "https://static.rymcu.com/avatar/1641480007398.png",
    };
  },
  methods: {},
  components: {
    LeftImageCard,
  },
};
</script>

<style scoped>
</style>
