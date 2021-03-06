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
// const SurveyList = () => import(/* webpackChunkName: "survey_list" */ './pages/SurveyList.vue');
import SurveyDetail from './pages/SurveyDetail.vue';
// const SurveyDetail = () => import(/* webpackChunkName: "survey_detail" */ './pages/SurveyDetail.vue');
import SurveyDetailClosed from './pages/SurveyDetailClosed.vue';
import SurveyDetailFree from './pages/SurveyDetailFree.vue';
import RewardShop from './pages/RewardShop.vue';
import About from './pages/About.vue';
import Search from './pages/Search.vue';

Vue.use(Router);


// const routes = [
//   { path: '/survey/:status/:category', name: 'survey_list', component: SurveyList },
//   { path: '/survey/detail/:surveyId', name: 'survey_detail', component: SurveyDetail }
// ];

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
      path: '/survey/:status/:category',
      name: 'survey_list',
      components: { default: SurveyList, header: Header, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/survey/detail/:surveyId',
      name: 'survey_detail',
      components: { default: SurveyDetail, header: Header},
      props: {
        header: { colorOnScroll: 400 },
        // footer: { backgroundColor: 'black' }
      }
    },
    
    // {
    //   path: '/survey_closed/detail',
    //   name: 'survey_closed_detail',
    //   components: { default: SurveyDetailClosed, header: Header, footer: Footer },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: 'black' }
    //   }
    // },
    
    // {
    //   path: '/survey_free/detail',///
    //   name: 'survey_free_detail',
    //   components: { default: SurveyDetailFree, header: Header, footer: Footer },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: 'black' }
    //   }
    // },
    {
      path: '/rewardshop',///
      name: 'rewardshop',
      components: { default: RewardShop, header: Header, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/search',///
      name: 'search',
      components: { default: Search, header: Header, footer: Footer },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/search/:keyword',///
      name: 'searchByKeyword',
      components: { default: Search, header: Header, footer: Footer },
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
