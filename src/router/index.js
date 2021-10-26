import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import StudentShow from "../views/StudentShow.vue";
import StudentsResumeEdit from "../views/StudentsResumeEdit.vue";
import StudentsEdit from "../views/StudentsEdit.vue";

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
    component: StudentShow,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
