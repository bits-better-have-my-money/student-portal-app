<template>
  <div class="experiences-edit">
    <form v-on:submit.prevent="editExperience()">
      <h1>Update Experience</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <br />
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
      <input v-on:click="editExperience()" type="submit" value="Update" />
      <input v-on:click="destroyExperience()" type="submit" value="Delete" />
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
      editExperienceParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/experiences/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.editExperienceParams = response.data;
    });
  },
  methods: {
    editExperience: function () {
      axios
        .patch(`/experiences/${this.editExperienceParams.id}`, this.editExperienceParams)
        .then((response) => {
          console.log("Experience edit", response);
          this.$router.push(`/students/${this.editExperienceParams.student_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyExperience: function () {
      axios
        .delete(`/experiences/${this.editExperienceParams.id}`)
        .then((response) => {
          console.log("Experience destroyed", response);
          this.$router.push(`/students/${this.editExperienceParams.student_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
