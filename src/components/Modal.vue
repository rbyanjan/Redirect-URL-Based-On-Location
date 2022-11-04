<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <!-- <h1>Modal Title</h1> -->
      <h1>{{ header }}</h1>
      <!-- <p>modal content</p> -->
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  created() {
    console.log("Global Var Test : ", this.globalVar);
  },
};
</script>


<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
</style>