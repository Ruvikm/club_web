<template>
  <div class="topic-archive-page">
    <topic-nav @handleSelectTopic="selectTopic"></topic-nav>
    <article-list
      :articles="articles"
    ></article-list>
  </div>
</template>

<script>
import ArticleList from "@/components/archive/list.vue";
import topicNav from "@/components/common/topic/main.vue";
export default {
  name: "topicArticleList",
  data() {
    return {
      articles: {},
      parms: {
        type: "",
      },
    };
  },
  methods: {
    //选择topic
    selectTopic(item) {
      let _this = this;
      switch (item) {
        case "new":
          _this.parms.type = "";
          break;
        case "Admissions":
          _this.parms.type = 1;
          break;
        case "Daily":
          _this.parms.type = 3;
          break;
        case "Event":
          _this.parms.type = 2;
          break;
        default:
          _this.parms.type = "";
      }
      console.log(item);
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
