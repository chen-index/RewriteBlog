<template>
  <div>
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
    <header class="header" :class="ifHeight === '0' ?  'noHeader' : ( ifHeight === '1' ? '' : 'yesHeader')">
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
    </header>
    <div class="content">
      <div class="posts">
        <div class="notice">
          <div class="notice-content">
            欢迎光临~
          </div>
        </div>
        <p class="posts_title">Blog Posts</p>
        <div class="posts_Box">
          <div class="left">
            <img src="@/assets/img/t2-150x150.jpg" alt="">
          </div>
          <div class="right">
            <div class="topTitle">
              <div class="title">SSM整合案例[企业权限管理系统]</div>
              <div class="time">发布于 2020-04-17</div>
            </div>
            <div class="bottomTitle">资料：链接：https://pan.baidu.com/s/1NPT0GsOCn93UnfPBPhAjmA   提取码：xiju 视频：链接：https://pan.baidu.com/s/1T1mTpsglJPemZIR5M3Nejg     提取码：...</div>
          </div>
        </div>
        <hr>
      </div>

      <div class="site-footer">
      <div class="footertext">
        <p>SSSICP备20002009号</p>
      </div>
      <div class="footer-device">
        <span>Copyright © 2017 . All rights reserved. |       </span>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import "@/less/home.less";

import Vue from "vue";
import Component from "vue-class-component";
@Component({})
export default class App extends Vue {
  msg = 123;
  i = 0;
  ifHeight = '1';
  mounted() {
    this.ifHeight = '2'
    window.addEventListener("scroll", this.handleScroll, true);
  }
  handleScroll() {
    // 页面滚动距顶部距离
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    let scroll = scrollTop - this.i;
    this.i = scrollTop;
    console.log(this.i);
    if (scroll < 0) {
      this.ifHeight = '1'
    } else {
      this.ifHeight = '0'
    }
    if (this.i === 0) {
      this.ifHeight = '2'
    }
  }
}
</script>
