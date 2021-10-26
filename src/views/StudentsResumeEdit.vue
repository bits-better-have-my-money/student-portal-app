<template>
  <div class="students-resume-edit">
    <form v-on:submit.prevent="editResume()">
      <h1>Update Resume</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <h2>Experience</h2>
        <label>Start Date:</label>
        <input type="date" v-model="editResumeParams.start_date" />
        <label>End Date:</label>
        <input type="date" v-model="editResumeParams.end_date" />
        <label>Job Title:</label>
        <input type="string" v-model="editResumeParams.job_title" />
        <label>Company Name:</label>
        <input type="string" v-model="editResumeParams.company_name" />
        <label>Details:</label>
        <input type="text" v-model="editResumeParams.details" />
      </div>
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
  height: 15%;
}
</style>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      editResumeParams: {},
      errors: [],
    };
  },
  created: function () {
    // axios.get(`/students/${this.$route.params.id}`).then((response) => {
    //   console.log(response.data);
    //   this.editResumeParams = response.data;
    // });
  },
  methods: {
    editPost: function () {
      // axios
      // .patch(`/posts/${this.editResumeParams.id}`, this.editResumeParams)
      // .then((response) => {
      //   console.log("resume edit", response);
      //   this.$router.push(`/students/${this.editResumeParams.id}`);
      // })
      // .catch((error) => {
      //   this.errors = error.response.data.errors;
      // });
    },
  },
};
</script>
