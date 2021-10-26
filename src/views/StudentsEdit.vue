<template>
  <div class="students-edit">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      editStudentParams: {
        first_name: "Bob",
        last_name: "Smith",
        email: "bob@gmail.com",
        phone_number: "1235551234",
        bio: "this is Bobs bio",
        linkedin_URL: "linkedin.com/in/bob-smith",
        twitter_handle: "bobsmith",
        blog_url: "something@blog.com",
        resume_url: "",
      },
      errors: [],
    };
  },
  created: function () {
    // axios.get(`/students/${this.$route.params.id}`).then((response) => {
    //   console.log(response.data);
    //   this.editStudentParams = response.data;
  },
  methods: {
    // editStudentInfo: function () {
    //   axios
    //     .patch(`/students/${this.editStudentParams.id}`, this.editStudentParams)
    //     .then((response) => {
    //       console.log(response.data);
    //       this.$router.push(`/students/${response.data.id}`);
    //     })
    //     .catch((error) => {
    //       console.log(error.response.data.errors);
    // });
    // },
  },
};
</script>
