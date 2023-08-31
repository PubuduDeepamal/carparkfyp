<template>
    <div class="sidebar">
      <div class="logo">
        <h1 class="logo" id="fontfamily"><b>KCC Car Park</b></h1>
      </div>
      <nav class="nav-links">
        <li><RouterLink to="/adminhome" id="fontfamily">View</RouterLink></li>
          <li><RouterLink to="adminhome1" id="fontfamily">Materials Management</RouterLink></li>
          <li><RouterLink to="adminhome2" id="fontfamily">Update</RouterLink></li>
          <li>
            <RouterLink to="" id="fontfamily" @click="showLogoutPopup">Logout</RouterLink>
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
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
  }
  
  .logo {
    padding: 20px;
    text-align: center;
  }
  
  .nav-links {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #fff;
    margin: 10px 0;
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  </style>
  