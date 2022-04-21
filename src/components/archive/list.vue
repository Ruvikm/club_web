<template>
  <el-row class="wrapper">
    <el-col :xs="24" :sm="24" :xl="24" style="margin: 0 auto">
      <el-col
        v-for="article in ArticleList"
        :key="article.id"
        style="padding-bottom: 1rem"
      >
        <el-card>
          <div class="card-body d-flex flex-column">
            <el-link
              :href="'/#/article/' + article.id"
              style="margin-bottom: 0.5rem"
            >
              <h4>
                <span v-html="article.title"></span>
              </h4>
            </el-link>
            <div
              class="text-muted article-summary-md"
              v-html="article.content"
            ></div>
            <el-row class="pt-5">
              <el-col :xs="3" :sm="1" :xl="1" class="mr-3">
                <!-- <el-avatar v-if="article.articleAuthorAvatarUrl" size="medium"
                           :src="article.articleAuthorAvatarUrl"></el-avatar> -->
                <el-avatar
                  size="medium"
                  src="https://static.rymcu.com/article/1578475481946.png"
                ></el-avatar>
              </el-col>
              <el-col :xs="16" :sm="16" :xl="16">
                <div style="top: 6px; position: relative">
                  <el-link class="text-default">
                    {{ article.author }}
                  </el-link>
                </div>
              </el-col>
              <el-col class="text-right">
                <el-link rel="nofollow" :underline="false" title="发布时间"
                  ><i class="el-icon-time"></i
                  ><span style="color: red">{{ article.createTime }}</span>
                </el-link>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    ArticleList: {
      type: Array,
    },
  },
  methods: {},
};
</script>

<style scoped>
</style>
