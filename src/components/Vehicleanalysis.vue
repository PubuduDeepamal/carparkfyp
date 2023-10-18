<template>
  <div><br><br><br><br><br><br><br>
    <h1 style="text-align:center">Parking Slot Status11</h1>
    <div style="text-align:center">
      Available Slots: {{ availableSlots }}
    </div>
    <div style="text-align:center">
      Unavailable Slots: {{ unavailableSlots }}
    </div>
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


