<template>
   
</template>
  
  <script>
  import { collection, getDocs } from 'firebase/firestore';
  import db from '../firebase/init.js';
  import Chart from 'chart.js/auto'; // Import Chart.js
  
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
        getDocs(collection(db, 'users'))
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.items.push(doc.data());
            });
            // Call a function to render the chart after data is fetched
            this.renderParkingSlotChart();
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      downloadCsv() {
        // ... (your CSV download code) ...
      },
      renderParkingSlotChart() {
        // Calculate the daily parking slot bookings count
        const dailyBookings = {};
        this.items.forEach(item => {
          const date = item.dateInput; // Assuming dateInput is in a valid date format
          if (dailyBookings[date]) {
            dailyBookings[date]++;
          } else {
            dailyBookings[date] = 1;
          }
        });
  
        // Create a bar chart for daily parking slot bookings
        const ctx = document.getElementById('parkingSlotChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Object.keys(dailyBookings),
            datasets: [{
              label: 'Daily Parking Slot Bookings',
              data: Object.values(dailyBookings),
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
  