<template>
  <div class="top-navigation-bar-wrapper">
    <div class="content-wrapper">
      <div class="tudou-icon" @click="iconClick"><label>技术土豆</label><label class="blog">博客</label></div>
      <div class="title-des"> 关注前端技术 </div>
      <div class="tudou-navigation">
        <div v-for="navItem in (tudouNavList.concat().reverse())" :key="navItem.title">
          <a @click="navtoNextPage(navItem)">{{navItem.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topnavigationbar',
  data () {
    return {
      msg: 'topnavigationbar',
      tudouNavList: [
        {title: '首页', path: '/'},
        {title: '前端日记', path: '/'},
        {title: '生活趣事', path: '/'},
        {title: '自我介绍', path: '/'}
      ]
    }
  },
  mounted: function () {
    console.log(this.$route)
    console.log(this.$route.query)
    console.log(this.$router)
  },
  methods: {
    iconClick () {
      this.$router.replace({path: '/', query: {}})
    },
    navtoNextPage: function (pageItem) {
      console.log(pageItem)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .top-navigation-bar-wrapper {
    height: 56px;
    position: relative !important;
    background-color: white;
    /*background-color: #24292e;*/
    .content-wrapper {
      background-color: white;
      width: 1000px;
      height: 100%;
      margin-right: auto;
      margin-left: auto;
      display: flex;
      flex-direction: row;
      .tudou-icon {
        height: 100%;
        vertical-align: bottom;
        width: auto;
        line-height: 56px;
        padding-top: 5px;
        margin-right: 10px;
        label {
          color: deepskyblue;
          font-size: 30px;
          letter-spacing: 3px;
          margin-right: 5px;
        }
        .blog {
          font-size: 15px;
          letter-spacing: 1px;
        }
      }
      .title-des {
        vertical-align: bottom;
        border-left: solid 1px #e4e4e4;
        padding-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        line-height: 56px;
        font-size: 15px;
      }
      .tudou-navigation {
        flex: 1;
        div {
          float: right;
          text-align: center;
          vertical-align: bottom;
          margin: 15px;
          margin-top: 25px;
          font-size: 18px;
          a {
            color: #666;
          }
          a:hover   {color:#8AC78F;}
        }
      }
    }
  }
</style>
