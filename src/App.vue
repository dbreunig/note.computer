<template>
  <div id="app">
    <Header />
    <Note v-bind:note="note"/>
    <Footer />
  </div>
</template>

<script>
import Note from "./components/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Note,
    Header,
    Footer
  },
  data () {
    return {
      note: ""
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}
#app {
  display: flex;
  flex-flow: column;
  height: 100%;
  background-color: white;
}
</style>
