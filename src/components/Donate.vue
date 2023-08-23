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
              <h2 class="text-center text-xl font-bold mb-2" id="DonationTitle" style="font-size: 45.8px; font-weight: bold;">How Your Donation Helps Children's Homes</h2>
              <p class="text-gray-600 text-center">Your support is greatly appreciated. Help us make a difference by making a donation today.</p>
            </div>
          
            <button id="BuyButton" class="bg-blue-500 hover:bg-blue-600 absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <b>Donate Now</b>
            </button>
  
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<style scoped>
  #DonationTitle {
    font-size: 40px;
    margin-top: 0px;
  }

  .shadow-lg {
    margin-bottom: 50px;
    margin-top: 25px;
    border: 1px solid #ccc;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }

  .shadow-lg:hover {
    box-shadow: 0 0.5rem 1rem #f0d8b6;
    border: 1px solid #f0d8b6;
  }

  #BuyButton {
    background: white;
    border-color: #f0d8b6;
    color: black;
    border-radius: 6px;
    border: 1px solid #f0d8b6;
    margin-left: 40%;
  }

  #BuyButton:hover {
    background: #f0d8b6;
    color: black;
    border: black;
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
</style>
