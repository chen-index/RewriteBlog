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
    <div class="container">
      <div class="contentBox">
        <div class="title">SSM整合案例[企业权限管理系统]</div>
        <div class="time">发布于 2020-04-17 106 次阅读</div>
        <hr />
      </div>

      <!-- 头像 -->
      <div class="avatarBox">
        <img src="@/assets/img/login.png" alt />
        <div class="user">Abu</div>
        <div class="info">我们的征途是是星辰大海</div>
      </div>

      <div class="comments">
        查看评论
      </div>
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

  mounted() {
    this.getArticleDetail()
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
    }
    const { data: res } = await getArticleDetail(data)
    if (res.status !== "200") {
      return this.myThis.$message({
        type: "error",
        message: "获取文章详情失败"
      });
    } else {
      console.log(res);
      this.ArticleDetai = res.result.article
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
</style>