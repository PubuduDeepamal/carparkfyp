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
  },
};
</script>

<style>
#fontfamily {
  font-family: 'New Time Nevran', sans-serif;
}
</style>
