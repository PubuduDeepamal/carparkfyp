<template>
  <div style="background-color: #f1f7fc;">
    <br /><br /><br />
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
                    <th scope="col">Operation 1</th>
                    <th scope="col">Operation 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in items" :key="item.id">
                    <td>{{ item.firstName }}</td>
                    <td>{{ item.lastName }}</td>
                    <td>{{ item.Message }}</td>
                    <td>{{ item.contact }}</td>
                    <td>
                      <a class="btn btn-sm btn-success" 
                         :href="'https://wa.me/' + item.contact + '?text=' + encodeURIComponent('We are the admin in KCC Car park. We received your message. How can I help you?')" 
                         target="_blank" 
                         style="background-color: #4CAF50;">Start Chat</a>
                    </td>
                    <td>             
                      <button class="btn btn-sm btn-primary" @click="startCall(item.contact)" style="background-color: #008CBA;">Start Call</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button class="btn btn-primary" @click="downloadCsv">Download CSV</button>
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
      const csvData = this.items.map(item => [
        item.firstName,
        item.lastName,
        item.Message,
        item.contact,
      ]);

      const header = ['First Name', 'Last Name', 'Message', 'Contact'];
      const csvContent = header.join(',') + '\n' + csvData.map(row => row.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'table_data.csv');
      document.body.appendChild(link);
      link.click();
    },
    downloadAnalysisReport() {
      const analysisReport = this.generateAnalysisReport();
      const blob = new Blob([analysisReport], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'analysis_report.txt');
      document.body.appendChild(link);
      link.click();
    },
    generateAnalysisReport() {
      let report = 'Analysis Report:\n\n';
      const totalItems = this.items.length;
      report += `Total Items: ${totalItems}\n`;
      const averageMessageLength = this.calculateAverageMessageLength();
      report += `Average Message Length: ${averageMessageLength.toFixed(2)} characters\n`;
      return report;
    },
    calculateAverageMessageLength() {
      const totalCharacters = this.items.reduce((acc, item) => {
        return acc + (item.Message ? item.Message.length : 0);
      }, 0);
      const averageLength = totalCharacters / this.items.length;
      return averageLength;
    },
    startCall(contactNumber) {
      window.location.href = 'tel:' + contactNumber;
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

a[href^="tel:"] {
    color: inherit;
    text-decoration: none;
}

.btn-sm {
  margin-left: 5px;
}
</style>
