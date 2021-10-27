<template>
  <div class="students-show">
    <div>
      <h1>{{ currentStudent.first_name }} {{ currentStudent.last_name }}</h1>
      <img
        v-bind:src="currentStudent.image_url"
        v-bind:alt="currentStudent.name"
      />
      <p>{{ currentStudent.email }}</p>
      <p>{{ currentStudent.phone_number }}</p>
      <p>{{ currentStudent.bio }}</p>
      <p>{{ currentStudent.linkedin_URL }}</p>
      <p>{{ currentStudent.twitter_handle }}</p>
      <p>{{ currentStudent.blog_url }}</p>
      <p>{{ currentStudent.github_url }}</p>
      <p>{{ currentStudent.experiences }}</p>
    </div>
    <div>
      <h1>Experience</h1>
      <div
        v-for="experience in currentStudent.experiences"
        v-bind:key="experience.id"
      >
        <h2>{{ experience.company_name }}</h2>
        <h3>{{ experience.job_title }}</h3>
        <p>{{ experience.start_date }} - {{ experience.end_date }}</p>
        <p>{{ experience.details }}</p>
      </div>
    </div>
    <div>
      <h1>Education</h1>
      <div
        v-for="education in currentStudent.educations"
        v-bind:key="education.id"
      >
        <h2>{{ education.university_name }}</h2>
        <h3>{{ education.degree }}</h3>
        <p>{{ education.start_date }} - {{ education.end_date }}</p>
        <p>{{ education.details }}</p>
      </div>
    </div>
    <div>
      <h1>Skills</h1>
      <div v-for="skill in currentStudent.skills" v-bind:key="skill.id">
        <p>{{ skill.name }}</p>
      </div>
    </div>
    <div>
      <h1>Capstone</h1>
      <div
        v-for="capstone in currentStudent.capstones"
        v-bind:key="capstone.id"
      >
        <h2>{{ capstone.name }}</h2>
        <h3>{{ capstone.description }}</h3>
        <p>{{ capstone.capstone_url }}</p>
        <p>{{ capstone.screenshot }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
// import axios from "axios";

export default {
  data: function () {
    return {
      currentStudent: {
        first_name: "Bob",
        last_name: "Smith",
        image_url: "https://unsplash.com/photos/ZPswLOq0FHE",
        email: "bobsmith@gmailcom",
        phone_number: "555 - 666 - 7777",
        bio: "Grew up in a working class family, and is the first of his family to pursue a higher education. He grinded his way to the top.",
        linkedin_url: "linkedin.com/bob",
        twitter_handle: "twitter.com/bob",
        blog_url: "blog.com/bob",
        github_url: "github.com/bob",
        experiences: [
          {
            id: 1,
            start_date: "01 / 01 / 21",
            end_date: "12 / 13 / 21",
            job_title: "Package Handler",
            company_title: "Fedex Ground",
            details: "loads and unloads packages from trucks",
          },
        ],
        educations: [
          {
            start_date: "01 / 01 / 20",
            end_date: "12 / 13 / 20",
            degree: "Art",
            university_name: "UWEC",
            details: "made some art in college",
          },
        ],
        skills: [],
        capstones: [
          {
            name: "Hideaway Huts",
            description: "AirBnb for tiny homes",
            capstone_url: "github.com/bobsmith/hideaway-huts",
            screenshot:
              "https://www.istockphoto.com/photo/dog-using-laptop-computer-gm1049887368-280769742?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftiny-home-website&utm_term=tiny%20home%20website%3A%3Asearch-aggressive-affiliates-v1%3Aa",
          },
        ],
      },
    };
  },
  created: function () {
    // axios.get("/students/" + this.$route.params.id).then((response) => {
    //   console.log("student show", response);
    //   this.currentStudent = response.data;
    // });
  },
  methods: {},
};
</script>
