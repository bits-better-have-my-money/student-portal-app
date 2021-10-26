import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import StudentsShow from "../views/StudentsShow.vue";
Vue.use(VueRouter);
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
    component: StudentsShow,
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
