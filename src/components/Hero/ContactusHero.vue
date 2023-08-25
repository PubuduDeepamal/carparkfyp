<template>
    <div>
      <div class="image-container">
        <img class="img-fluid w-100" style="height: 600px;" src="../../assets/img/carpark.jpeg">
        <div class="image-text">
          <p>Your Text Here</p>
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
    top: 340px;
    left: 38%; 
    color: white; 
    font-size: 56px; 
    font-weight: bold;
  }
  </style>
  