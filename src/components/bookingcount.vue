<template>
    <div style="background-color: #f1f7fc;">
      <br>
      <div class="container">
        <div class="section-title">
          <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold;" id="fontfamily">Booking Analysis</h3>
        </div>
  
        <div class="row">
            <div class="col">
            <div class="card">
              <div class="card-body">
                <canvas id="parkingSlotChart"></canvas>
              </div>
            </div>
          </div>
          <!-- Add a chart element for daily booking count -->
          <div class="col">
            <div class="card">
              <div class="card-body">
                <canvas id="dailyBookingChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
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
        dailyBookingCount: [], // Array to store daily booking count
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        getDocs(collection(db, 'booking'))
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.items.push(doc.data());
            });
            // Call a function to render the chart after data is fetched
            this.calculateDailyBookingCount();
            this.renderDailyBookingChart();
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      downloadCsv() {
        // ... (your CSV download code) ...
      },
      calculateDailyBookingCount() {
        // Calculate daily booking count
        const dailyBookingCount = {};
        this.items.forEach(item => {
          const date = item.dateInput; // Assuming dateInput is in a valid date format
          if (dailyBookingCount[date]) {
            dailyBookingCount[date]++;
          } else {
            dailyBookingCount[date] = 1;
          }
        });
  
        // Convert daily booking count to an array
        this.dailyBookingCount = Object.values(dailyBookingCount);
      },
      renderDailyBookingChart() {
        // Create a bar chart for daily booking count
        const ctx = document.getElementById('dailyBookingChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Object.keys(this.dailyBookingCount),
            datasets: [{
              label: 'Daily Booking Count',
              data: this.dailyBookingCount,
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
  #fontfamily {
    font-family: 'New Time Nevran', sans-serif;
  }
  </style>
  