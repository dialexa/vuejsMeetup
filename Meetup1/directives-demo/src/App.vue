<template>
  <div id="app">
    <header>
      <div class="content">
        <img src="./assets/logo.png" height="30">
        <h2>Directives</h2>
      </div>
    </header>
    <Todos/>
  </div>
</template>

<script>
import Todos from './components/Todos';

export default {
  name: 'App',
  components: {
    Todos
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

header {
  height: 40px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid lightslategray;
  background: whitesmoke;
}

.content {
  display: flex;
  width: 1024px;
  align-items: center;
  margin: 0 3em;
}

.content > h2 {
  margin-left: 0.5em;
}
</style>
