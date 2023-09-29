<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <LkPlayground ref="lkpg" />
    <hr />
    <router-link active-class="active" to="/home">Home</router-link>
    &nbsp;&nbsp;

    <router-link active-class="active" to="/about">About</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LkPlayground from "./components/LkPlayground.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    LkPlayground,
  },
  
  methods: {
    msg(message) {
      alert(message);
    },
  },
  mounted() {
    // this.$refs.lkpg.$on("msg", this.msg);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  background: darkorange;
  color: white;
}
</style>
