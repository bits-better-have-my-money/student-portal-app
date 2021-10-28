<template>
  <div class="students-edit">
    <form v-on:submit.prevent="editStudentInfo()">
      <h1>Edit Student</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        First Name:
        <input type="text" v-model="currentStudent.first_name" />
      </div>
      <div>
        Last Name:
        <input type="text" v-model="currentStudent.last_name" />
      </div>
      <div>
        Email:
        <input type="text" v-model="currentStudent.email" />
      </div>
      <div>
        Phone Number:
        <input type="text" v-model="currentStudent.phone_number" />
      </div>
      <div>
        Short Bio:
        <input type="text" v-model="currentStudent.bio" />
      </div>
      <div>
        LinkedIn Url
        <input type="text" v-model="currentStudent.linkedin_url" />
      </div>
      <div>
        Twitter Handle:
        <input type="text" v-model="currentStudent.twitter_handle" />
      </div>
      <div>
        Blog:
        <input type="text" v-model="currentStudent.blog_url" />
      </div>
      <div>
        GitHub:
        <input type="text" v-model="currentStudent.github_url" />
      </div>
      <div><img :src="currentStudent.image_url" /></div>
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<style></style>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      currentStudent: {
        first_name: "Bob",
        last_name: "Smith",
        image_url: "https://www.bobross.com/content/bob_ross_img.png",
        email: "bobsmith@gmail.com",
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
    // axios.get(`/students/${this.$route.params.id}`).then((response) => {
    // console.log(response.data);
    // this.currentStudent = response.data;
    // });
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
