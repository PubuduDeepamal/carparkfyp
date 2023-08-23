<template>
    <div>
      <h2>Add Product</h2>
      <input type="text" v-model="productName" placeholder="Product Name" />
      <button @click="addProduct">Add</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productName: '',
      };
    },
    methods: {
      addProduct() {
        if (this.productName.trim() !== '') {
          const newProduct = {
            id: Date.now(),
            name: this.productName,
            quantity: 0,
          };
          this.$emit('product-added', newProduct);
          this.productName = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles as needed */
  </style>
  