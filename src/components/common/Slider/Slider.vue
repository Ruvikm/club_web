<template>
	<el-carousel indicator-position="outside">
		<el-carousel-item v-for="carousel in carouselImg" :key="carousel.id">
			<router-link :to="{ name: 'Passage', params: { id: carousel.passageId } }">
       <!--轮播图图片 '/fileServer/' + carousel.filePath -->
				<img :src="'/fileServer'+carousel.filePath" alt="carousel.fileName" class="slider-img" />
			</router-link>
		</el-carousel-item>
	</el-carousel>
</template>

<script>
const OK = 200;
export default {
	data() {
		return {
			carouselImg: [],
      bannerHeight: ''
		};
	},
	methods: {
		getCarouselList: function(typeId, pageSize) {
		  //在config目录下已经配置过代理路径
		  //请求：前端：http://localhost:80/api/files ----> 代理路径： 后端：http://localhost:8081/club/api/files
			this.$axios
				.get('/api/files', {
					params: {
						fileTypeId: typeId,
						pageNum: 1,
						pageSize: pageSize
					}
				})
				.then(res => {
					if (res.data.code == OK) {
						console.log("res.data.data.list ===>"+res.data.data.list);
						this.carouselImg = res.data.data.list;
            // 获取到图片后，调用this.imgLoad()方法定义图片初始高度
						this.imgLoad();
            console.log("carouselImg ===>"+this.carouselImg);
					} else {
						this.$layer.alert(res.data.data);
					}
				});
		},

		refreshPasagePage: function() {
		  //查询轮播图
			this.getCarouselList(4, 6);
		}
	},
	created() {
    //查询轮播图
		this.getCarouselList(4, 6);
	}
};
</script>

<style scoped="scoped">
.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 400px;
	margin: 0;
}

.slider-img {
	cursor: pointer;
	width: 1196px;
}
.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
</style>
