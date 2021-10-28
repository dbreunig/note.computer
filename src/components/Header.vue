<template>
  <!-- <div id="header" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">note.computer</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><a class="nav-link me-sm-0" href="#"><b-icon class="nav-icon" icon="download"></b-icon></a></li>
        <li class="nav-item"><a class="nav-link" href="#"><b-icon class="nav-icon" icon="download"></b-icon></a></li>
        <li class="nav-item"><a class="nav-link" href="#"><b-icon class="nav-icon" icon="download"></b-icon></a></li>
        <li class="nav-item"><a class="nav-link" href="#"><b-icon class="nav-icon" icon="download"></b-icon></a></li>
      </ul>
  </div> -->
  <div class="container-fluid" id="header">
    <div class="container" id="tool-bar">
    <a class="action-icon" href="#"><b-icon class="nav-icon" icon="download"></b-icon></a>
    <a class="action-icon" href="#"><b-icon class="nav-icon" icon="printer"></b-icon></a>
    <a class="action-icon" href="#"><b-icon class="nav-icon" icon="gear"></b-icon></a>
    <!-- <a class="action-icon" href="#"><b-icon class="nav-icon" icon="info"></b-icon></a> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
#header {
  background-color: darkcyan;
  flex: 0 1 38px;
}
.action-icon {
  padding: .5em;
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