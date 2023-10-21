<template>
  <div style="background-color: #f1f7fc;">
    <br />
    <div class="container">
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
import jsPDF from 'jspdf';

export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.fetchData();
    setInterval(this.fetchData, 5000); // Refresh data every 5 seconds
  },
  methods: {
    fetchData() {
      getDocs(collection(db, 'Vehicle_Count_Analysis'))
        .then(querySnapshot => {
          this.items = []; // Clear the existing data
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
    downloadCsv() {
      // Your CSV download method remains the same
    },
    downloadAnalysisReport() {
      const pdf = new jsPDF();
      pdf.setFontSize(16);
      pdf.text('Vehicle Count Analysis Report', 10, 10);
      
      // Calculate and add hourly vehicle count totals
      const hourlyCounts = this.calculateHourlyCounts();
      let yPosition = 30;

      hourlyCounts.forEach(hourCount => {
        pdf.text(hourCount.label, 10, yPosition);
        pdf.text(hourCount.total.toString(), 70, yPosition);
        yPosition += 10;
      });

      // Save the PDF and trigger the download
      pdf.save('analysis_report.pdf');
    },
    calculateHourlyCounts() {
      const hourlyCounts = {};

      this.items.forEach(item => {
        const date = new Date(item.timestamp);
        const hour = date.getHours();
        const key = hour + ':00-' + (hour + 1) + ':00';

        if (!hourlyCounts[key]) {
          hourlyCounts[key] = 0;
        }

        hourlyCounts[key] += item.vehicleCount;
      });

      return Object.entries(hourlyCounts).map(([label, total]) => ({ label, total }));
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
