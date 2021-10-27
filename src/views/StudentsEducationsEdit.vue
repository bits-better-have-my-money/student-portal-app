<template>
  <div class="students-education-edit">
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

      errors: [],
      },
    };
  },
  created: function () {
    // axios.get(`/students/${this.$route.params.id}`).then((response) => {
    // console.log(response.data);
    // this.editEducationParams = response.data;
    // });
  }
  methods: {
    // editEducation: function () {
    //   axios
    //     .patch(`/students/${this.editEducationParams.id}`, this.editEducationParams)
    //     .then((response) => {
    //       console.log(response.data);
    //       this.$router.push(`/students/${this.editEducationParams.student_id}`);
    //     })
    //     .catch((error) => {
    //       this.errors = error.reponse.data.errors;
    // });
    // },
  },
};
</script>
