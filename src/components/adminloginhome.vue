<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <h1 id="logingtitle">Login</h1>
        <p class="text-black-50 mb-5" id="fontfamily">Please enter your login and password!</p>
        <div class="form-outline form-white mb-4">
          <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Enter Username" v-model="username"/>
        </div>
        <div class="form-outline form-white mb-4">
          <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Enter Password" v-model="password"/>
        </div>
      </div>
      <div class="login-body">
        <form action=""></form>
      </div>
      <div id="SignIn" v-if="!isSignedIn">
        <p><button @click="handleSignIn" class="sign-in goolesinin" id="btnsub" style="width: 100%;">Login</button></p>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'; 

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      isSignedIn: false,
    };
  },
  methods: {
    handleSignIn() {
      if (this.username === 'user1' && this.password === 'password1') {
        this.isSignedIn = true;
        this.$router.push('/adminDashboard');
      } else if (this.username === 'user2' && this.password === 'password2') {
        this.isSignedIn = true;
        this.$router.push('/adminDashboard');
      } else if (this.username === 'user3' && this.password === 'password3') {
        this.isSignedIn = true;
        this.$router.push('/adminDashboard');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid username or password',
          text: 'Please check your username and password and try again.',
        });
      }
    },
    handleSignOut() {
      this.username = '';
      this.password = '';
      this.isSignedIn = false;
    },
  },
};
</script>


<style src="../assets/style/loging.css"></style>
<style src="../assets/scss/loging.scss"></style>

<style scoped>
@media (max-width: 850px) {
  .login-container .login-box {
    width: 340px;
  }
}

p {
  text-align: center;
  margin-bottom: 2.5rem;
}

.login-container .login-box {
  margin-top: 129px;
  margin-bottom: 63px;
}

#logingtitle {
  font-size: 45.8px;
  font-weight: bold;
}

#fontfamily {
  font-family: 'New Time Nevran', sans-serif;
}

#logingtitle {
  font-family: 'New Time Nevran', sans-serif;
}

#btnsub {
  font-family: 'New Time Nevran', sans-serif;
  background: #14c03e;
  color: white;
}

#btnsub:hover {
  background: #0086c8;
  color: white;
}
</style>
