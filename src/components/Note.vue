<template>
  <div class="container" id="note">
    <textarea class="col-12" v-model="note" placeholder="Start typing..."></textarea>
  </div>
</template>

<script>
  export default {
    name: "Note",
    props: ["note"]
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
  border: 1px solid #888;
  padding: 5px;
  font-family: Tahoma, sans-serif;
  outline: none;
  resize: none;
}
</style>