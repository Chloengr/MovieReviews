<template>
  <div class="sidebar">
    <h1>
      <img class="icon" src="../assets/filmstrip.png" alt="">Movies and Reviews<img class="icon" src="../assets/filmstrip.png" alt="">
    </h1>
    <hr>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/searching">Do a research</router-link></li>
      <li><router-link to="/">Contact</router-link></li>
    </ul>
  </div>
</template>

<script> 
export default {
  components: {
},
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Movies and Reviews',
          hiddenOnCollapse: false
          },
          {
            href: '/',
            title: 'Home',
          },
          {
            href: '/searching',
            title: 'Do a research',
          }
      ]
    }
  },
}
</script>

<style scoped>
.sidebar {
  background-color: #2e2532;
  color:#fff;
  height: 100%;
  width: 350px;
  max-width: 1024px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  margin: 30px;
  text-decoration: none;
  display: block;
  color:#fff;
  font-size: 20px;
}
hr{
  width: 90%;
}
.icon{
  height: 18px;
  width: 18px;
}
</style>