<template>
  <div>
    <h1>Firebase Realtime Database Data</h1>
    <div>
      <div v-for="post in postData" :key="post.id">
          <div>{{ post.Gate_01 }}</div>
          <div>{{ post.Gate_02 }}</div>
      </div>
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
        });}}
};
</script>
