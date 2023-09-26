<template>
  <div style="background-color: #f1f7fc;">
    <br /><br /><br />
    <div class="container">
      <div class="section-title">
        <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 60px;">Slot and Gate Analysis</h3>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <table class="table table-striped table-mobile-responsive table-mobile-sided">
                <thead>
                  <tr>
                    <th scope="col" style="text-align: center;"><b>Slot Name</b></th>
                    <th scope="col" style="text-align: center;"><b>Slot Status</b></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(slotStatus, slotName) in parkingSlots" :key="slotName">
                    <td style="text-align: center;">{{ slotName }}</td>
                    <td style="text-align: center;">{{ slotStatus }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Display Available and Unavailable Slots -->
      <div class="row mt-4">
        <div class="col">
          <div class="alert alert-success" role="alert">
            Available Slots: {{ availableSlots }}
          </div>
        </div>
        <div class="col">
          <div class="alert alert-danger" role="alert">
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
</style>
