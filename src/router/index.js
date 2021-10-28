import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import StudentsShow from "../views/StudentsShow.vue";
import ExperiencesEdit from "../views/ExperiencesEdit.vue";
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
