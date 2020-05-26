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
    <header class="header" :class="ifHeight === '0' ? 'noHeader' : ''">
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
    <div style="height:1000px">
      111111
      121321
      213213
      213213
      21321
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
    if (scroll < 0) {
      console.log("up");
      this.ifHeight = '1'
    } else {
      console.log("down");
      this.ifHeight = '0'
    }
  }
}
</script>
