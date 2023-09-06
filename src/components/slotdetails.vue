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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      gateStatus: {}, // To store gate status data
    };
  },
  mounted() {
    this.getGateStatus();
  },
  methods: {
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
  },
};
</script>
