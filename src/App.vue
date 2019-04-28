<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="nav">
      <router-link to="/" tag="span">首页</router-link>
      <router-link to="/demo" tag="span">demo</router-link>
      <router-link to="/test" tag="span">test</router-link>
    </div>

    <router-view class="page-body"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
  .nav{
    height: 50px;
    line-height: 50px;
    background-color: #1f2530;
  }
  .nav span{
    display: inline-block;
    color: #fff;
    width: 80px;

  }
  .nav span:hover{
    cursor: pointer;
  }
  .nav span.router-link-exact-active{
    color: #fa5863;
  }
  .page-body{
    text-align: center;
  }
</style>
