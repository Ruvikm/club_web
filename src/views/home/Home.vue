<template>
  <div>
   
      <img src="@/assets/bg.png" width="100%" height="100%" alt="" />
    
  </div>
</template>

<script>
export default {
  data() {
    return {
       
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: fixed;
}
</style>
