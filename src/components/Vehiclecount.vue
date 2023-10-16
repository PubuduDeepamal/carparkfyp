<template>
    <div style="background-color: #f1f7fc;">
      <br /><br /><br />
      <div class="container">
        <div class="section-title">
          <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 60px;">
            Vehicle Count Analysis
          </h3>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <table class="table table-striped table-mobile-responsive table-mobile-sided">
                  <thead>
                    <tr>
                      <th scope="col" style="text-align:center"><b>Vehicle Count</b></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(count, vehicleType) in vehicleCount" :key="vehicleType">
                      <td style="text-align:center">{{count}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        gateStatus: {},
        parkingSlots: {},
        vehicleCount: {},
      };
    },
    mounted() {
      this.getData();
      setInterval(this.getData, 2000);
    },
    methods: {
      getData() {
        this.getVehicleCount();
      },
      getVehicleCount() {
        axios
          .get('https://smart-parking-system-acf8a-default-rtdb.firebaseio.com/Vehicle_Count.json')
          .then((response) => {
            this.vehicleCount = response.data;
          })
          .catch((error) => {
            console.error('Error fetching vehicle count data:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  #GateStatus {
    font-size: 45.8px;
    font-weight: bold;
    text-align: center;
    font-family: 'New Time Nevran', sans-serif;
  }
  
  #GateStatus1 {
    text-align: center;
    font-family: 'New Time Nevran', sans-serif;
    font-size: 25.8px;
    text-decoration: none;
  }
  
  #GateStatus1:hover {
    text-align: center;
    font-family: 'New Time Nevran', sans-serif;
    font-size: 25.8px;
    color: #14c03e;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    #GateStatus[data-v-dc347e84] {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      font-family: 'New Time Nevran', sans-serif;
    }
  }
  
  .table-bordered {
    border-width: 0 1px;
    text-align: center;
  }
  </style>
  