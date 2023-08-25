<template>
    <div>
      <div class="image-container">
        <img class="img-fluid w-100" style="height: 500px;" src="../../assets/img/carpark.jpeg">
        <div class="image-text">
          <p>Contact Us</p>
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
    top: 300px;
    left: 39%; 
    color: white; 
    font-size: 65px; 
    font-weight: bold;
    font-family: 'New Time Nevran', sans-serif;
  }
  </style>
  