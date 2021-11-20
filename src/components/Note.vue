<template>
  <div class="container-fluid" id="note">
    <textarea class="col-12" v-model="note" placeholder="Start typing..."></textarea>
  </div>
</template>

<script>
  export default {
    name: "Note",
    props: ["note"],
    watch: {
      note: {
        handler() {
          localStorage.setItem('note', this.note)
        },
        deep: true
      }
    },
    mounted() {
      if (localStorage.getItem("note")) {
        this.note = localStorage.getItem("note");
      }
    }
  }
</script>

<style scoped>
#note {
  flex: 1 1 auto;
}
textarea {
  width: 100%;
  height: 100%;
  background-color: white;
  border: none;
  padding-top: 2em;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 2em;
  font-family: Tahoma, sans-serif;
  outline: none;
  resize: none;

}
.container-fluid {
  padding-left: 0px;
  padding-right: 0px
}
</style>