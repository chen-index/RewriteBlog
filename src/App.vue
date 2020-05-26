<template>
  <div id="app">
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
    <router-view />
  </div>
</template>

<style lang="less">
  .cash {
    position:fixed;
    top:0;
    width:100%;
    z-index: -1;
  }
</style>
