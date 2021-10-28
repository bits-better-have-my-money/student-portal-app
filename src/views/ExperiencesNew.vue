<template>
  <div class="experiences-new">
    <form v-on:submit.prevent="createExperience()">
      <h1>Add Experience</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <h2>Experience</h2>
        <label>Start Date:</label>
        <input type="date" v-model="editExperienceParams.start_date" />
        <br />
        <label>End Date:</label>
        <input type="date" v-model="editExperienceParams.end_date" />
        <br />
        <label>Job Title:</label>
        <input type="string" v-model="editExperienceParams.job_title" />
        <br />
        <label>Company Name:</label>
        <input type="string" v-model="editExperienceParams.company_name" />
        <br />
        <label>Details:</label>
        <input type="text" v-model="editExperienceParams.details" />
        <br />
      </div>
      <input v-on:click="createExperience()" type="submit" value="Add" />
      <input v-on:click="cancel()" type="submit" value="Cancel" />
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
import axios from "axios";
export default {
  data: function () {
    return {
      editExperienceParams: {
        student_id: localStorage.student_id,
      },
      errors: [],
    };
  },
  methods: {
    createExperience: function () {
      axios
        .post(`/experiences`, this.editExperienceParams)
        .then((response) => {
          console.log("Experience create", response);
          console.log(this.editExperienceParams);
          this.$router.push(`/students/${this.editExperienceParams.student_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    cancel: function () {
      this.$router.push(`/students/${this.editExperienceParams.student_id}`);
    },
  },
};
</script>
