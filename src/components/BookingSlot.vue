<template>
  <div class="container" style="background: #f8f8f8; border-radius: 10px;">
    <div class="section-title">
      <br>
      <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 40px;">Donate</h3>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input v-model="firstName" id="firstName" class="form-control" placeholder="Enter First Name" required>
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input v-model="lastName" id="lastName" class="form-control" placeholder="Enter Last Name" required>
        </div>
        <div class="mb-3">
          <label for="contact" class="form-label">Contact Number</label>
          <input v-model="contact" type="number" id="contact" class="form-control" placeholder="Enter Contact Number" required>
        </div>
        <div class="mb-3">
          <label for="Email" class="form-label">Email</label>
          <input v-model="Email" type="email" id="Email" class="form-control" placeholder="Enter Email" required>
        </div>
        <div class="mb-3">
          <label for="dateInput" class="form-label">Date</label>
          <input type="date" v-model="dateInput" id="dateInput" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="timeInput" class="form-label">Time</label>
          <input type="time" v-model="timeInput" id="timeInput" class="form-control" required>
        </div>

        <button @click="createUser" class="btn btn-primary" style="margin-top: 20px; margin-bottom: 30px; color: black; background: white; border: 1px solid #f0d8b6; width: 100%;"><b>Submit</b></button>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/init.js';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      contact: '',
      Email: '',
      dateInput: '',
      timeInput: '',
      userCreated: false,
      userData: {}
    };
  },

  methods: {
    validateFirstName() {
      if (!this.firstName) {
        Swal.fire({
          icon: 'error',
          title: 'First Name is required',
        });
        return false;
      }
      return true;
    },

    validateLastName() {
      if (!this.lastName) {
        Swal.fire({
          icon: 'error',
          title: 'Last Name is required',
        });
        return false;
      }
      return true;
    },

    validateContact() {
      const contactPattern = /^[0-9]{10}$/; // Assuming a 10-digit phone number
      if (!this.contact || !contactPattern.test(this.contact)) {
        Swal.fire({
          icon: 'error',
          title: 'Please enter a valid Contact Number (10 digits)',
        });
        return false;
      }
      return true;
    },

    validateEmail() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!this.Email || !emailPattern.test(this.Email)) {
        Swal.fire({
          icon: 'error',
          title: 'Please enter a valid Email Address',
        });
        return false;
      }
      return true;
    },

    validateForm() {
      return (
        this.validateFirstName() &&
        this.validateLastName() &&
        this.validateContact() &&
        this.validateEmail()
      );
    },

    async createUser() {
      if (this.validateForm()) {
        const colRef = collection(db, 'booking');
        const dataObj = {
          firstName: this.firstName,
          lastName: this.lastName,
          contact: this.contact,
          Email: this.Email,
          dateInput: this.dateInput,
          timeInput: this.timeInput,
        };

        try {
          const docRef = await addDoc(colRef, dataObj);
          console.log('Document was created with ID:', docRef.id);

          this.userCreated = true;
          this.userData = dataObj;

          // Display SweetAlert success message
          Swal.fire({
            icon: 'success',
            title: 'Form submitted successfully!',
            showConfirmButton: false,
            timer: 1500 // Automatically close after 1.5 seconds
          });
        } catch (error) {
          // Handle any errors here
          console.error('Error submitting form:', error);

          // Display SweetAlert error message
          Swal.fire({
            icon: 'error',
            title: 'Error submitting form',
            text: 'An error occurred while submitting the form. Please try again later.',
          });
        }
      }
    }
  },
};
</script>
