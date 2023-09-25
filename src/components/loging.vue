<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <h1 id="logingtitle" style="font-family: 'New Time Nevran', sans-serif;">Sign In</h1>
      </div>
      <div class="login-body">
        <form @submit.prevent="handleSignIn">
          <div class="form-group">
            <input type="email" id="email" v-model="email" style="font-family: 'New Time Nevran', sans-serif;" placeholder="Email" />
          </div>
          <div class="form-group">
            <input type="password" id="password" v-model="password" placeholder="Password" style="font-family: 'New Time Nevran', sans-serif;" />
          </div>
          <button type="submit" class="login-button btn btn-primary" id="btnsub" style="margin-top: 20px; border: 1px solid #f0d8b6; width: 100%; font-family: 'New Time Nevran', sans-serif;">Login</button>
        </form>
      </div>
      <div id="GoogleSignIn" v-if="!isSignedIn">
        <p>
          <button @click="handleSignInGoogle" class="google-signin btn btn-primary" id="btnsub" style="margin-top: 20px; margin-bottom: 20px; border: 1px solid #f0d8b6; width: 100%; font-family: 'New Time Nevran', sans-serif;">Google Sign in</button>
        </p>
      </div>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'; // Import SweetAlert

const provider = new GoogleAuthProvider();
const auth = getAuth();

firebaseConfig; // Ensure your Firebase configuration is properly set up

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      isSignedIn: false,
    };
  },
  methods: {
    handleSignIn() {
      const email = this.email;
      const password = this.password;

      // Sign in with email and password
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User successfully signed in
          this.isSignedIn = true;
          this.$router.push('/Booking');
        })
        .catch((error) => {
          // Show error message using SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: error.message,
          });
          console.error(error);
        });
    },
    handleSignInGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {
          this.isSignedIn = true;
          this.$router.push('/Booking');
        })
        .catch((error) => {
          // Show error message using SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: error.message,
          });
          console.error(error);
        });
    },
    handleSignOut() {
      signOut(auth)
        .then(() => {
          this.email = '';
          this.password = '';
          this.isSignedIn = false;
          this.$router.push('/Booking');
        })
        .catch((error) => {
          // Show error message using SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Sign Out Error',
            text: error.message,
          });
          console.error(error);
        });
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

#btnsub {
  font-family: 'New Time Nevran', sans-serif;
  background: #14c03e;
  color: white;
}

#btnsub:hover {
  background: #0086c8;
  color: white;
}

#fontfamily {
  font-family: 'New Time Nevran', sans-serif;
}

.form-group {
  font-family: 'New Time Nevran', sans-serif;
  border: 1px solid #14c03e;
  border-radius: 7px;
}
</style>
