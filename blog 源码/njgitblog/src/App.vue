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
  min-width: 1020px;
  background-color: #f6f6f6;
}
</style>
