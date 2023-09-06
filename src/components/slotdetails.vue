<template>
  <div>
    <!-- Display Gate Status -->
    <div class="my-4">
      <h1>Gate Status</h1>
      <div class="card">
        <div class="card-body">
          <div v-for="(status, gate) in gateStatus" :key="gate" class="mb-3">
            <div class="row">
              <div class="col-4"><strong>Gate {{ gate }}</strong></div>
              <div class="col-8">{{ status }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Display Parking Slots -->
    <div class="my-4">
      <h1>Parking Slots</h1>
      <div class="card">
        <div class="card-body">
          <div v-for="(slotStatus, slotName) in parkingSlots" :key="slotName" class="mb-3">
            <div class="row">
              <div class="col-4"><strong>{{ slotName }}</strong></div>
              <div class="col-8">{{ slotStatus }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    setInterval(this.getData, 5000); // Fetch data every 5 seconds
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
/* Add your component-specific styles here if needed */
</style>
