<template>
  <div class="container-fluid" id="header">
    <div class="container" id="tool-bar">
    <a class="action-icon" href="#" v-on:click="download"><b-icon class="nav-icon" icon="download"></b-icon></a>
    <a class="action-icon" href="#" v-on:click="clear"><b-icon class="nav-icon" icon="x-circle"></b-icon></a>
    <!-- <a class="action-icon" href="#" v-on:click="info"><b-icon class="nav-icon" icon="info"></b-icon></a> -->
    <!-- <a class="action-icon" href="#"><b-icon class="nav-icon" icon="printer"></b-icon></a> -->
    <!-- <a class="action-icon" href="#"><b-icon class="nav-icon" icon="gear"></b-icon></a> -->
    <!-- <a class="action-icon" href="#"><b-icon class="nav-icon" icon="info"></b-icon></a> -->
    </div>
    <b-modal id="modal" size="lg" title="note.computer" hide-footer>

    </b-modal>
  </div>
</template>

<script>
  import { saveAs } from 'file-saver';
  export default {
    name: "Header",
    methods: {
      download: function() {
        if (localStorage.getItem("note")) {
          var note = localStorage.getItem("note")
          var blob = new Blob([note], {type: "text/plain;charset=utf-8"});
          saveAs(blob, "note-computer.txt");
        }
      },
      clear: function() {
        localStorage.setItem('note', "");
        this.$store.commit('update', "");
      },
      info: function() {
        this.$bvModal.show('modal')
      }
    }
  }
</script>

<style scoped>
#header {
  background-color: darkcyan;
  flex: 0 1 46px;
  text-align: center;
}
.action-icon {
  padding: 1em;
  padding-left: 1em;
  padding-right: 1em;
  display: inline-block;
}
.nav-icon {
  color: white;
  width: 20px;
  height: 20px;
}
.navbar-brand {
  padding-left: 1.5em;
}

</style>