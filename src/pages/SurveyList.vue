<template>
  <div class="" >
        <div class="page-header page-header-small">
        <parallax
            class="page-header-image"
            style="background-image: url('img/bg6.jpg')"
        >
        </parallax>
        <div class="content-center">
            <div class="container"> 
            <h1 class="title">List of Ongoing Survey </h1>
            
            </div>
        </div>
        </div>

    <div class="">
            <div class="section">
                <div class="container">
                    <div class="button-container">
                        <!-- <div class="btn btn-primary btn-round btn-lg">
                            test
                        </div> -->

                        <div class="">
                          <div class="container" >
                            
                                  <survey-all-data></survey-all-data>

                            

                          </div>
                      </div>
                    </div>
                </div>
            </div>

    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';

import ListOngoing from './mycomponents/ListOngoing.vue';
import SurveyAllData from './mycomponents/SurveyAllData.vue';


export default {
  // name: 'landing',
  // bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    // ListOngoing,
    SurveyAllData

  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  },
  beforeCreate(){
      // console.log('eeeeeeeeebeforecreate')
        // this.$store.dispatch('partOfSurvey');
  },
};
</script>
<style>


</style>
