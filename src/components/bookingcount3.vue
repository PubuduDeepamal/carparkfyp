<template>
    <div style="background-color: #f1f7fc;">
      <br>
      <div class="container">
        <div class="section-title">
          <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 60px;">Contact Analysis</h3>
        </div>
        <div class="row">
          <div class="col">
            
          </div>
          <!-- Add a chart element for daily contact count -->
          <div class="col">
            <div class="card">
              <div class="card-body">
                <canvas id="dailyContactChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { collection, getDocs } from 'firebase/firestore';
  import db from '../firebase/init.js';
  import Chart from 'chart.js/auto';
  
  export default {
    data() {
      return {
        items: [],
        dailyContactCount: [],
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        // Fetch data for both the table and the chart
        getDocs(collection(db, 'users'))
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.items.push(doc.data());
            });
            // Call functions to render the chart and calculate the daily contact count
            this.renderDailyContactChart();
            this.calculateDailyContactCount();
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      downloadCsv() {
        // ... (your CSV download code) ...
      },
      calculateDailyContactCount() {
        // Calculate daily contact count
        const dailyContactCount = {};
        this.items.forEach(item => {
          const date = item.contact; // Assuming contact date is in a valid date format
          if (dailyContactCount[date]) {
            dailyContactCount[date]++;
          } else {
            dailyContactCount[date] = 1;
          }
        });
  
        // Convert daily contact count to an array
        this.dailyContactCount = Object.values(dailyContactCount);
      },
      renderDailyContactChart() {
        // Create a bar chart for daily contact count
        const ctx = document.getElementById('dailyContactChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Object.keys(this.dailyContactCount),
            datasets: [{
              label: 'Daily Contact Count',
              data: Object.values(this.dailyContactCount),
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust color as needed
              borderColor: 'rgba(75, 192, 192, 1)', // Adjust color as needed
              borderWidth: 1,
            }],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
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
  