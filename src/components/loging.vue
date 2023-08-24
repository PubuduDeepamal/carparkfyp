<template>
    <div class="login-container">
      <div class="login-box">
        <div class="login-header">
          <h1 id="logingtitle">Sing In</h1>
        </div>
        <div class="login-body">
          <form @submit.prevent="handleSignIn">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" id="username" v-model="username" />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" v-model="password" />
            </div>
            <button type="submit" class="login-button">Login</button>
          </form>
        </div>
        <div id="GooleSignIn" v-if="!isSignedIn">
          <p>
            <button @click="handleSignInGoole" class="google-signin">Google Sign in</button>
          </p>
        </div>
      </div>
    </div>
  </template>
  
          
<script>
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

firebaseConfig

const provider = new GoogleAuthProvider();
const auth = getAuth();

    export default {
        name: 'loging',
        data()
        {
            return{
                user:'bpunu',
                isSignedIn: false,
            }
        },
        methods:
        {
            handleSignInGoole(){

                signInWithPopup(auth, provider)
                    .then((result) => {
                    this.isSignedIn =true;   
                    this.$router.push('/Booking');    
                    }).catch((error) => {
                       console.log(error);
                    });

            },
            handleSignOut(){
                signOut(auth).then(() => {
                   this.user = '';
                   this.isSignedIn= false;
                }).catch((error) => {
                    console.log(error);
                });
            }
        } 
    }
    
</script>

<style src="../assets/style/loging.css"></style>
<style src="../assets/scss/loging.scss"></style>

<style scoped>
@media (max-width:850px) {
    .login-container .login-box 
    {
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