<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <h1 id="logingtitle">Login</h1>
        <p class="text-black-50 mb-5">Please enter your login and password!</p>
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
        <p><button @click="handleSignIn" class="sign-in goolesinin">Login</button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      isSignedIn: false,
    }
  },
  methods: {
    handleSignIn() {
      if (this.username === 'user1' && this.password === 'password1') {
        this.isSignedIn = true;
        this.$router.push('/adminhome');
      } else if (this.username === 'user2' && this.password === 'password2') {
        this.isSignedIn = true;
        this.$router.push('/adminhome');
      } else if (this.username === 'user3' && this.password === 'password3') {
        this.isSignedIn = true;
        this.$router.push('/Moderatehome');
      } else {
        alert('Invalid username or password');
      }
    },
    handleSignOut() {
      this.username = '';
      this.password = '';
      this.isSignedIn = false;
    }
  } 
}
</script>


<style src="../assets/style/loging.css"></style>
<style src="../assets/scss/loging.scss"></style>

<style scoped>
@media (max-width:850px) {
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

#logingtitle{
    font-size: 45.8px;
    font-weight: bold; 
}
</style>
