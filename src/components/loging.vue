<template>
    <div class="login-container">
      <div class="login-box">
        <div class="login-header">
          <h1 id="logingtitle">Sing In</h1>
        </div>
        <div class="login-body">
          <form @submit.prevent="handleSignIn">
            <div class="form-group">
              <input type="text" id="username" v-model="username" placeholder="Username"/>
            </div>
            <div class="form-group">
              <input type="password" id="password" v-model="password" placeholder="Password" />
            </div>
            <button type="submit" class="login-button btn btn-primary" id="btnsub" style="margin-top: 20px; border: 1px solid #f0d8b6; width: 100%;" >Login</button>
          </form>
        </div>
        <div id="GooleSignIn" v-if="!isSignedIn">
          <p>
            <button @click="handleSignInGoole" class="google-signin btn btn-primary" id="btnsub" style="margin-top: 20px; margin-bottom: 20px; border: 1px solid #f0d8b6; width: 100%;">Google Sign in</button>
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

#btnsub{
  font-family: 'New Time Nevran', sans-serif;
  background: #14c03e;
  color: white;
}

#btnsub:hover{
  background: #0086c8;
  color: white;
}

#fontfamily{
  font-family: 'New Time Nevran', sans-serif;
}

.form-group{
  font-family: 'New Time Nevran', sans-serif;
  border: 1px solid #14c03e;
  border-radius: 7px;
}
</style>