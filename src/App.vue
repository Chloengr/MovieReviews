<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family: "Lato";
  src: local("Lato"),
   url(./fonts/Lato/Lato-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Old_Standard_TT";
  src: local("Old_Standard_TT"),
   url(./fonts/Old_Standard_TT/OldStandardTT-Regular.ttf) format("truetype");
}
#app {
  font-family: Lato, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #262a10;
  margin-top: 60px;
}
h1{
  font-family: Old_Standard_TT, Helvetica, Arial;
  display: flex;
  margin-left: 20px;
}
.border {
  width: 25%;
  height: 3px;
  background: #9d0208;
  margin: 10px ;
}
</style>
