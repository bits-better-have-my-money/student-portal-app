<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {
        email: "abrahamlincoln@gmail.com",
        password: "password",
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios.post("/sessions", this.newSessionParams).then((response) => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        console.log(response.data);
        localStorage.setItem("jwt", response.data.jwt);
        this.$router.push("/students/" + response.data.student_id);
      });
    },
  },
};
</script>
