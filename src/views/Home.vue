<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Fitness_logo.png" width="100">
    <HelloWorld msg="Hello World"/>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="../assets/logo.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
