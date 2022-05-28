<template>
  <div class="topic-archive-page">
    <topic-nav @handleSelectTopic="selectTopic"></topic-nav>
    <article-list :ArticleList="articlesData"></article-list>
    <div class="vertical-container text-center" style="padding-bottom: 10px">
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
  </div>
</template>

<script>
import ArticleList from "@/components/archive/list";
import topicNav from "@/components/common/topic/main";
import { getArticleApi } from "@/api/article";
export default {
  name: "topicArticleList",
  data() {
    return {
      articlesData: [],
      parms: {
        currentPage: 1, //当前是第几页
        pageSize: 6, //每页查询条数
        total: 0,
        type: "",
      },
    };
  },
  created() {
    this.getArticleList();
  },
  methods: {
    // 分页相关
    currentChange(val) {
      this.parms.currentPage = val;
      this.getArticleList();
      console.log("当前页");
      console.log(val);
    },
    sizeChange(val) {
      console.log("页容量");
      console.log(val);
      this.parms.currentPage = 1;
      this.parms.pageSize = val;
      this.getArticleList();
    },
    //选择topic
    selectTopic(item) {
      let _this = this;
      switch (item) {
        case "new":
          _this.parms.type = "";
          break;
        case "Admissions":
          _this.parms.type = "社团招生类";
          break;
        case "Daily":
          _this.parms.type = "日常分享类";
          break;
        case "Event":
          _this.parms.type = "活动回顾类";
          break;
        default:
          _this.parms.type = "";
      }
      // console.log(item);
      this.getArticleList();
    },
    async getArticleList() {
      let res = await getArticleApi(this.parms);
      if (res && res.code == 200) {
        this.parms.total = res.data.total;
        this.articlesData = res.data.records;
        let ListData = this.articlesData;
        //解编码
        for (let i in ListData) {
          let item = ListData[i];
          let decoded = this.getDecode(item.content);
          
          //由于是内容预览，不显示图片，所以要过滤掉图片标签
          var data = decoded.replace(/<img.*>.*<\/img>/gi, ""); //过滤如<img></img>形式的图片元素
          data = data.replace(/<img.*\/>/gi, ""); //过滤如<img />形式的元素
          item.content = data;
        }
      }
    },
    //Base64解码
    getDecode(str) {
      return decodeURIComponent(
        atob(str)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    },
  },
  components: {
    ArticleList,
    topicNav,
  },
};
</script>

<style scoped>
</style>
