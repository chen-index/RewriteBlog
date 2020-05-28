<template>
  <div class="article">
    <!-- 动态背景
    <vue-particles
      color="#dedede"
      :particleOpacity="0.5"
      :particlesNumber="50"
      shapeType="star"
      :particleSize="3"
      linesColor="#FFFFFF"
      :linesWidth="0.8"
      :lineLinked="true"
      :lineOpacity="0.3"
      :linesDistance="130"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="cash"
    ></vue-particles>-->

    <myHeader :ifHeight="ifHeight"></myHeader>
    <!-- 动态背景 -->
    <div class="main">
      <div class="stars">
        <div class="star" v-for="(item,index) in starsCount" :key="index" ref="star"></div>
      </div>
    </div>

    <!-- 内容 -->
    <!-- 渲染 -->
    <div class="container">
      <div class="contentBox">
        <div class="title">{{ArticleDetai.title}}</div>
        <div class="time">发布于 {{$moment(ArticleDetai.publishDate).format('YYYY-MM-DD HH:mm:ss')}}  无数次阅读</div>
        <hr />
      <div id="content" class="article-detail" v-html="articleDetail.content"></div>
      </div>

      <!-- 头像 -->
      <div class="avatarBox">
        <img src="@/assets/img/login.png" alt />
        <div class="user">Abu</div>
        <div class="info">我们的征途是是星辰大海</div>
      </div>

      <div class="comments">查看评论</div>
    </div>

    <siteFooter></siteFooter>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import "@/less/article.less";
import myHeader from "@/components/Header.vue";
import siteFooter from "@/components/siteFooter.vue";
import { getArticleDetail } from "@/api/article";

import markdown from "@/utils/markdown";

import Vue from "vue";
import Component from "vue-class-component";
@Component({
  components: {
    myHeader,
    siteFooter
  }
})
export default class App extends Vue {
  ArticleDetai = {}; // 文章详情
  myThis: any = this;
  msg = 123;
  i = 0;
  ifHeight = "";
  starsCount = 800; //数量
  distance = 600; //间距
  articleDetail = {
    content: '',
    toc: ''
  }

  mounted() {
    this.getArticleDetail();
    let starArr = this.$refs.star;

    starArr.forEach((item: any) => {
      var speed = 0.2 + Math.random() * 1;
      var distance = this.distance + Math.random() * 300;
      item.style.transformOrigin = `0 0 ${distance}px`;
      item.style.transform = `translate3d(0,0,-${distance}px) rotateY(${Math.random() *
        360}deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`;
    });
  }
  // 查询文章详情
  async getArticleDetail() {
    const data = {
      _id: this.$route.query.id
    };
    const { data: res } = await getArticleDetail(data);
    if (res.status !== "200") {
      return this.myThis.$message({
        type: "error",
        message: "获取文章详情失败"
      });
    } else {
      console.log(res);
      this.ArticleDetai = res.result.article;
      // 使用 marked 转换
        const article = markdown.marked(res.result.article.content);
        article.then((response: any) => {
          this.articleDetail.content = response.content;
          this.articleDetail.toc = response.toc;
        });
    }
  }
  // 跳转页面
  goArticle() {
    this.$router.push("Article");
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  min-width: 1200px;
  background-color: #fff;
  background: radial-gradient(
    ellipse at bottom,
    rgba(0, 0, 0, 0.8) 0%,
    #090a0f 100%
  );
  overflow: hidden;
  filter: drop-shadow(0 0 10px white);

  .stars {
    transform: perspective(500px);
    transform-style: preserve-3d;
    position: absolute;
    perspective-origin: 50% 100%;
    left: 50%;
    animation: rotate 90s infinite linear;
    bottom: -256px;
    .star {
      width: 2px;
      height: 2px;
      background: #f7f7b8;
      position: absolute;
      top: 0;
      left: 0;
      backface-visibility: hidden;
    }
    @keyframes rotate {
      0% {
        transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
      }
      100% {
        transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
          rotateY(-360deg);
      }
    }
  }

  .dot-num {
    position: relative;
    height: 200px;
    width: 100%;
    .dot {
      position: absolute;
      top: 0;
      display: inline-block;
      .dot-title {
        font-size: 40px;
        line-height: 37px;
        font-weight: bold;
        color: #f23340;
      }
      .dot-describe {
        margin-top: 10px;
        line-height: 20px;
        color: rgba($color: #fff, $alpha: 0.8);
        font-size: 14px;
      }
    }
  }
}

/*对 markdown 样式的补充*/
pre {
    display: block;
    padding: 10px;
    margin: 0 0 10px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #abb2bf;
    background: #282c34;
    word-break: break-all;
    word-wrap: break-word;
    overflow: auto;
}
h1,h2,h3,h4,h5,h6{
    margin-top: 1em;
    /* margin-bottom: 1em; */
}
strong {
    font-weight: bold;
}

p > code:not([class]) {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
}
p img{
    /* 图片居中 */
    margin: 0 auto;
    display: flex;
}

#content {
    font-family: "Microsoft YaHei",  'sans-serif';
    font-size: 16px;
    line-height: 30px;
    color: #EFEFEF;
    max-width: 800px;
}

#content .desc ul,#content .desc ol {
    color: #333333;
    margin: 1.5em 0 0 25px;
}

#content .desc h1, #content .desc h2 {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

#content .desc a {
    color: #009a61;
}
</style>