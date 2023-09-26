<template>
  <div style="background-color: #f1f7fc;">
  <br>
    <div class="container">
        <div class="section-title">
          <h3 class="faqsection" style="font-size: 45.8px; font-weight: bold; margin-top: 100px;" id="fontfamily">Booking Details</h3>
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
                          </tr>
                        </tbody>
                    </table>
                </div>
              </div>
        </div>
    </div>
</div>
<br>
</div>
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
    
  <style>

  #fontfamily {
      font-family: 'New Time Nevran', sans-serif;
    }
  
  </style>