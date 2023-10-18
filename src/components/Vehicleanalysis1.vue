<template>
    <div style="background-color: #f1f7fc;">
        <br><br><br>
        <div class="container mt-5">
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <div class="card text-center">
                        <div class="card-body">
                            <h3 class="card-title" id="fontfamily"><b>Available Slots</b></h3>
                            <p class="card-text display-4" id="fontfamily" style="font-size: 40px;">{{ availableSlots }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card text-center">
                        <div class="card-body">
                            <h3 class="card-title" id="fontfamily"><b>Unavailable Slots</b></h3>
                            <p class="card-text display-4" id="fontfamily" style="font-size: 40px;">{{ unavailableSlots }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
      </div>
    </template>
    
    <script>
    export default {
        data() {
            return {
                availableSlots: 0,
                unavailableSlots: 0
            };
        },
        mounted() {
            // Fetch data from the Firebase Realtime Database URL
            fetch('https://smart-parking-system-acf8a-default-rtdb.firebaseio.com/Parking_Slots.json')
                .then(response => response.json())
                .then(data => {
                    // Loop through the data to count available and unavailable slots
                    for (const slotId in data) {
                        if (data[slotId] === 0) {
                            this.availableSlots++;
                        } else if (data[slotId] === 1) {
                            this.unavailableSlots++;
                        }
                    }
                });
        }
    };
    </script>
    
    <style>
    #fontfamily {
        font-family: 'New Time Nevran', sans-serif;
    }
    
    .faqsection {
        margin-left: 216px;
        padding-bottom: 30px;
    }
    </style>
    