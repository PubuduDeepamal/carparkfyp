<template>
  <div style="background-color: #f1f7fc;">
    <br>
    <div class="container">
      <div class="section-title">
        <h3 class="faqsection1" style="font-size: 45.8px; font-weight: bold;">Contact Analysis</h3>
      </div>
      <div class="row">
        <div class="col"></div>
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
      items: [], // Array to store user data from Firestore
      dailyContactData: [], // Array to store daily contact data
      chart: null, // Variable to store the chart instance
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // Fetch user data from Firestore
      getDocs(collection(db, 'users'))
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.items.push(doc.data());
          });
          // Call a function to prepare the data and render the chart
          this.prepareDailyContactData();
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    prepareDailyContactData() {
      // Initialize an object to store daily contact counts
      const dailyContactData = {};
      
      // Iterate through user data to count daily contacts
      this.items.forEach(item => {
        const date = item.contact; // Assuming contact date is in a valid date format
        if (date) {
          // Check if the date exists, and increment the count
          if (dailyContactData[date]) {
            dailyContactData[date]++;
          } else {
            dailyContactData[date] = 1;
          }
        }
      });

      // Convert daily contact data to an array of objects
      this.dailyContactData = Object.entries(dailyContactData).map(([date, count]) => ({
        date,
        count,
      }));

      // Sort the data by date
      this.dailyContactData.sort((a, b) => new Date(a.date) - new Date(b.date));

      // Render the chart
      this.renderDailyContactChart();
    },
    renderDailyContactChart() {
      if (this.chart) {
        // If the chart instance already exists, destroy it first
        this.chart.destroy();
      }

      // Create a bar chart for daily contact count
      const ctx = document.getElementById('dailyContactChart').getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.dailyContactData.map(item => item.date),
          datasets: [
            {
              label: 'Number of Contacts',
              data: this.dailyContactData.map(item => item.count),
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust color as needed
              borderColor: 'rgba(75, 192, 192, 1)', // Adjust color as needed
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Contact Number',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Contacts',
              },
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

.faqsection1 {
  text-align: center;
  padding-bottom: 30px;
}
</style>
