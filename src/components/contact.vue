<template>
  <div class="container">
    <div class="section-title">
      <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 40px;text-align: center;">Contact Us</h3>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input v-model="firstName" id="firstName" class="form-control" placeholder="Enter First Name" required>
          <span v-if="errors.firstName" class="text-danger">{{ errors.firstName }}</span>
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input v-model="lastName" id="lastName" class="form-control" placeholder="Enter Last Name" required>
          <span v-if="errors.lastName" class="text-danger">{{ errors.lastName }}</span>
        </div>
        <div class="mb-3">
          <label for="contact" class="form-label">Contact Number</label>
          <input v-model="contact" type="number" id="contact" class="form-control" placeholder="Enter Contact Number" required>
          <span v-if="errors.contact" class="text-danger">{{ errors.contact }}</span>
        </div>
        <div class="mb-3">
          <label for="Message" class="form-label">Message</label>
          <textarea v-model="Message" id="Message" class="form-control" rows="3" placeholder="Message" required></textarea>
          <span v-if="errors.Message" class="text-danger">{{ errors.Message }}</span>
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
      Message: '',
      userCreated: false,
      userData: {},
      errors: {}
    };
  },

  methods: {
    validateForm() {
      this.errors = {};

      if (!this.firstName) {
        this.errors.firstName = 'First Name is required';
      }

      if (!this.lastName) {
        this.errors.lastName = 'Last Name is required';
      }

      if (!this.contact) {
        this.errors.contact = 'Contact Number is required';
      }

      if (!this.Message) {
        this.errors.Message = 'Message is required';
      }

      return Object.keys(this.errors).length === 0;
    },

    async createUser() {
      if (this.validateForm()) {
        const colRef = collection(db, 'users');
        const dataObj = {
          firstName: this.firstName,
          lastName: this.lastName,
          contact: this.contact,
          Message: this.Message
        };

        const docRef = await addDoc(colRef, dataObj);
        console.log('Document was created with ID:', docRef.id);

        this.userCreated = true;
       this.userData = dataObj;

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Form submitted successfully!'
        });

        // Clear text boxes
        this.firstName = '';
        this.lastName = '';
        this.contact = '';
        this.Message = '';
      }
    }
  }
}
</script>

<style scoped>
.text-danger {
  color: red;
}
</style>
