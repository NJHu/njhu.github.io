<template>
  <div class="home-right-nav">
    <div class="nav-section">
      <div class="title">
        <h3>网站公告</h3>
      </div>
    </div>
    <div class="nav-section">
      <div class="title">
        <h3>近期文章</h3>
      </div>
    </div>
    <div class="nav-section">
      <div class="title">
        <h3>分类目录</h3>
      </div>
    </div>
    <div class="nav-section">
      <div class="title">
        <h3>标签分类</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homerightnav',
    data() {
      return {
        msg: '404!'
      }
    },
    mounted: function () {
      console.log(this.$route)
      console.log(this.$route.query)
      console.log(this.$router)
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .home-right-nav {
    padding-right: 10px;
    padding-left: 10px;
    .nav-section {
      background-color: white;
      height: 200px;
      margin-bottom: 15px;
      border-radius: 4px;
      border: 1px solid #eaeaea;
      overflow: hidden;
      .title {
        h3 {
          background-color: #fbfbfb;
          border-bottom: 1px solid #eaeaea;
          color: #666;
          font-size: 18px;
          padding: 11px 15px 10px;
        }
      }
    }
  }
</style>
