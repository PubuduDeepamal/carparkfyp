<template>
    <div>
    <h3>Add Post</h3>

    <form @submit.prevent="onAddPost">
    
    <div class="my-2">
    
    <label>Title</label>
    
    <input type="text" class="form-control" v-model="post.title" />
    
    </div>
    
    <div class="my-2">
    
    <label>Description</label>
    
    <textarea class="form-control"  v-model="post.description" />
    
    </div>
    
    <div class="my-2">
    
    <button class="btn btn-primary">Add Post</button> 
    
    </div>

    </form>
    
    </div> 
    
    </template>
    
    <script>
import axios from 'axios';
    
    export default {
        data(){
            return{
                post:{
                    title: '',
                    description: ''
                }
            };
        },
        methods:{
            onAddPost(){
                axios
                .post('https://smart-parking-system-acf8a-default-rtdb.firebaseio.com/posts.json', this.post)
                .then(Response=>{
                    console.log(Response);
                });
            }
        }
    };
    
    </script>