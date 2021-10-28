<template>
  <div class="container" id="note">
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
          console.log("wrote")
          localStorage.setItem('note', this.note)
        },
        deep: true
      }
    },
    mounted() {
      if (localStorage.getItem("note")) {
        this.note = localStorage.getItem("note")
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
  font-family: Tahoma, sans-serif;
  outline: none;
  resize: none;
}
</style>