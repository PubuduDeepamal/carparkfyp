<template>
    <div>
      <div class="image-container">
        <img class="img-fluid w-100" style="height: 500px;" src="../../assets/img/carpark.jpeg">
        <div class="image-text">
          <p>Available Slots</p>
          
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
    left: 36%; 
    color: white; 
    font-size: 65px; 
    font-weight: bold;
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
  </style>
  