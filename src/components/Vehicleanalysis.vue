<template>
<div style="background-color: #f1f7fc;">
    <br><br><br>
    <div class="container mt-5">
        <h1 class="text-center faqsection" style="font-size: 45.8px; font-weight: bold;" id="fontfamily">Parking Slot Status</h1>
        <div class="row justify-content-center mt-4">
            <div class="col-md-6">
                <div class="card text-center">
                    <div class="card-body">
                        <h2 class="card-title" id="fontfamily">Available Slots</h2>
                        <p class="card-text display-4" id="fontfamily">{{ availableSlots }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card text-center">
                    <div class="card-body">
                        <h2 class="card-title" id="fontfamily">Unavailable Slots</h2>
                        <p class="card-text display-4" id="fontfamily">{{ unavailableSlots }}</p>
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
