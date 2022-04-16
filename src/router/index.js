import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout";
Vue.use(Router);

export const constantRoutes = [
  {
    path: "/layout",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/Home"), //组件地址
      },
    ],
  },
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();
export default router;
