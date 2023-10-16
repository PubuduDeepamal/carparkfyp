<template>
    <div>
  
      <div class="row">
        <br><br><br><br>
        <h1 class="display-4 mb-4" id="GateStatus" style="margin-top: 100px;">Vehicle Count</h1>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <table class="table table-striped table-mobile-responsive table-mobile-sided">
                <thead>
                  <tr>
                    <th scope="col" style="text-align: center;"><b>Vehicle Type</b></th>
                    <th scope="col" style="text-align: center;"><b>Count</b></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(count, vehicleType) in vehicleCount" :key="vehicleType">
                    <td style="text-align: center;">{{ vehicleType }}</td>
                    <td style="text-align: center;">{{ count }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br><br><br>
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
  