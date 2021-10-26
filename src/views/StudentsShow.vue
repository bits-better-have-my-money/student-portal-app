<template>
  <div class="student-show">
    <div>
      <h1>{{ currentStudent.first_name }} {{ currentStudent.last_name }}</h1>
      <p>{{ currentStudent.image_url }}</p>
      <p>{{ currentStudent.email }}</p>
      <p>{{ currentStudent.phone_number }}</p>
      <p>{{ currentStudent.bio }}</p>
      <p>{{ currentStudent.linkedin_URL }}</p>
      <p>{{ currentStudent.twitter_handle }}</p>
      <p>{{ currentStudent.blog_url }}</p>
      <p>{{ currentStudent.github_url }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentStudent: {
        first_name: "Bob",
        last_name: "Smith",
        image_url: "https://unsplash.com/photos/ZPswLOq0FHE",
        email: "bobsmith@gmailcom",
        phone_number: "555 - 666 - 7777",
        bio: "Grew up in a working class family, and is the first of his family to pursue a higher education. He grinded his way to the top.",
        linkedin_url: "linkedin.com/bob",
        twitter_handle: "twitter.com/bob",
        blog_url: "blog.com/bob",
        github_url: "github.com/bob",
      },
    };
  },
  created: function () {
    axios.get("/students/" + this.$route.params.id).then((response) => {
      console.log("student show", response);
      this.photo = response.data;
    });
  },
  methods: {},
};
</script>
