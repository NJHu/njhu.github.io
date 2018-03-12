<template>
  <div class="home-content-list">
    <h2><a href="https://www.github.com/njhu" target="_blank">我的 github 地址:  https://www.github.com/njhu</a></h2>
    <div>
      <!--<iframe src="https://github.com/NJHu/iOSProject" frameborder="0"></iframe>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'homecontentlist',
  data () {
    return {
      msg: 'homecontentlist!'
    }
  },
  mounted: function () {
    console.log(this.$route)
    console.log(this.$route.query)
    console.log(this.$router)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .home-content-list {
    border: 1px solid #eaeaea;
    border-radius: 4px;
    margin-bottom: 15px;
    height: 1000px;
    background-color: white;
    h2 {
      padding: 20px;
      font-size: 20px;
    }
  }
</style>
