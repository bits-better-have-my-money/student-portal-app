<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login</router-link>
      |
      <router-link :to="`/students/${getStudentId()}`">Student Show</router-link>
      |
      <router-link :to="`/experiences/${getStudentId()}/edit`">Update Resume</router-link>
      <!-- delete after testing -->
      |
      <router-link :to="`/students/${getStudentId()}/edit`">Edit Student Info</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    // isLoggedIn: function () {
    //   return localStorage.jwt;
    // },
    getStudentId: function () {
      return localStorage.student_id;
    },
  },
};
</script>
