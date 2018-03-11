<template>
  <div class="home-wrapper">
    <router-view name="topnavigationbar"></router-view>
        <div class="container-wrapper">
          <div class="page-content">
            <div class="dash-board">
              <div class="news-content">
                <router-view name="contentlist"></router-view>
              </div>
              <div class="right-nav">
                <router-view name="webrightnav"></router-view>
              </div>
            </div>
          </div>
        </div>
    <router-view name="bottombar"></router-view>
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
    .container-wrapper {
      .page-content {
        padding-top: 20px;
        width: 1012px;
        margin-right: auto;
        margin-left: auto;
        display: table;
        .dash-board {
          /*margin-left: -10px;*/
          /*margin-right: -10px;*/
          .news-content {
            width: 66.666667%;
            float: left;
            /*padding-left: 10px;*/
            /*padding-right: 10px;*/
            /*height: 1000px;*/
          }
          .right-nav {
            width: 33.333333%;
            float: left;
            /*padding-right: 10px;*/
            /*padding-left: 10px;*/
            /*height: 300px;*/
          }
        }
      }
    }
  }
</style>
