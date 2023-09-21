<template>
  <div class="sidebar bg-dark text-white">
    <div class="logo text-center">
      <h1 class="logo-text">KCC Car Park</h1>
      <p class="logo-subtext">Admin Panel</p>
    </div>
    <nav class="nav flex-column nav-links">
      <router-link to="/adminhome" class="nav-link" id="fontfamily">Dashboard</router-link>
      <router-link to="/adminhome2" class="nav-link" id="fontfamily456">Slot Details</router-link>
      <router-link to="/adminhome" class="nav-link" id="fontfamily456">Contact Us</router-link>
      <router-link to="/adminhome10" class="nav-link" id="fontfamily456">Booking Details</router-link>
      <router-link to="" class="nav-link" id="fontfamily" @click="showLogoutPopup">Logout</router-link>
    </nav>
    <div class="logo text-center">
      <p class="logo-subtext" id="heder3text">All Rights Reserved 2023 Designed by</p>
      <p class="logo-subtext">K.B.M.Pubudu Deepamal</p>
    </div>
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
.logo-text {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 70px;
}

.logo-subtext {
  font-size: 14px;
  margin-top: 0;
}

.nav-link {
  color: #fff;
  font-family: 'New Time Nevran', sans-serif;
  padding: 10px 20px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #555;
}

.sidebar {
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.nav-links {
  padding: 20px 0;
}

#heder3text {
  text-align: center !important;
  margin-top: 250px;
}
</style>
