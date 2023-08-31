<template>
  <div>
     <div class="card-container">
          <div class="card">
              <h1 id="fontfamily">Our Mission</h1>
              <p id="fontfamily">Angel Haven Orphanage is dedicated to providing a loving and nurturing environment for orphaned children. Our mission is to ensure their well-being, personal growth, and empowerment, enabling them to build a brighter future filled with hope and opportunities.</p>
          </div>

          <div class="card">
              <h1 id="fontfamily">Support and Care</h1>
              <p id="fontfamily">At Angel Haven Orphanage, we provide comprehensive support and care for every child. From their physical and emotional needs to educational development, we strive to create a safe and nurturing space where they can heal, grow, and thrive.</p>
          </div>

          <div class="card">
              <h1 id="fontfamily">Education</h1>
              <p id="fontfamily">We prioritize education and personal development at Angel Haven Orphanage. We offer tailored learning programs, access to quality education, and opportunities for extracurricular activities to empower each child with the knowledge and skills needed for a successful future.</p>
          </div>

          <div class="card">
              <h1 id="fontfamily">Community</h1>
              <p id="fontfamily">At Angel Haven Orphanage, we foster a sense of community and belonging. We promote positive relationships, encourage social interactions, and engage children in various activities to create a supportive environment where they can form lasting connections and build meaningful friendships.</p>
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
</style>