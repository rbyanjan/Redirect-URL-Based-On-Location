<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <input type="text" ref="name">
    <button @click="handleClick">click me</button> -->
    <div v-if="showModal">
      <Modal :header="header" :text="text" @close="toggleModal" />
    </div>
    <button @click="toggleModal">open modal</button>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> -->
      <router-link :to="{ name: 'Jobs' }">Jobs</router-link> |
      <router-link :to="{ name: 'Location' }">Location</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
      <!-- <a href="/about">About</a> -->
    </div>
    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go foward</button>

    <router-view />
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the Giveaway!",
      text: "Grab you ninja swag for half price!",
      showModal: false,
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    // handleClick() {
    //   console.log(this.$refs.name)
    //   this.$refs.name.classList.add('active')
    //   this.$refs.name.focus()
    // }
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
  /* margin-top: 60px; */
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
