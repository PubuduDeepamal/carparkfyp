<template>
  <div style="background-color: #f1f7fc;">
    <br /><br /><br />
    <div class="container">
      <div class="row">
     
      </div>

      <!-- Display Available and Unavailable Slots -->
      <div class="row mt-4">
        <div class="col">
          <div class="alert alert-success" role="alert" id="alert">
            Available Slots: {{ availableSlots }}
          </div>
        </div>
        <div class="col">
          <div class="alert alert-danger" role="alert" id="alert">
            Unavailable Slots: {{ unavailableSlots }}
          </div>
        </div>
      </div>
    </div>
    <br /><br />
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
  computed: {
    // Calculate the number of available slots
    availableSlots() {
      return Object.values(this.parkingSlots).filter(slotStatus => slotStatus === 'Available').length;
    },
    // Calculate the number of unavailable slots
    unavailableSlots() {
      return Object.values(this.parkingSlots).filter(slotStatus => slotStatus === 'Unavailable').length;
    },
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
  margin-left: 200px;
}

.faqsection {
  margin-left: 216px;
  padding-bottom: 30px;
}

#alert {
  margin-left: 240px;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;
}
</style>
