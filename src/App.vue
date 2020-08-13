<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style>
  .mint-msgbox-content {
    padding: 10px 20px 15px;
    border-bottom: 1px solid #ddd;
    min-height: 36px;
    position: relative;
    height: calc(70vh);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .mint-msgbox-title{
    padding-bottom: 10px;
  }
  .mint-msgbox-message{
    text-align: unset !important;
  }
  .strong{
    color: #333;
  }
</style>
