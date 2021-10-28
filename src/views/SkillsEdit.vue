<template>
  <div class="skills-edit">
    <form v-on:submit.prevent="editSkills()">
      <h1>Update Resume</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <h2>Skills</h2>
        <label>Skill:</label>
        <input type="string" v-model="editSkillsParams.name" />
        <br />
      </div>
      <input v-on:click="editSkills()" type="submit" value="Update" />
      <input v-on:click="destroySkills()" type="submit" value="Delete" />
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
      editSkillsParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/skills/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.editSkillsParams = response.data;
    });
  },
  methods: {
    editSkills: function () {
      axios
        .patch(`/skills/${this.editSkillsParams.id}`, this.editSkillsParams)
        .then((response) => {
          console.log("Skills edit", response);
          this.$router.push(`/students/${this.editSkillsParams.student_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroySkills: function () {
      axios
        .delete(`/skills/${this.editSkillsParams.id}`)
        .then((response) => {
          console.log("Skills destroyed", response);
          this.$router.push(`/students/${this.editSkillsParams.student_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
