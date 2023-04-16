import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/PocetnaStranica.vue'
import GeneralChat from '../views/GeneralChat.vue';
import GameList from '../views/GameList.vue'
import UserProfile from "../views/UserProfile.vue";
import ChatRoom from '../views/ChatRoom.vue'
import GameChat from '../views/GameChat.vue';
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import MainPage from '../views/MainPage.vue'
import MyProfile from '../views/MyProfile.vue'

const routes = [
  {
    path: '/',
    name: 'PocetnaStranica',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/mainpage',
    name: 'mainpage',
    component: MainPage
  },
  {
    path: '/myprofile',
    name: 'myprofile',
    component: MyProfile
  },
  {
    path: '/generalchat',
    name: 'GeneralChat',
    component: GeneralChat
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
