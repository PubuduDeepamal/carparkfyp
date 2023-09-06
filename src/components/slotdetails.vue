<template>
    <h1>Firebase Realtime Database Data</h1>
    <hr/>
    <div class="row">
      <div class="col-md-4" v-for="post in postData" :key="post.id">
          <div>Tittle : {{ post.title }}</div>
          <div>Description : {{ post.description }}</div>
      </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      postsData: ''
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios.get('https://smart-parking-system-acf8a-default-rtdb.firebaseio.com/posts.json')
        .then((response) => {
          this.formatePostData(response.data);
        });
      },
    formatePostData(posts){
      this.postsData = [];
      console.log(posts);
      for(let key in posts){
        this.postsData.push({...posts[key], id:key});
      }
      console.log(this.postsData);
    }
  }
};
</script>
