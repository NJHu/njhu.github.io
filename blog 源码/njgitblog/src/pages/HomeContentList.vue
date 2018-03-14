<template>
  <div class="home-content-list-wrapper">
    <div v-if="articleList">
      <article-cell v-for="articleItem in articleList" :key="articleItem.title" :article="articleItem"></article-cell>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import articleCell from '../components/ArticleCell'

  export default {
    name: 'homecontentlist',
    data() {
      return {
        msg: 'homecontentlist!',
        articleList: undefined
      }
    },
    components: {
      'article-cell': articleCell
    },
    created() {
      let vm = this
      axios.get('https://raw.githubusercontent.com/NJHu/njhu.github.io/master/files/articleList.json')
        .then(response => {
          console.log(response.data)
          vm.articleList = response.data
        })
        .catch(error => {
          console.log(error)
          alert('网络错误，不能访问, 跨域访问, 浏览器需要设置')
        })
    },
    mounted: function () {
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
  .home-content-list-wrapper {
    border: 1px solid #eaeaea;
    border-radius: 4px;
    margin-bottom: 15px;
    min-height: 900px;
    background-color: white;
    overflow-x: hidden;
    overflow-y: auto;
    h2 {
      padding: 20px;
      font-size: 20px;
    }
  }
</style>
