<template>
  <br><br><br>
  <div class="container">
    <div class="section-title">
      <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 60px;">Materials Management</h3>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="mb-3">
          <label for="productId" class="form-label">Product ID</label>
          <input v-model="productId" id="productId" class="form-control" placeholder="Enter Product ID" required>
        </div>
        <div class="mb-3">
          <label for="productName" class="form-label">Product Name</label>
          <input v-model="productName" id="productName" class="form-control" placeholder="Enter Product Name" required>
        </div>
        <div class="mb-3">
          <label for="productQuantity" class="form-label">Product Quantity</label>
          <input v-model="productQuantity" type="number" id="productQuantity" class="form-control" placeholder="Enter Product Quantity" required>
        </div>
        <button @click="createProduct" class="btn btn-primary" style="margin-top: 20px; color: black; background: white; border: 1px solid #f0d8b6; width: 100%;"><b>Submit</b></button>
        <button @click="updateProduct" class="btn btn-primary" style="margin-top: 20px; margin-bottom: 0px; color: black; background: white; border: 1px solid #f0d8b6; width: 100%;"><b>Update</b></button>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import db from '../firebase/init.js';

export default {
  data() {
    return {
      productId: '',
      productName: '',
      productQuantity: '',
      productCreated: false,
      productUpdated: false,
      productData: {}
    };
  },

  methods: {
    async createProduct() {
      const colRef = collection(db, 'product');
      const dataObj = {
        productId: this.productId,
        productName: this.productName,
        productQuantity: this.productQuantity
      };

      const docRef = await addDoc(colRef, dataObj);
      console.log('Document was created with ID:', docRef.id);

      this.productCreated = true;
      this.productData = dataObj;

      alert('Data added successfully!');
    },

    async updateProduct() {
      const docRef = doc(db, 'product', this.productId);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        await updateDoc(docRef, {
          productName: this.productName,
          productQuantity: this.productQuantity
        });

        console.log('Document was updated');

        this.productUpdated = true;
        this.productData = {
          productId: this.productId,
          productName: this.productName,
          productQuantity: this.productQuantity
        };

        alert('Data updated successfully!');
      } else {
        alert('Document does not exist. Unable to update data.');
      }
    }
  }
};
</script>



