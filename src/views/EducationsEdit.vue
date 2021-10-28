<template>
  <div class="educations-edit">
    <form v-on:submit.prevent="editEducationInfo()">
      <h1>Edit Education</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        Start Date:
        <input type="date" v-model="editEducationParams.start_date" />
      </div>
      <div>
        End Date:
        <input type="date" v-model="editEducationParams.end_date" />
      </div>
      <div>
        Degree:
        <input type="text" v-model="editEducationParams.degree" />
      </div>
      <div>
        University Name:
        <input type="text" v-model="editEducationParams.university_name" />
      </div>
      <div>
        Details:
        <input type="text" v-model="editEducationParams.details" />
      </div>
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editEducationParams: [
        {
          start_date: "2021-10-22",
          end_date: "2021-11-12",
          degree: "Computer Science",
        },
      ],
      errors: [],
    };
  },
  created: function () {
    axios.get(`/educations/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.editEducationParams = response.data;
    });
  },
  methods: {
    editEducation: function () {
      axios
        .patch(`/educations/${this.editEducationParams.id}`, this.editEducationParams)
        .then((response) => {
          console.log("Education edit", response);
          this.$router.push(`/students/${this.editEducationParams.student_id}`);
        })
        .catch((error) => {
          this.errors = error.reponse.data.errors;
        });
    },
    destroyExperience: function () {
      axios
        .delete(`/educations/${this.editEducationParams.id}`)
        .then((response) => {
          console.log("Education destroyed", response);
          this.$router.push(`/students/${this.editEducationParams.student_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
