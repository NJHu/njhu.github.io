<template>
  <div class="bottom-bar-wrapper">
    <div class="bottom-content">
      <p>{{msg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottombar',
  data () {
    return {
      msg: 'bottom-bar-wrapper'
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
  .bottom-bar-wrapper {
    height: 60px;
    .bottom-content {
      max-width: 1012px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 16px !important;
      padding-right: 16px !important;
      background-color: #3a8ee6;
      height: 100%;
    }
  }
</style>
