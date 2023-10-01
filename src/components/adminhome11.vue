<template>
  <div style="background-color: #f1f7fc;">
    <br /><br /><br />
    <div class="container">
      <div class="section-title">
        <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 60px;">
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
