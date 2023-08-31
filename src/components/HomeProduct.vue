<template>
  <div id="container">
    <div class="container py-3">
      <header>
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 class="display-4 fw-normal text-body-emphasis" id="ParkingRatestitle"
              v-html="title"></h1>
          <p class="fs-5 text-body-secondary"></p>
        </div>
      </header>
      <main>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div v-for="(bundle, index) in dataBundles" :key="index" class="col">
            <div class="card mb-4 rounded-3 shadow-sm" id="boxhover">
              <div class="card-header py-3" id="font12">
                <h4 class="my-0 fw-normal" id="font">{{ bundle.title }}</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  {{ bundle.price }}
                  <small class="text-body-secondary fw-light" id="font">/Per Hour</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4" id="font">
                  <li v-for="(item, index) in bundle.description.split('\n')" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import parkingData from '../assets/json/ParkingRates.json';


export default {
  data() {
    return {
      dataBundles: Object.values(parkingData),
      title: '<b>Parking Options and Rates</b>',
    };
  },
};
</script>

<style scoped>
#ParkingRatestitle{
    text-align: center;
    font-weight: bold;
    font-size: 45.8px;
    font-family: 'New Time Nevran', sans-serif;
}


#container{
  background-color: #f2f3f8;
}

body {
    background-image: linear-gradient(180deg, var(--bs-secondary-bg), var(--bs-body-bg) 100px, var(--bs-body-bg));
  }
  

  
  .pricing-header {
    max-width: 700px;
  }

#font12{
  background-color: white;
  font-family: 'New Time Nevran', sans-serif;
}

#font{
  font-family: 'New Time Nevran', sans-serif;
}

@media screen and (max-width: 767px) {
  #ParkingRatestitle {
    font-size: 40px; 
  }
}

#boxhover:hover{
  border: 2px solid #14c03e;
  background: white;
}
</style>
