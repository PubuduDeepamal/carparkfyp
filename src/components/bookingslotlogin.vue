<template>
  <div id="donatebackground">
    <br>
    <div class="container mx-auto max-w-2xl md:py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 relative">
      <div class="grid grid-cols-1 gap-4 gap-lg-5">
        <div class="mb-4">
          <div class="group hover:scale-105 delay-150 rounded-lg shadow-lg p-4" style="background: white; background-image: url(''); background-size: cover; background-position: center;">
  
            <div class="overflow-hidden h-60 rounded-md lg:aspect-none flex items-center justify-center mx-auto group-hover:opacity-75">
  
            </div>
          
            <div class="mt-4">
              <h2 class="text-center text-xl font-bold mb-2" id="bookingTitle" style="font-size: 45.8px; font-weight: bold;">Would you like to request a parking slot?</h2>
              <p class="text-gray-600 text-center">(Please click booking button)</p>
            </div>
          
            <button id="btnsub" class="bg-blue-500 hover:bg-blue-600 absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <RouterLink to="/Loging" id="bookingbutton">Booking</RouterLink>
            </button>
  
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<style scoped>
  #bookingTitle {
    font-size: 40px;
    margin-top: 0px;
    font-family: 'New Time Nevran', sans-serif;
  }

  .shadow-lg {
    margin-bottom: 50px;
    margin-top: 25px;
    border: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }

  .shadow-lg:hover {
    box-shadow: 0 0.5rem 1rem #14c03e;
    border: 1px solid #14c03e;
  }


  .mt-4 {
    margin-top: 0.01rem !important;
  }

  @media (max-width: 750px) {
    #BuyButton {
      margin-left: 26%;
    }
  }

  #donatebackground {
    background: #f8f8f8;
  }

#btnsub{
  font-family: 'New Time Nevran', sans-serif;
  background: #14c03e;
  color: white;
  border-radius: 6px;
  border: none;
  margin-left: 44%;
}

#btnsub:hover{
  background: #0086c8;
  color: white;
}


#fontfamily{
  font-family: 'New Time Nevran', sans-serif;
}


.text-center{
  font-family: 'New Time Nevran', sans-serif;
}

#bookingbutton{
  color: white;
  text-decoration: none;
}

@media (max-width: 768px) {
    #btnsub{
      width: 100%;
        margin-left: 0;
    }
}


</style>
