<template>
  <br>
    <div class="container">
        <div class="section-title">
          <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 40px;">Booking Details</h3>
    </div>

    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <table class="table table-striped table-mobile-responsive table-mobile-sided">
                        <thead>
                            <tr>
                              <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Email</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in items" :key="item.id">
                            <td>{{ item.firstName }}</td>
                            <td>{{ item.lastName }}</td>
                            <td>{{ item.contact }}</td>
                            <td>{{ item.Email }}</td>
                            <td>{{ item.dateInput }}</td>
                            <td>{{ item.timeInput }}</td>
                          </tr>
                        </tbody>
                    </table>
                </div>
              </div>
        </div>
    </div>
</div>
<br>
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
      },
    };
    </script>
    