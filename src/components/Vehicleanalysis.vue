<template>
    <div style="background-color: #f1f7fc;">
      <br><br><br>
      <div class="container mt-5">
        <div class="row justify-content-center mt-4">
          <div class="col-md-6">
            <div class="card text-center">
              <div class="card-body">
                <h3 class="card-title" id="fontfamily"><b>Available Slots</b></h3>
                <p class="card-text display-4" id="fontfamily" style="font-size: 40px;">{{ availableSlots }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card text-center">
              <div class="card-body">
                <h3 class="card-title" id="fontfamily"><b>Unavailable Slots</b></h3>
                <p class="card-text display-4" id="fontfamily" style="font-size: 40px;">{{ unavailableSlots }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br><br>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        availableSlots: 0,
        unavailableSlots: 0
      };
    },
    methods: {
      fetchData() {
        fetch('https://smart-parking-system-acf8a-default-rtdb.firebaseio.com/Parking_Slots.json')
          .then(response => response.json())
          .then(data => {
            this.availableSlots = 0;
            this.unavailableSlots = 0;
  
            for (const slotId in data) {
              if (data[slotId] === 0) {
                this.availableSlots++;
              } else if (data[slotId] === 1) {
                this.unavailableSlots++;
              }
            }
          });
      }
    },
    mounted() {
      this.fetchData(); // Initial fetch
  
      // Refresh data every 1 second
      setInterval(() => {
        this.fetchData();
      }, 1000);
    }
  };
  </script>
  
  <style>
  #fontfamily {
    font-family: 'New Time Nevran', sans-serif;
  }
  
  .faqsection1 {
    text-align: center;
    padding-bottom: 30px;
  }
  </style>
  