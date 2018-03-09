<template>
  <div id="app-window">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app-window {
  background-color: skyblue;
  min-width: 1020px;
}
</style>
