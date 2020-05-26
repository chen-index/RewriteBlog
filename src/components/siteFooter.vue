<template>
  <div class="site-footer">
    <div class="footertext">
      <p>SSSICP备20002009号</p>
    </div>
    <div class="footer-device">
      <span>Copyright © 2017 . All rights reserved. |</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() ifHeight!: string;

  mounted() {}
}
</script>

<style lang="less">
// 底部
.site-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  .footertext {
    text-align: center;
    font-size: 13px;
    font-family: miranafont, "Hiragino Sans GB", STXihei, "Microsoft YaHei",
      SimSun, sans-serif;
    p {
      opacity: 0.3;
      color: #eaeadf;
    }
  }
  .footer-device {
      margin-top: 10px;
    span {
      opacity: 0.3;
      color: #eaeadf;
    }
  }
}
</style>