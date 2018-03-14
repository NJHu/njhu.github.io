<template>
  <div class="article-detail-wrapper">
      <div id="mark-down-content">
        {{msg}}
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
        msg: 'articeldetail!'
      }
    },
    created() {
      axios.get('https://raw.githubusercontent.com/NJHu/iOSProject/master/README.md')
        .then(response => {
          console.log(response.data)
          document.getElementById('mark-down-content').innerHTML =
            marked(response.data)
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
  .article-detail-wrapper {
    border: 1px solid #eaeaea;
    border-radius: 4px;
    margin-bottom: 15px;
    background-color: white;
    h2 {
      padding: 20px;
      font-size: 20px;
    }
  }
</style>
