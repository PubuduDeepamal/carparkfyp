<template>
  <div id="backcolour">
      <h1 style="text-align:center; margin-top: 30px;font-size: 45.8px;margin-bottom: 37px; font-weight: bold;">Angel Haven Orphanage</h1>

      <div class="card-container">
          <div class="card">
              <h1>Orphanage Programs</h1>
          </div>

          <div class="card">
              <h1>Adoption Services</h1>
          </div>

          <div class="card">
              <h1>Education and Support</h1>
          </div>

          <div class="card">
              <h1>Child Medical Care</h1>
          </div>
      </div>
  </div>
</template>

          
<script>
    export default {
        name: 'HomeProduct'   
    }
</script>

<style scoped>
.card {
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  flex: 1 0 30%; /* Adjust the width as needed */
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}

.card img {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .card {
    flex-basis: 45%; 
  }

  .card-container[data-v-99a59d87] {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: center;
}
}

.card-container[data-v-99a59d87] {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}

.card img[data-v-99a59d87] {
    width: 80%;
    HEIGHT: 80%;
    MARGIN-LEFT: 11%;
}

.card:hover {
  opacity: 0.7;
  background:rgba(240,216,182,255);
}

h1, .h1 {
    padding-top: 17px;
}

.card {
  margin-bottom: 50px;
}

#backcolour{
  background: white;
}
</style>