<template>
  <div>
    <div class="page-header clear-filter" filter-color="">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/now-logo.png" alt="" />
          <h1 class="h1-seo">Surveyther</h1>
          <h3>This is Surveyther sample page!</h3>
        </div>

            <!-- <li class="nav-item" style="width:350px">
                <a
                class="nav-link btn btn-neutral"
                href=""
                target="_blank"
                >
                
                <p>Upgrade to PRO</p>
                </a>
            </li> -->
            <!-- <div class="col text-center">
                <div role="button" class="btn btn-simple btn-round btn-white btn-lg">
                ???
                </div>
            </div> -->
            

        <h6 class="category category-absolute">
          this is sample text
          
        </h6>
      </div>
    </div>

    <main-info></main-info>
    <main-content></main-content>
    <main-about></main-about>


    <!-- <basic-elements></basic-elements> -->
    <!-- <navigation></navigation> -->
    <!-- <tabs-section></tabs-section> -->
    <!-- <progress-pagination></progress-pagination>
    <notifications></notifications>
    <typography></typography>
    <javascript-components></javascript-components>
    <carousel-section></carousel-section>
    <nucleo-icons-section></nucleo-icons-section> -->
    <!-- <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Completed with examples</h2>
            <h5 class="description">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              More importantly, looking at them will give you a picture of what
              you can built with this powerful Bootstrap 4 ui kit.
            </h5>
          </div>
        </div>
      </div>
    </div> -->
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
    // BasicElements,
    // Navigation,
    // TabsSection,
    // ProgressPagination,
    // Notifications,
    // Typography,
    // JavascriptComponents,
    // CarouselSection,
    // NucleoIconsSection,
    SignupForm,
    // ExamplesSection,
    // DownloadSection,
    MainInfo,
    MainContent,
    MainAbout
  }
};
</script>
<style></style>
