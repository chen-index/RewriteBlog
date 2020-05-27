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
        <div style="margin-top: 55px" v-for="(item, i) in ArticleList.article" :key="i">
            <div class="posts_Box">
          <div class="left">
            <el-image style="width: 100%; height: 100%" :src="imgUrl + item.picture" fit="cover"></el-image>
            <!-- <img :src="imgUrl + item.picture" alt /> -->
          </div>
          <div class="right">
            <div class="topTitle">
              <div class="title" @click="goArticle(item._id)">{{item.title}}</div>
              <div class="time">发布于 2020-04-17</div>
            </div>
            <div
              class="bottomTitle"
            >资料：链接：https://pan.baidu.com/s/1NPT0GsOCn93UnfPBPhAjmA 提取码：xiju 视频：链接：https://pan.baidu.com/s/1T1mTpsglJPemZIR5M3Nejg 提取码：...</div>
          </div>
        </div>
        <hr />
        </div>
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
import { getArticleList } from "@/api/article";

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
  loadForm = {
    pagenum: 1,
    pagesize: 5
  }
  ArticleList = [];
  myThis: any = this;
  imgUrl = "http://120.77.79.140/";

  mounted() {
    this.getArticleList();
    // this.ifHeight = "2";
    // window.addEventListener("scroll", this.handleScroll, true);
  }
  // 跳转页面
  async getArticleList() {
    const data = {
      pagenum: this.loadForm.pagenum,
      pagesize: this.loadForm.pagesize
    };
    const { data: res } = await getArticleList(data);
    if (res.status !== "200") {
      return this.myThis.$message({
        type: "error",
        message: "获取评论列表失败"
      });
      // return this.Message.error('获取评论列表失败')
    } else {
      console.log(res);

      this.ArticleList = res.result;
    }
  }
  goArticle(_id:any) {
    this.$router.push({ name: 'Article', query: { id: _id }});
  }
}
</script>
