import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/PocetnaStranica.vue'
import GeneralChat from '../views/GeneralChat.vue';
import GameList from '../views/GameList.vue'
import UserProfile from "../views/UserProfile.vue";
import ChatRoom from '../views/ChatRoom.vue'
import GameChat from '../views/GameChat.vue';

const routes = [
  {
    path: '/',
    name: 'PocetnaStranica',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },
  {
    path: '/mainpage',
    name: 'mainpage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage.vue')
  },
  {
    path: '/myprofile',
    name: 'myprofile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyProfile.vue')
  },
  {
    path: '/generalchat',
    name: 'GeneralChat',
    component: GeneralChat,
  },
  {
    path: '/gamelist',
    name: 'gamelist',
    component: GameList
  },
  {
    path: "/userprofile/:username",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatRoom
  },
  {
    path: '/gamechat',
    name: 'gamechat',
    component: GameChat
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
