<template>
    <div class="sidebar">
      <div class="logo">
        <h1 class="logo" id="fontfamily"><b>KCC Car Park</b></h1>
        <P class="logo" id="fontfamily">Admin Panel</P>
      </div>
      <nav class="nav-links">
        <li><RouterLink to="/adminhome" id="fontfamily" class="logo">Dashboard</RouterLink></li>
          <li><RouterLink to="adminhome1" id="fontfamily456" class="logo"></RouterLink></li>
          <li><RouterLink to="adminhome2" id="fontfamily456" class="logo"></RouterLink></li>
          <li>
            <RouterLink to="" id="fontfamily" @click="showLogoutPopup" class="logo">Logout</RouterLink>
          </li>
      </nav>
    </div>
  </template>

<script>

import Swal from 'sweetalert2';


export default {
name: "Sidebar",

methods: {
  async showLogoutPopup() {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You want to log out?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'No, cancel',
    });

    if (result.isConfirmed) {
      await this.$router.push('/adminlogin');
      Swal.fire('Logged out!', 'You have been logged out.', 'success');
    }
  },
},

};
</script>

  
  
  <style scoped>
  .sidebar {
    background-color: #333;
    color: #fff;
    width: 250px; /* Adjust the width to your desired size */
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
  }
  
  .logo {
    padding: 10px; /* Reduce padding to make it smaller */
    text-align: center;
  }
  
  .nav-links {
    display: flex;
    flex-direction: column;
    padding: 10px; /* Reduce padding to make it smaller */
  }
  
  .nav-links a {
    text-decoration: none;
    color: #fff;
    margin: 5px 0; /* Reduce margin to make it closer together */
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  
  #fontfamily456 {
    font-family: 'New Time Nevran', sans-serif;
  }
  
  #fontfamily {
    font-family: 'New Time Nevran', sans-serif;
  }
  </style>
  