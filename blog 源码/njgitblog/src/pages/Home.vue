<template>
  <div class="home-wrapper">
    <router-view name="topnavigationbar"></router-view>
        <div class="container-wrapper">
          <div class="page-content">
            <div class="dash-board">
              <div class="news-content">
                <div v-for="news in newsList" :key="news.title" class="content-item">
                  <p>{{news.title}}</p>
                  <p>{{news.content}}</p>
                </div>
              </div>
              <div class="right-nav"></div>
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
      msg: 'HomeMsg',
      newsList: [
        {
          title: 'title0',
          content: 'content0'
        },
        {
          title: 'title1',
          content: 'content1'
        },
        {
          title: 'title2',
          content: 'content1'
        },
        {
          title: 'title3',
          content: 'content1'
        }
      ]
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
    background-color: cyan;
    .container-wrapper {
      background-color: magenta;
      .page-content {
        background-color: greenyellow;
        padding-top: 20px;
        width: 980px;
        margin-right: auto;
        margin-left: auto;
        display: table;
        .dash-board {
          background-color: blue;
          margin-left: -10px;
          margin-right: -10px;
          .news-content {
            background-color: yellow;
            width: 66.666667%;
            float: left;
            padding-left: 10px;
            padding-right: 10px;
            height: 1000px;
          }
          .right-nav {
            background-color: purple;
            width: 33.333333%;
            float: left;
            padding-right: 10px;
            padding-left: 10px;
            height: 300px;
          }
        }
      }
    }
  }
</style>
