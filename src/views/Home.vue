<template>
  <div>
    <!-- 动态背景 -->
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
    ></vue-particles>
    <!-- 头部背景 -->
    <div class="headertop">
      <figure class="centerbg">
        <div class="focusinfo">
          <div class="header-tou">
            <a href="#">
              <img src="@/assets/img/login.png" alt />
            </a>
          </div>
          <div class="header-info">
            <p>我们的征途是星辰大海</p>
          </div>
          <div class="top-social">
            <li></li>
          </div>
        </div>
      </figure>
    </div>
    <!-- 头部Tab栏 -->
    <!-- <header
      class="header"
      :class="ifHeight === '0' ?  'noHeader' : ( ifHeight === '1' ? '' : 'yesHeader')"
    >
      <div class="left">
        <img src="@/assets/img/t3-1-150x150.jpg" alt />
      </div>
      <div class="right">
        <div class="list">
          <div class="item">首页</div>
          <div class="item">编程</div>
          <div class="item">分享</div>
          <div class="item">声明</div>
        </div>
        <div class="info">
          <div class="search"></div>
          <div class="user"></div>
        </div>
      </div>
    </header>-->
    <myHeader :ifHeight="ifHeight"></myHeader>
    <!-- 内容 -->
    <div class="content">
      <div class="posts">
        <div class="notice">
          <div class="notice-content">欢迎光临~</div>
        </div>
        <p class="focusing">聚焦</p>
        <div class="focusing_Box">
          <div class="item">
            <div class="foverlay"></div>
            <div class="text">Gitee</div>
            <img src="@/assets/img/imgjpg.jpg" alt />
          </div>
          <div class="item">
            <div class="foverlay"></div>
            <div class="text">感谢光顾</div>
            <img src="@/assets/img/bg.jpg" alt />
          </div>
          <div class="item">
            <div class="foverlay"></div>
            <div class="text">我的作品</div>
            <img src="@/assets/img/temp.jpg" alt />
          </div>
        </div>
        <p class="posts_title">Blog Posts</p>
        <div class="posts_Box">
          <div class="left">
            <img src="@/assets/img/t2-150x150.jpg" alt />
          </div>
          <div class="right">
            <div class="topTitle">
              <div class="title" @click="goArticle">SSM整合案例[企业权限管理系统]</div>
              <div class="time">发布于 2020-04-17</div>
            </div>
            <div
              class="bottomTitle"
            >资料：链接：https://pan.baidu.com/s/1NPT0GsOCn93UnfPBPhAjmA 提取码：xiju 视频：链接：https://pan.baidu.com/s/1T1mTpsglJPemZIR5M3Nejg 提取码：...</div>
          </div>
        </div>
        <hr />
      </div>
      <siteFooter></siteFooter>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import "@/less/home.less";
import myHeader from "@/components/Header.vue";
import siteFooter from "@/components/siteFooter.vue";

import Vue from "vue";
import Component from "vue-class-component";
@Component({
  components: {
    myHeader,
    siteFooter
  }
})
export default class App extends Vue {
  ifHeight = "2";

  mounted() {
    // this.ifHeight = "2";
    // window.addEventListener("scroll", this.handleScroll, true);
  }
  // 跳转页面
  goArticle() {
    this.$router.push("Article");
  }
  
}
</script>
