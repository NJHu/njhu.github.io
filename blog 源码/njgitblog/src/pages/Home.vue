<template>
  <div class="home-wrapper">
    <div class="top-navigation-bar">
      <span class="blog-title" @click="$router.replace({path: '/', qyery: {}})">YYYY<label>YY</label></span>
    </div>
    <div class="content">
      <div class="left-nav"></div>
      <div class="right-content"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      msg: 'HomeMsg'
    }
  },
  mounted: function () {
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .home-wrapper {
    .top-navigation-bar {
      border-bottom: 1px solid #e4e4e4;
      height: 100px;
      .blog-title {
          font-size: 30px;
          color: black;
        float: left;
        margin-left: 40px;
        margin-top: 50px;
        label {
          font-size: 16px;
        }
      }
    }
    .content {
      padding-top: 20px;
      padding-right: 40px;
      padding-left: 40px;
      padding-bottom: 20px;
      overflow: hidden;
      .left-nav {
        width: 20%;
        float: left;
        height: 100px;
        background-color: greenyellow;
      }
      .right-content {
        width: 80%;
        height: 200px;
        background-color: yellow;
        margin-left: 20%;
      }
    }
    .footer {
      border-top: 1px solid #e4e4e4;
      height: 100px;
    }
  }
</style>
