import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout";
Vue.use(Router);

export const constantRoutes = [
  {
    path: "/",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/",
        component: () => import("@/views/home/Home"), //组件地址
      },
      {
        path: "/login",
        component: () => import("@/views/user/login"), //组件地址
      },
      {
        path: "/register",
        component: () => import("@/views/user/register"), //组件地址
      },
      {
        path: "/userinfo",
        redirect:"/userinfo/account",//默认选择第一个
        component: () => import("@/views/user/userInfo"), //组件地址
        children: [
          {
            path: "/userinfo/account",
            name:"account",
            component: () => import("@/views/user/settings/account"), //组件地址
          },
          {
            path: "/userinfo/notification",
            name:"notification",
            component: () => import("@/views/user/settings/notification"), //组件地址
          },
        ],
      },

      {
        path: "/ipost",
        component: () => import("@/views/article/post"), //组件地址
      },
      {
        path: "/article",
        component: () => import("@/views/article/article"), //组件地址
      },
      {
        path: "/clublist",
        component: () => import("@/views/club/clubList"), //组件地址
      },
      {
        path: "/article/:id",
        component: () => import("@/views/article/articleDetails"), //组件地址
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
