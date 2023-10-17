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
                    <td style="text-align:center">{{ count }}</td>
                  </tr>
                </tbody>
              </table>
              <a :href="csvDataUrl" download="vehicle_count_data.csv" class="btn btn-primary">Download CSV</a>
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
      vehicleCount: {},
      csvDataUrl: '', // URL for the generated CSV data
    };
  },
  mounted() {
    this.getData();

    // Add an interval to refresh the data every 2 seconds
    setInterval(() => {
      this.getData();
    }, 2000); // 2000 milliseconds = 2 seconds
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
          // Generate CSV data and set the URL
          this.csvDataUrl = this.generateCSVDataUrl();
        })
        .catch((error) => {
          console.error('Error fetching vehicle count data:', error);
        });
    },
    generateCSVDataUrl() {
      const csvData = this.convertDataToCSV(); // Convert your data to CSV format

      // Create a Blob object containing the CSV data
      const blob = new Blob([csvData], { type: 'text/csv' });

      // Create a temporary URL for the Blob
      return window.URL.createObjectURL(blob);
    },
    convertDataToCSV() {
      // Convert your data to CSV format (e.g., using a library like 'papaparse')
      // For example, assuming vehicleCount is an object with keys as vehicle types and values as counts
      const data = Object.entries(this.vehicleCount)
        .map(([vehicleType, count]) => `${vehicleType},${count}`)
        .join('\n');

      return `Vehicle Type,Vehicle Count\n${data}`;
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
