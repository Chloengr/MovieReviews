<template>
  <div>
    <h1>LATEST REVIEWS</h1>
    <div class="border"></div>
    <MainCard/>
    <AsideMenu/>
  </div>
</template>

<script>
import AsideMenu from './AsideMenu'
import MainCard from './MainCard'

export default { 
  components:{
    AsideMenu,
    MainCard
  }
  
 }
</script>

<style scoped>

</style>