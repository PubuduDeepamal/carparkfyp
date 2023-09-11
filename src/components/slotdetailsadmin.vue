
<template>
    <br><br><br>
      <div class="container">
          <div class="section-title">
            <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 60px;">Slot Details</h3>
          </div>
        <div class="row">
          <div class="col">
              <div class="card">
                  <div class="card-body">
                      <table class="table table-striped table-mobile-responsive table-mobile-sided">
                          <thead>
                            <tr>
                                <th scope="col"><b>Slot Name</b></th>
                                <th scope="col"><b>Slot Status</b></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(slotStatus, slotName) in parkingSlots" :key="slotName">
                            <td>{{ slotName }}</td>
                            <td>{{ slotStatus }}</td>
                            </tr>
                          </tbody>
                      </table>
                  </div>
                </div>
          </div>
      </div>
    </div>
    <br>
  </template>
    
    
    <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        gateStatus: {}, // To store gate status data
        parkingSlots: {}, // To store parking slots data
      };
    },
    mounted() {
      this.getData(); // Fetch data initially
      setInterval(this.getData, 2000); // Fetch data every 5 seconds
    },
    methods: {
      getData() {
        this.getGateStatus();
        this.getParkingSlots();
      },
      getGateStatus() {
        axios
          .get('https://smart-parking-system-acf8a-default-rtdb.firebaseio.com/Gate_Status.json')
          .then((response) => {
            this.gateStatus = response.data;
          })
          .catch((error) => {
            console.error('Error fetching gate status:', error);
          });
      },
      getParkingSlots() {
        axios
          .get('https://smart-parking-system-acf8a-default-rtdb.firebaseio.com/Parking_Slots.json')
          .then((response) => {
            this.parkingSlots = response.data;
          })
          .catch((error) => {
            console.error('Error fetching parking slots data:', error);
          });
      },
    },
  };
  </script>
    
  <style>
  .card {
      margin-left: 200px
    }
  
  
    .faqsection {
      margin-left: 216px;
      padding-bottom: 30px;
  }
  
  </style>
  
  