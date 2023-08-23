<template>
  <br><br><br><br><br><br>
  <div class="container">
    <div class="section-title">
      <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold;">Add Donate</h3>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="mb-3">
          <label for="dateInput" class="form-label">Date</label>
          <input type="date" v-model="dateInput" id="dateInput" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="Meal" class="form-label">Meal</label>
          <input v-model="Meal" id="Meal" class="form-control" placeholder="Enter Meal" required>
        </div>
        <div class="mb-3">
          <label for="Position" class="form-label">Position</label>
          <input v-model="Position" type="number" id="Position" class="form-control" placeholder="Enter Position" required>
        </div>

        <button @click="createUser" class="btn btn-primary" style="margin-top: 20px; margin-bottom: 30px; color: black; background: white; border: 1px solid #f0d8b6; width: 100%;"><b>Add</b></button>

      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/init.js';

export default {
  data() {
    return {
      dateInput: '',
      Meal: '',
      Position: '',
      userCreated: false,
      userData: {}
    };
  },

  methods: {
    async createUser() {
      const colRef = collection(db, 'meal');
      const dataObj = {
        dateInput: this.dateInput,
        Meal: this.Meal,
        Position: this.Position
      };

      const docRef = await addDoc(colRef, dataObj);
      console.log('Document was created with ID:', docRef.id);

      this.userCreated = true;
      this.userData = dataObj;

      alert('Data Add Successfully!'); // Display the alert message
    }
  },

  created() {
    // Optional: You can call createUser on component creation if needed.
    // this.createUser();
  }
};
</script>
