<template>
    <div>
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
            <br class="mobile-only">
            <div class="card text-center">
              <div class="card-body">
                <h3 class="card-title" id="fontfamily"><b>Unavailable Slots</b></h3>
                <p class="card-text display-4" id="fontfamily" style="font-size: 40px;">{{ unavailableSlots }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        // Fetch data from the Firebase Realtime Database URL
        fetch('https://smart-parking-system-acf8a-default-rtdb.firebaseio.com/Parking_Slots.json')
          .then(response => response.json())
          .then(data => {
            // Reset slot counts
            this.availableSlots = 0;
            this.unavailableSlots = 0;
  
            // Loop through the data to count available and unavailable slots
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
      this.fetchData(); 
  
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
  
  br.mobile-only {
    display: none;
  }
  
  @media (max-width: 768px) {
    br.mobile-only {
      display: block;
      margin-bottom: 20px;
    }
  }
  
  .card:hover {
    opacity: 0.9;
    box-shadow: 0 0.5rem 1rem #14c03e;
    border: 1px solid #14c03e;
  }
  
  @media (max-width: 768px) {
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 330px;
      margin: auto;
      text-align: center;
      font-family: arial;
    }
  }
  </style>
  