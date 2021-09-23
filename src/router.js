import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
// import MainFooter from './layout/MainFooter.vue';

import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';
import Main from './pages/main.vue';
import SurveyCreate from './pages/SurveyCreate.vue';
import SurveyList from './pages/SurveyList.vue';
import SurveyClosedList from './pages/SurveyClosedList.vue';
import SurveyDetailOngoing from './pages/SurveyDetailOngoing.vue';
import About from './pages/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'main',
      components: { default: Main, header: Header, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/about',
      name: 'about',
      components: { default: About, header: Header, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/survey_create',
      name: 'survey_create',
      components: { default: SurveyCreate, header: Header, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/survey_ongoing',
      name: 'survey_ongoing',
      components: { default: SurveyList, header: Header, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/survey_ongoing/detail',
      name: 'survey_ongoing/detail',
      components: { default: SurveyDetailOngoing, header: Header, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/survey_closed',
      name: 'survey_closed',
      components: { default: SurveyClosedList, header: Header, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/main',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: Header, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: Header },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: Header, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
