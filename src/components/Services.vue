<template>
  <div>
    <div class="card-container">
      <div class="card">
        <h1 id="fontfamily">Parking Solutions</h1>
        <p id="fontfamily">Our parking facility is dedicated to providing convenient and secure parking solutions for our customers. Our mission is to ensure hassle-free parking experiences, offering a range of services to meet your needs.</p>
      </div>

      <div class="card">
        <h1 id="fontfamily">Support and Service</h1>
        <p id="fontfamily">At our parking facility, we provide comprehensive support and service for every visitor. From ensuring the safety of your vehicle to offering assistance when needed, we strive to create a comfortable and stress-free parking environment.</p>
      </div>

      <div class="card">
        <h1 id="fontfamily">Convenient Locations</h1>
        <p id="fontfamily">We prioritize convenience at our parking facilities. We offer a network of well-located parking lots, easy access, and user-friendly amenities to make your parking experience as smooth as possible.</p>
      </div>

      <div class="card">
        <h1 id="fontfamily">Community</h1>
        <p id="fontfamily">At our parking facility, we foster a sense of community among our customers. We encourage positive interactions, offer loyalty programs, and engage visitors in various activities to create a welcoming environment where you can connect with fellow parkers.</p>
      </div>
    </div>
  </div>  
</template>


          
<script>
    export default {
        name: 'Services'   
    }
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.card:hover {
  opacity: 0.9;
  box-shadow: 0 0.5rem 1rem #14c03e;
  border: 1px solid #14c03e;
 
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card{
    flex: 1 0 30%;
    margin: 10px;
    margin-top: 14px;
    text-align: center;
    padding: 14px;
    box-sizing: border-box;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
}

@media (min-width: 1200px) {

  .card{
    HEIGHT: 321px;
}
  
}

.card img {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .card {
    flex-basis: 45%; /* Adjust the width for smaller screens */
  }

  .card-container[data-v-e2d1790d] {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-content: stretch;
    justify-content: center;
}
}


@media (min-width: 1200px) {

    .card-container[data-v-e2d1790d] {
    margin-bottom: 34px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.card-container[data-v-e2d1790d] {
    margin-bottom: 34px;
    margin-top: 35px;
}

}

.card-container[data-v-e2d1790d] {
    margin-bottom: 34px;
}


h1, .h1 {
    font-size: 45.8px;
}

#fontfamily{
  font-family: 'New Time Nevran', sans-serif;
}

@media (max-width: 768px)
{
  .card-container[data-v-e4054b5a] {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
}
}

</style>