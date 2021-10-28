<template>
  <div class="skills-add">
    <form v-on:submit.prevent="editSkills()">
      <h1>Add Skill</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Skill:</label>
        <input type="string" v-model="editSkillsParams.name" />
        <br />
      </div>
      <input v-on:click="createSkills()" type="submit" value="Add" />
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
      editSkillsParams: {
        student_id: localStorage.student_id,
      },
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
    createSkills: function () {
      axios
        .post(`/skills`, this.editSkillsParams)
        .then((response) => {
          console.log("Skills create", response);
          console.log(this.editSkillsParams);
          this.$router.push(`/students/${this.editSkillsParams.student_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    cancel: function () {
      this.$router.push(`/students/${this.editSkillsParams.student_id}`);
    },
  },
};
</script>
