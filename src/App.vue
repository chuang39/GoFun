<!--展示模板-->
<template>
<div id="app">

  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Brand</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li><router-link to="home">Home</router-link></li>
          <li v-if="!isAuthenticated()"><router-link to="login">Login</router-link></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>

// 函数和()之间必须有空格；每个字段后不能有空格

<script>
import Hello from './components/ApiData'
export default {
  name: 'xxb',
  components: {
    Hello
  }
}
</script>

<script>
import auth from './auth'
export default {
  data () {
    return {
    }
  },
  methods: {
    logout () {
      auth.logout(this)
    },
    isAuthenticated () {
      return auth.isAuthenticated()
    }
  }
}
</script>

<!--样式代码-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.ui.menu .item img.logo {
  margin-right: 1.5em;
  width: 40px;
}
.main.container {
  margin-top: 7em;
}
</style>
