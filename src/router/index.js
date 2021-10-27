import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import StudentsShow from "../views/StudentsShow.vue";
import StudentsResumeEdit from "../views/StudentsResumeEdit.vue";
import StudentsEdit from "../views/StudentsEdit.vue";
import StudentsEducationEdit from "../views/StudentsEdit.vue";

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
    path: "/students/:id/resume/edit",
    name: "students-resume-edit",
    component: StudentsResumeEdit,
  },
  {
    path: "/students/:id/edit",
    name: "students-edit",
    component: StudentsEdit,
  },
  {
    path: "/students/:id/education/edit",
    name: "students-education-edit",
    component: StudentsEducationEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
