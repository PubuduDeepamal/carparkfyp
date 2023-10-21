<template>
    <div style="background-color: #f1f7fc;">
      <br/>
      <div class="container">
        <div class="section-title">
          <h3 class="faqsection1" style="font-size: 45.8px; font-weight: bold; margin-top: 60px;">
            Contact Us Analysis
          </h3>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <table class="table table-striped table-mobile-responsive table-mobile-sided">
                  <thead>
                    <tr>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Message</th>
                      <th scope="col">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="item.id">
                      <td>{{ item.firstName }}</td>
                      <td>{{ item.lastName }}</td>
                      <td>{{ item.Message }}</td>
                      <td>{{ item.contact }}</td>
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
        getDocs(collection(db, 'users'))
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
          item.Message,
          item.contact,
        ]);
  
        const header = ['First Name', 'Last Name', 'Message', 'Contact'];
        const csvContent = header.join(',') + '\n' + csvData.map(row => row.join(',')).join('\n');
  
        // Create a Blob object and trigger the download
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'table_data.csv');
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
  
        // Add your analysis logic here, e.g., calculating statistics, insights, etc.
        const totalItems = this.items.length;
        report += `Total Items: ${totalItems}\n`;
  
        // Calculate additional statistics
        const averageMessageLength = this.calculateAverageMessageLength();
        report += `Average Message Length: ${averageMessageLength.toFixed(2)} characters\n`;
  
        // Add more analysis details here as needed
  
        return report;
      },
      calculateAverageMessageLength() {
        // Calculate the average length of messages
        const totalCharacters = this.items.reduce((acc, item) => {
          return acc + (item.Message ? item.Message.length : 0);
        }, 0);
  
        const averageLength = totalCharacters / this.items.length;
  
        return averageLength;
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
  