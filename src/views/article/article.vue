<template>
  <div class="topic-archive-page">
    <topic-nav></topic-nav>
    <article-list :articles="articles" @currentChange="currentChangeArticle"></article-list>
  </div>
</template>

<script>
import ArticleList from "@/components/archive/list.vue";
import topicNav from '@/components/common/topic/main.vue'
export default {
  name: "topicArticleList",
  data() {
    return {
      articles:{

      }
    };
  },
  methods: {
    currentChangeArticle(page) {
      this.$router.push({
        path: `/topic/${this.defaultParams.topic_uri}?page=${page}`
      })
    }
  },
  components: {
    ArticleList,
    topicNav
  },
};
</script>

<style scoped>
</style>
