<template>
  <div class="articel-cell-wrapper">
    <!--{{article}}-->
    <router-link :to="{path: '/articledetail', query: {mdFileUrl: article.mdFileUrl}}" target="_blank" class="focus">
      <img :src="article.image" alt="">
    </router-link>
    <div class="sub-content">
      <header>
        <h2>
          <router-link class="h2-title" :to="{path: '/articledetail', query: {mdFileUrl: article.mdFileUrl}}" target="_blank"
                       :title="article.title">
            {{article.title}}
          </router-link>
        </h2>
      </header>
      <p class="meta">
        <time>{{article.time}}</time>
      </p>
      <p class="note">
        {{article.subTitle}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articlecell',
    props: ['article'],
    data() {
      return {
        msg: 'articlecell!'
      }
    },
    created() {

    },
    mounted: function () {
      console.log(this.$route)
      console.log(this.$route.query)
      console.log(this.$router)
//      console.log(axios)
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .articel-cell-wrapper {
    border-bottom: 1px solid #eaeaea;
    padding: 20px;
    overflow: hidden;
    margin-bottom: -1px;
    display: flex;
    flex-direction: row;
    .focus {
      float: left;
      color: #666;
      width: 220px;
      img {
        width: 220px;
        height: 150px;
        max-width: 100%;
        vertical-align: middle;
      }
      cursor: pointer;
    }
    .sub-content {
      padding-left: 10px;
      flex: 1;
      /*height: 100px;*/
      /*background-color: red;*/
      header {
        margin-bottom: 10px;
        .cat {
          background-color: #8AC78F;
          padding: 3px 6px;
          font-size: 12px;
          display: inline-block;
          position: relative;
          top: -2px;
          margin-right: 6px;
          color: #fff;
          text-decoration: none;
        }
        h2 {
          padding: 0;
          display: inline;
          font-size: 18px;
          line-height: 24px;
          margin-top: 0;
          font-weight: bold;
          color: inherit;
          .h2-title {
            color: #555;
          }
          .h2-title:hover {
            color: #8AC78F;
          }
        }
      }
      .note {
        margin-bottom: 10px;
        font-size: 13px;
        color: #999;
        word-wrap: break-word;
        line-height: 20px;
      }
      .meta {
        color: #999;
        font-size: 12px;
        margin-bottom: 10px;
        time {
          margin-right: 20px;
        }
      }
    }
  }

  .articel-cell-wrapper:hover {
    background-color: #f9f9f9;
    /*position: relative;*/
    z-index: 2;
  }
</style>
