<template>
  <div class="article-detail-wrapper">
      <div id="mark-down-content" v-html="htmlContent">
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import marked from 'marked'
  export default {
    name: 'articeldetail',
    data() {
      return {
        msg: 'articeldetail!',
        htmlContent: ''
      }
    },
    created() {
      let vm = this
      let mdFileUrl = this.$route.query.mdFileUrl
      console.log('==============')
      console.log(mdFileUrl)
      if (mdFileUrl) {
        axios.get(mdFileUrl)
          .then(response => {
            console.log(response.data)
//            document.getElementById('mark-down-content').innerHTML =
//              marked(response.data)
            console.log(marked)
            vm.htmlContent = response.data
          })
          .catch(error => {
            console.log(error)
            alert('网络错误，不能访问, 跨域访问, 浏览器需要设置')
          })
      }
    },
    mounted: function () {
      let mdFileUrl = this.$route.query.article.mdFileUrl
      console.log('==============')
      console.log(mdFileUrl)
      console.log(this.$route)
      console.log(this.$route.query)
      console.log(this.$router)
      console.log(axios)
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .article-detail-wrapper {
    border: 1px solid #eaeaea;
    border-radius: 4px;
    margin-bottom: 15px;
    background-color: white;
    h2 {
      padding: 20px;
      font-size: 20px;
    }
    ul {
      display: block;
      list-style-type: disc;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
      -webkit-padding-start: 40px;
      li {
        list-style-type: disc;
        display: list-item;
        text-align: -webkit-match-parent;
      }
    }
  }
</style>
