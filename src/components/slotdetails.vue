<template>
  <div>
    <h1>Firebase Realtime Database Data</h1>
    <hr />
    <div class="row" v-if="postData.length">
      <div class="col-md-4" v-for="post in postData" :key="post.id">
        <div>Title: {{ post.title }}</div>
        <div>Description: {{ post.description }}</div>
      </div>
    </div>
    <div v-else>
      Loading data...
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      postData: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get('https://smart-parking-system-acf8a-default-rtdb.firebaseio.com/posts.json')
        .then((response) => {
          this.formatPostData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
    formatPostData(posts) {
      this.postData = [];
      for (let key in posts) {
        this.postData.push({ ...posts[key], id: key });
      }
    },
  },
};
</script>


  