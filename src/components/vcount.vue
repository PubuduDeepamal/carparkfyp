<template>
    <div style="background-color: #f1f7fc;">
      <br />
      <div class="container">
        <div class="section-title">
          <h3 class="faqsection1" style="font-size: 45.8px; font-weight: bold; margin-top: 60px;">
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
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Vehicle Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="item.timestamp">
                      <td>{{ formatDate(item.timestamp) }}</td>
                      <td>{{ formatTime(item.timestamp) }}</td>
                      <td>{{ item.vehicleCount }}</td>
                    </tr>
                  </tbody>
                </table>
                <!-- Add a download button for CSV -->
                <button class="btn btn-primary" @click="downloadCsv">Download CSV</button>
                <!-- Add a download button for analysis report -->
                <button style="margin-left: 20px;" class="btn btn-primary" @click="downloadAnalysisReport">Download Analysis Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </template>
  
  <script>
  import { collection, getDocs } from 'firebase/firestore';
  import db from '../firebase/init.js';
  
  export default {
    data() {
      return {
        items: [],
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        getDocs(collection(db, 'Vehicle_Count_Analysis'))
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.items.push(doc.data());
            });
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      formatDate(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
      },
      formatTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString();
      },
      // ... your downloadCsv, downloadAnalysisReport, and other methods as before
    },
  };
  </script>
  
  <style>
  .card {
    margin-left: 200px;
  }
  
  .faqsection1 {
    text-align: center;
    padding-bottom: 30px;
  }
  </style>
  