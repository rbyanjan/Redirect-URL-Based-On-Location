<template>
  <br />
  <div v-if="job">
    <h2>{{ job.title }}</h2>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  //below is not required now as we are getting parameter as props
  // data() {
  //     return {
  //         id: this.$route.params.id
  //     }
  // }
  data() {
    return {
      job: null,
    };
  },
  log() {
    console.log(id);
  },
  mounted() {
    fetch("http://localhost:4000/api/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>  
</style>