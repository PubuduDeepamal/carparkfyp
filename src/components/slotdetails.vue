<template>
  <div class="container">
    <div class="section-title">
      <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 60px;">Booking Details</h3>
    </div>

    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <table class="table table-striped table-mobile-responsive table-mobile-sided">
              <thead>
                <tr>
                  <th scope="col">Gate_01</th>
                  <th scope="col">Gate_02</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <td>{{ item.Gate_01 }}</td>
                  <td>{{ item.Gate_02 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'; // If you're using Vue 3
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import db from '../firebase/init.js';
import axios from 'axios';


export default {
  setup() {
    const items = ref([]);

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Gate_Status'));
        items.value = querySnapshot.docs.map((doc) => doc.data());
        console.log('Fetched Data:', items.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    onMounted(() => {
      fetchData(); // Fetch data initially

      // Set up a real-time listener for changes in Firestore
      const gateStatusCollection = collection(db, 'Gate_Status');
      onSnapshot(gateStatusCollection, (querySnapshot) => {
        items.value = querySnapshot.docs.map((doc) => doc.data());
        // console.log('Updated Data:', items.value);
      });
    });

    return {
      items:[]
    };
  },
};
</script>
