<template>
  <div>
    <!-- Parking Slots Section -->
    <div class="row">
      <h1 class="display-4 mb-4" id="GateStatus" style="margin-top: 50px;">Available Parking Slots</h1>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <table class="table table-striped table-mobile-responsive table-mobile-sided">
              <thead>
                <tr>
                  <th scope="col" style="text-align: center;"><b>Slot Name</b></th>
                  <th scope="col" style="text-align: center;"><b>Slot Status</b></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(slotStatus, slotName) in parkingSlots" :key="slotName">
                  <td style="text-align: center;">{{ slotName }}</td>
                  <td style="text-align: center;">{{ slotStatus }}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th scope="col" style="text-align: center;"><b>(Slot Status 0 = Available)</b></th>
                  <th scope="col" style="text-align: center;"><b>(Slot Status 1 = Not Available)</b></th>
                </tr>
              </thead>
            </table>
            <button @click="speakTableData('parkingSlots')">Speak Parking Slots</button>
          </div>
        </div>
      </div>
    </div>

    <br><br>

    <!-- Gate Status Section -->
    <div class="row">
      <h1 class="display-4 mb-4" id="GateStatus">Gate Status</h1>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <table class="table table-striped table-mobile-responsive table-mobile-sided">
              <thead>
                <tr>
                  <th scope="col" style="text-align: center;"><b>Gate Name</b></th>
                  <th scope="col" style="text-align: center;"><b>Gate Status</b></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(status, gate) in gateStatus" :key="gate">
                  <td style="text-align: center;">{{ gate }}</td>
                  <td style="text-align: center;">{{ status }}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th scope="col" style="text-align: center;"><b>(Gate Status 0 = Gate Open)</b></th>
                  <th scope="col" style="text-align: center;"><b>(Gate Status 1 = Gate Close)</b></th>
                </tr>
              </thead>
            </table>
            <button @click="speakTableData('gateStatus')">Speak Gate Status</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br><br><br>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      gateStatus: {}, 
      parkingSlots: {}, 
    };
  },
  mounted() {
    this.getData(); 
    setInterval(this.getData, 2000); 
  },
  methods: {
    getData() {
      this.getGateStatus();
      this.getParkingSlots();
    },
    getGateStatus() {
      axios
        .get('https://smart-parking-system-acf8a-default-rtdb.firebaseio.com/Gate_Status.json')
        .then((response) => {
          this.gateStatus = response.data;
        })
        .catch((error) => {
          console.error('Error fetching gate status:', error);
        });
    },
    getParkingSlots() {
      axios
        .get('https://smart-parking-system-acf8a-default-rtdb.firebaseio.com/Parking_Slots.json')
        .then((response) => {
          this.parkingSlots = response.data;
        })
        .catch((error) => {
          console.error('Error fetching parking slots data:', error);
        });
    },
    speakTableData(type) {
        let msg = new SpeechSynthesisUtterance();
        let content = '';

        if (type === 'parkingSlots') {
            content = "Parking Slots Status: ";
            for (let slot in this.parkingSlots) {
                content += `${slot} is ${this.parkingSlots[slot]}. `;
            }
        } else if (type === 'gateStatus') {
            content = "Gate Status: ";
            for (let gate in this.gateStatus) {
                content += `${gate} is ${this.gateStatus[gate]}. `;
            }
        }

        msg.text = content;
        window.speechSynthesis.speak(msg);
    }
  },
};
</script>

<style scoped>
#GateStatus {
  font-size: 45.8px;
  font-weight: bold;
  text-align: center;
  font-family: 'New Time Nevran', sans-serif;
}

/* ... (rest of your styles) */

button {
    padding: 10px 15px;
    margin-bottom: 10px;
    background-color: #14c03e;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #12a836;
}

#GateStatus1 {
  text-align: center;
  font-family: 'New Time Nevran', sans-serif;
  font-size: 25.8px;
  text-decoration: none; /* Remove underlines */
}

#GateStatus1:hover {
  text-align: center;
  font-family: 'New Time Nevran', sans-serif;
  font-size: 25.8px;
  color: #14c03e;
  text-decoration: none; 
}

@media (max-width: 768px)
{
  #GateStatus[data-v-dc347e84] {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    font-family: 'New Time Nevran', sans-serif;
}

}

.table-bordered {
    border-width: 0 1px;
    text-align: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 1400px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.card:hover {
  opacity: 0.9;
  border: 2px solid #14c03e;
 
}

@media (max-width: 768px)
{

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 330px;
  margin: auto;
  text-align: center;
  font-family: arial;
}}
</style>
