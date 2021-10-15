<template>
  <div>
    <div class="page-header clear-filter" filter-color="">
      <parallax
        class="page-header-image"
        style="background-image:url('img/Main.jpeg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/now-logo.png" alt="" />
          <h1 class="h1-seo">Surveyther</h1>
          <h3>This is Surveyther sample page!</h3>
          <!-- <button class="btn btn-round btn-primary" v-on:click="kakaoPay">Pay!</button> -->

        </div>
<!-- {{$store.actions.signIn()}} -->

        <h6 class="category category-absolute">
          this is sample text
          
        </h6>
      </div>
    </div>

    <main-info></main-info>
    <main-content></main-content>
    <main-about></main-about>


    <signup-form></signup-form>
    <!-- <examples-section></examples-section>
    <download-section></download-section> -->
  </div>
</template>
<script>
import { Parallax } from '@/components';
import BasicElements from './components/BasicElementsSection';
import Navigation from './components/Navigation';
import TabsSection from './components/Tabs';
import ProgressPagination from './components/ProgressPagination';
import Notifications from './components/Notifications';
import Typography from './components/Typography';
import JavascriptComponents from './components/JavascriptComponents';
import CarouselSection from './components/CarouselSection';
import NucleoIconsSection from './components/NucleoIconsSection';
import SignupForm from './components/SignupForm';
import ExamplesSection from './components/ExamplesSection';
import DownloadSection from './components/DownloadSection';

import MainInfo from './mycomponents/MainInfo.vue';
import MainContent from './mycomponents/MainContent.vue';
import MainAbout from './mycomponents/MainAbout.vue';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    SignupForm,
    MainInfo,
    MainContent,
    MainAbout
  },
  methods:{
    kakaoPay() {
      const member = {
        member_id: 1
      }
      const survey = {
        survey_title: "이렇고 저런 문제에 관하여",
        survey_paid: 10000
      }
    }    
  }
};
</script>
<style></style>
