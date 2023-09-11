<template>
  <div>

    <!-- Display Parking Slots -->
    <div class="my-4">
      <h1 class="display-4 mb-4" id="GateStatus" style="margin-top: 50px;">Available Parking Slots</h1>
      <div class="card">
        <div class="card-body">
          <table class="table table-bordered">
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

    <!-- Display Gate Status -->
    <div class="my-4">
      <h1 class="display-4 mb-4" id="GateStatus">Gate Status</h1>
      <div class="card">
        <div class="card-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col"><b>Gate</b></th>
                <th scope="col"><b>Status</b></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(status, gate) in gateStatus" :key="gate">
                <td>{{ gate }}</td>
                <td>{{ status }}</td>
              </tr>
            </tbody>
          </table>
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
  text-decoration: none; /* Remove underlines */
}

#GateStatus1:hover {
  text-align: center;
  font-family: 'New Time Nevran', sans-serif;
  font-size: 25.8px;
  color: #14c03e;
  text-decoration: none; /* Remove underlines on hover */
}

@media (max-width: 768px)
{
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

