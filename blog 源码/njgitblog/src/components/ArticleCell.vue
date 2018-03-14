<template>
  <div class="articel-cell-wrapper">

  </div>
</template>

<script>
  export default {
    name: 'articlecell',
    data() {
      return {
        msg: 'articlecell!'
      }
    },
    created () {

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
  .articel-cell-wrapper {
  }
</style>
