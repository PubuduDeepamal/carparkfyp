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
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>

    <!-- Confirmation Dialog -->
    <div v-if="isDeleteConfirmationOpen" class="confirmation-dialog">
      <p>Are you sure you want to delete this item?</p>
      <button @click="confirmDelete">Yes</button>
      <button @click="isDeleteConfirmationOpen = false">No</button>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import db from '../firebase/init.js';
import Swal from 'sweetalert2'; 

export default {
  data() {
    return {
      items: [],
      deletingItemId: null, 
      isDeleteConfirmationOpen: false, 
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
      this.deletingItemId = itemId;

      // Use SweetAlert to show the confirmation message
      Swal.fire({
        title: 'Delete Confirmation',
        text: 'Are you sure you want to delete this item?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.confirmDelete();
        } else {
          this.deletingItemId = null;
          this.isDeleteConfirmationOpen = false;
        }
      });
    },
    confirmDelete() {
      if (this.deletingItemId !== null) {
        // Find the index of the item to delete
        const itemIndex = this.items.findIndex(item => item.id === this.deletingItemId);

        if (itemIndex !== -1) {
          // Remove the item from the items array
          this.items.splice(itemIndex, 1);

          // Perform the actual deletion in your database (Firebase in this case)
          const itemRef = doc(db, 'booking', this.deletingItemId);
          deleteDoc(itemRef);
        }

        this.deletingItemId = null; // Reset the deleting item ID
        this.isDeleteConfirmationOpen = false; // Close the confirmation dialog
      }
    },
    downloadCsv() {
      // Prepare your data for CSV export
      const csvData = this.items.map((item) => [
        item.firstName,
        item.lastName,
        item.contact,
        item.Email,
        item.dateInput,
        item.timeInput,
      ]);

      // Add headers to your CSV data
      csvData.unshift([
        "First Name",
        "Last Name",
        "Contact Number",
        "Email",
        "Date",
        "Time",
      ]);

      // Create a CSV content string
      const csvContent = csvData.map((row) => row.join(",")).join("\n");

      // Create a Blob with the CSV data
      const blob = new Blob([csvContent], { type: "text/csv" });

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create an invisible anchor element to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "booking_details.csv"; // Specify the desired file name

      // Trigger the click event on the anchor to start the download
      a.click();

      // Release the URL object to free up resources
      window.URL.revokeObjectURL(url);
    },
  },
};
</script>

<style>
#fontfamily {
  font-family: 'New Time Nevran', sans-serif;
}

.confirmation-dialog {
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
