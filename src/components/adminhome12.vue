<template>
  <div style="background-color: #f1f7fc;">
    <br>
    <div class="container">
      <div class="section-title">
        <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 100px;" id="fontfamily">Booking Details Analysis</h3>
      </div>

      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <table class="table table-striped table-mobile-responsive table-mobile-sided">
                <thead>
                  <tr>
                    <th scope="col" id="fontfamily">First Name</th>
                    <th scope="col" id="fontfamily">Last Name</th>
                    <th scope="col" id="fontfamily">Contact Number</th>
                    <th scope="col" id="fontfamily">Email</th>
                    <th scope="col" id="fontfamily">Date</th>
                    <th scope="col" id="fontfamily">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="item.id">
                    <td id="fontfamily">{{ item.firstName }}</td>
                    <td id="fontfamily">{{ item.lastName }}</td>
                    <td id="fontfamily">{{ item.contact }}</td>
                    <td id="fontfamily">{{ item.Email }}</td>
                    <td id="fontfamily">{{ item.dateInput }}</td>
                    <td id="fontfamily">{{ item.timeInput }}</td>
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
    <br>
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
      getDocs(collection(db, 'booking'))
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.items.push(doc.data());
          });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    downloadCsv() {
      // Convert the data to CSV format
      const csvData = this.items.map(item => [
        item.firstName,
        item.lastName,
        item.contact,
        item.Email,
        item.dateInput,
        item.timeInput,
      ]);

      const header = ['First Name', 'Last Name', 'Contact Number', 'Email', 'Date', 'Time'];
      const csvContent = header.join(',') + '\n' + csvData.map(row => row.join(',')).join('\n');

      // Create a Blob object and trigger the download
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'booking_data.csv');
      document.body.appendChild(link);
      link.click();
    },
    downloadAnalysisReport() {
      // Perform your analysis here and generate a report
      const analysisReport = this.generateAnalysisReport();

      // Create a Blob object and trigger the download
      const blob = new Blob([analysisReport], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'analysis_report.txt');
      document.body.appendChild(link);
      link.click();
    },
    generateAnalysisReport() {
      // Perform your analysis here and generate a report as a string
      let report = 'Analysis Report:\n\n';

      // Add your analysis logic here
      const totalBookings = this.items.length;
      report += `Total Bookings: ${totalBookings}\n`;

      const averageContactLength = this.calculateAverageContactLength();
      report += `Average Contact Number Length: ${averageContactLength.toFixed(2)}\n`;

      const mostCommonDate = this.calculateMostCommonDate();
      report += `Most Common Date: ${mostCommonDate}\n`;

      const mostCommonTime = this.calculateMostCommonTime();
      report += `Most Common Time: ${mostCommonTime}\n`;

      // Add more analysis details here as needed

      return report;
    },
    calculateAverageContactLength() {
      // Calculate the average length of contact numbers
      const totalLength = this.items.reduce((acc, item) => {
        return acc + (item.contact ? item.contact.length : 0);
      }, 0);

      const averageLength = totalLength / this.items.length;

      return averageLength;
    },
    calculateMostCommonDate() {
      // Calculate the most common date
      const dateCountMap = {};
      this.items.forEach(item => {
        const date = item.dateInput;
        if (date in dateCountMap) {
          dateCountMap[date]++;
        } else {
          dateCountMap[date] = 1;
        }
      });

      const mostCommonDate = Object.keys(dateCountMap).reduce((a, b) => dateCountMap[a] > dateCountMap[b] ? a : b);

      return mostCommonDate;
    },
    calculateMostCommonTime() {
      // Calculate the most common time
      const timeCountMap = {};
      this.items.forEach(item => {
        const time = item.timeInput;
        if (time in timeCountMap) {
          timeCountMap[time]++;
        } else {
          timeCountMap[time] = 1;
        }
      });

      const mostCommonTime = Object.keys(timeCountMap).reduce((a, b) => timeCountMap[a] > timeCountMap[b] ? a : b);

      return mostCommonTime;
    },
  },
};
</script>

<style>
#fontfamily {
  font-family: 'New Time Nevran', sans-serif;
}
</style>
