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
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/init.js';

export default {
  data() {
    return {
      vehicleCount: {},
      csvDataUrl: '',
      newDataToAppend: '',
    };
  },
  mounted() {
    this.getData();

    setInterval(() => {
      this.getData();
    }, 2000);
    // Firestore save data
    setInterval(() => {
      this.appendDataToCSV();
      this.saveToFirestore();
    }, 30000);
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
          this.csvDataUrl = this.generateCSVDataUrl();
        })
        .catch((error) => {
          console.error('Error fetching vehicle count data:', error);
        });
    },
    generateCSVDataUrl() {
      const csvData = this.convertDataToCSV();
      const blob = new Blob([csvData], { type: 'text/csv' });
      return window.URL.createObjectURL(blob);
    },
    convertDataToCSV() {
      const data = Object.entries(this.vehicleCount)
        .map(([vehicleType, count]) => `${vehicleType},${count}`)
        .join('\n');
      return `Vehicle Type,Vehicle Count\n${data}`;
    },
    appendDataToCSV() {
      const timestamp = new Date().toLocaleString();
      this.newDataToAppend += `${timestamp},New Data Here\n`;
      this.updateCSVFile(this.newDataToAppend);
      this.newDataToAppend = '';
    },
    updateCSVFile(newData) {
      const updatedData = `${this.convertDataToCSV()}\n${newData}`;
      const blob = new Blob([updatedData], { type: 'text/csv' });
      this.csvDataUrl = window.URL.createObjectURL(blob);
    },
    async saveToFirestore() {
      const colRef = collection(db, 'Vehicle_Count_Analysis');
      const dataObj = {
        timestamp: new Date().toISOString(),
        vehicleCount: Object.values(this.vehicleCount) // Pass only values, not the keys
      };

      try {
        await addDoc(colRef, dataObj);
        console.log('Data saved to Firestore successfully.');
      } catch (error) {
        console.error("Error saving data to Firestore:", error);
      }
    }
  }
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
