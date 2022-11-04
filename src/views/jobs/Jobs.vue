<template>
  <br />
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading jobs...</p>
  </div>
  <!-- <div>Job Params {{ $route.query.name }}</div> -->
</template>

<script>
export default {
  created() {
    console.log(this.$route.query.name);
    // this.$router.push('/http://localhost:8080')
    if (this.$route.query.name == "test") {
      window.location.href = "http://localhost:8080";
    }
  },
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:4000/api/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
  .job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job a {
    text-decoration:none;
  }
</style>