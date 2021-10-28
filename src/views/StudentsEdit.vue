<template>
  <div class="students-edit">
    <h1>{{ currentStudent.name }}</h1>
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
      errors: [],
    };
  },
  created: function () {
    axios.get(`/students/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.currentStudent = response.data;
    });
  },
  methods: {
    editStudentInfo: function () {
      axios
        .patch(`/students/${this.currentStudent.id}`, this.currentStudent)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/students/${response.data.id}`);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
