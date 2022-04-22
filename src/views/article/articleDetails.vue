<template>
  <el-row class="article__wrapper">
    <el-col>
      <el-card>
        <div class="card-body d-flex flex-column article">
          <div class="article__item">
            <h1 class="list__title">
              {{ article.title }}
            </h1>
            <el-row class="pt-5">
              <el-col :xs="3" :sm="1" :xl="1">
                <el-avatar
                  src="https://static.rymcu.com/article/1578475481946.png"
                ></el-avatar>
              </el-col>
              <el-col :xs="9" :sm="11" :xl="11">
                <div style="margin-left: 1rem">
                  <el-link href="#" class="text-default">
                    {{ article.author }}
                  </el-link>
                  <small class="d-block text-muted">{{
                    article.createTime
                  }}</small>
                </div>
              </el-col>
            </el-row>
            <div
              class="pt-7 pipe-content__reset vditor-reset"
              id="articleContent"
              v-html="article.content"
              style="overflow: hidden"
            ></div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { getArticleByIdApi } from "@/api/article";
export default {
  name: "ArticleDetail",
  data() {
    return {
      parms: {
        id: this.$route.params.id,
      },
      article: {
        title: "",
        author: "",
        createTime: "",
        content: "",
      },
    };
  },
  created() {
    this.getArticleData();
  },
  methods: {
    async getArticleData() {
      let res = await getArticleByIdApi(this.parms);
      if (res && res.code == 200) {
        this.article = res.data;
        let decoded = this.getDecode(this.article.content);
        decoded = this.convert(decoded);
        this.article.content = decoded;
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
    //修改<img>标签中的style属性
    convert(htmlText) {
      // htmlText = html.replaceAll("(<img[^>]*?)\\s+width\\s*=\\s*\\S+", "$1");
      // htmlText = html.replaceAll("(<img[^>]*?)\\s+height\\s*=\\s*\\S+", "$1");
      let str = htmlText.replace(/<img[^>]*>/gi, function (match, capture) {
        return match.replace(
          /style\s*?=\s*?([‘"])[\s\S]*?\1/gi,
          'style="max-width:100%;height:auto;"'
        ); // 替换style
      });
      return str;
    },
    // return htmlText;
  },

  components: {},
};
</script>

<style lang="scss">
.article__wrapper {
  max-width: 980px;
  margin: 20px auto;
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
}
</style>
