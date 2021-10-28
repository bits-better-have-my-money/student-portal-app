import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import StudentsShow from "../views/StudentsShow.vue";
import ExperiencesEdit from "../views/ExperiencesEdit.vue";
import ExperiencesNew from "../views/ExperiencesNew.vue";
import SkillsEdit from "../views/SkillsEdit.vue";
import SkillsNew from "../views/SkillsNew.vue";
import StudentsEdit from "../views/StudentsEdit.vue";
import EducationsEdit from "../views/EducationsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/students/:id",
    name: "students-show",
    component: StudentsShow,
  },
  {
    path: "/experiences/:id/edit",
    name: "experiences-edit",
    component: ExperiencesEdit,
  },
  {
    path: "/experiences/new",
    name: "experiences-new",
    component: ExperiencesNew,
  },
  {
    path: "/skills/:id/edit",
    name: "skills-edit",
    component: SkillsEdit,
  },
  {
    path: "/skills/new",
    name: "skills-new",
    component: SkillsNew,
  },
  {
    path: "/students/:id/edit",
    name: "students-edit",
    component: StudentsEdit,
  },
  {
    path: "/educations/:id/edit",
    name: "educations-edit",
    component: EducationsEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
