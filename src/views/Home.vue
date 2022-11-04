<template>
  <br/>
  <div class="home">
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsa, iusto repellat, nisi molestias quis tempore eos maiores commodi non, rerum ipsam animi veritatis eum. Assumenda necessitatibus sed, culpa incidunt non at consequuntur natus dolorem sint. Dolores vel consequatur eum quidem sit, iure tempora? Impedit in soluta provident recusandae rerum numquam quas eaque explicabo quos ullam, odit nihil dolor, sequi dolorum perspiciatis rem exercitationem sed nulla dolorem ipsum, repellat fugiat! Reiciendis ullam tenetur nihil explicabo alias. Nisi impedit, deserunt doloribus beatae sapiente iure molestiae itaque atque! Neque, officia totam consequuntur illum nostrum aliquam voluptates, animi doloremque obcaecati voluptatibus nemo delectus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsa, iusto repellat, nisi molestias quis tempore eos maiores commodi non, rerum ipsam animi veritatis eum. Assumenda necessitatibus sed, culpa incidunt non at consequuntur natus dolorem sint. Dolores vel consequatur eum quidem sit, iure tempora? Impedit in soluta provident recusandae rerum numquam quas eaque explicabo quos ullam, odit nihil dolor, sequi dolorum perspiciatis rem exercitationem sed nulla dolorem ipsum, repellat fugiat! Reiciendis ullam tenetur nihil explicabo alias. Nisi impedit, deserunt doloribus beatae sapiente iure molestiae itaque atque! Neque, officia totam consequuntur illum nostrum aliquam voluptates, animi doloremque obcaecati voluptatibus nemo delectus.</p>  
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'

export default {
  name: 'Home',
  components: { },
  created(){
        console.log(this.$route.query.name)
        // this.$router.push('/http://localhost:8080')
        if (this.$route.query.name == 'test') {
            window.location.href = 'http://localhost:8080'
        }        
    }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
