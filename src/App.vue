<template id="main-template">
  <div id="app">
    <router-link to="/"><img id="mainlogo" src="./assets/swlogo.png"></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
    }
  },
  async mounted(){
    await Promise.all([
      this.$store.dispatch("fetchAllPeople"),
      this.$store.dispatch("fetchAllPlanets"),
      this.$store.dispatch("fetchAllStarships")
    ])
  }
};
</script>


<style lang="scss">
  #mainlogo {
    width: 100%;
    max-width: 400px;
    height: auto;
    padding: 3%;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #nav {
    padding: 30px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: grey;
  }
</style>