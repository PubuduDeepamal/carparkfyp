<template>
  <div>
    <div class="image-container">
      <img class="img-fluid w-100" style="height: 500px;" src="../../assets/img/carpark.jpeg">
      <div class="image-text">
        <p class="taligen" style="text-align: center;">Available</p>
        <p class="taligen" style="text-align: center;">Slots</p>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baner1'
}
</script>

<style scoped>
.img-fluid {
  margin-top: 63px;
}

.image-container {
  position: relative;
}

.image-text {
  position: absolute;
  top: 200px;
  left: 36%; 
  color: white; 
  font-size: 65px; 
  font-weight: 900;
  font-family: 'New Time Nevran', sans-serif;
}
@media (max-width: 768px) {
  .image-text {
  position: absolute;
  top: 250px;
  left: 16%; 
  color: white; 
  font-size: 65px; 
  font-weight: bold;
  font-family: 'New Time Nevran', sans-serif;
}
}

@media (min-width: 768px) {
  .taligen {
    margin-left: 88px;
}
}
</style>
