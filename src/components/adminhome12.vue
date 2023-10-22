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
                    <th scope="col"></th>
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
                    <td>
                      <button class="btn btn-danger" @click="deleteItem(item.id)">Delete</button>
                    </td>
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
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
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
            const data = doc.data();
            data.id = doc.id;
            this.items.push(data);
          });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    deleteItem(itemId) {
      // Find the index of the item to delete
      const itemIndex = this.items.findIndex(item => item.id === itemId);

      if (itemIndex !== -1) {
        // Remove the item from the items array
        this.items.splice(itemIndex, 1);

        // Perform the actual deletion in your database (Firebase in this case)
        const itemRef = doc(db, 'booking', itemId);
        deleteDoc(itemRef);
      }
    },
    // ... other methods (downloadCsv, downloadAnalysisReport, generateAnalysisReport, calculateAverageContactLength, calculateMostCommonDate, calculateMostCommonTime)
  },
};
</script>

<style>
#fontfamily {
  font-family: 'New Time Nevran', sans-serif;
}
</style>
