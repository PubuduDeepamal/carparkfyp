<template>
    <div>
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.quantity }}
          <button @click="incrementQuantity(product)">+</button>
          <button @click="decrementQuantity(product)">-</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Product 1', quantity: 0 },
          { id: 2, name: 'Product 2', quantity: 0 },
          // Add more products as needed
        ],
      };
    },
    methods: {
      incrementQuantity(product) {
        product.quantity++;
      },
      decrementQuantity(product) {
        if (product.quantity > 0) {
          product.quantity--;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles as needed */
  </style>
  