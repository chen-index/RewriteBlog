<template>
  <header
    class="header"
    :class="HeightType === '0' ?  'noHeader' : ( HeightType === '1' ? '' : 'yesHeader')"
  >
    <div class="left">
      <img src="@/assets/img/t3-1-150x150.jpg" alt />
    </div>
    <div class="right">
      <div class="list">
        <div class="item" @click="$router.push('/')">首页</div>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop({
    type: String, // 父组件传递给子组件的数据类型
    required: false, // 是否必填
    default: "" // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
  }) ifHeight!: string;

  i = 0;
  HeightType = this.ifHeight
  mounted() {
    // this.ifHeight = "2";
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
    // console.log(this.i);
    if (scroll < 0) {
      this.HeightType = "1";
    } else {
      this.HeightType = "0";
    }
    if (this.i === 0) {
      this.HeightType = "2";
    }
  }
}
</script>

<style lang="less">
    // 头部
.header:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.4)!important;
}
.noHeader {
    height: 0!important;
    transform: translateY(-70px);
}
.yesHeader {
    opacity: .3;
    // background: none!important;
    // color: #333!important;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    // background: none;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 1px rgba(0,0,0,.15);
    height: 75px;
    top: 0;
    width: 100%;
    z-index: 99;
    overflow: hidden;
    .left {
        width: 50px;
        height: 50px;
        overflow: hidden;
        margin-top: 17px;
        border-radius: 50%;
        box-shadow: 0 0 5px #868686;
        margin-left: 20px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .right {
        display: flex;
        .list {
            display: flex;
            .item {
                cursor: pointer;
                color: #fff;
                font-size: 15px;
                padding: 0 20px;
                font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
            }
        }
    }
}
</style>