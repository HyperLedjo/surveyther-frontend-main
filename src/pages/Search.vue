<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title" style="margin-top:80px">Search</h1>
            <card class="rounded-pill" style="height: 88px; width:800px; margin-top:20px">
                <div class="row" style="margin:-10px; margin-left:-30px; margin-right:-30px;">
                    <fg-input
                        class="input-lg col-md-9"
                        style="margin-top: 10px; padding-left:40px;"
                        placeholder="검색어를 입력해주세요"
                        v-model="form.firstName"
                        addon-left-icon="now-ui-icons ui-1_zoom-bold"
                        >
                    </fg-input>
                    <div class="col-md-3 p-0">
                        <button class="btn btn-primary btn-round btn-lg">검색</button>

                    </div>
                </div>
            </card>
        </div>
      </div>
    </div>
    
    <div class="section">
        <div class="container">
            <div class="button-container">
                <!-- <div class="btn btn-primary btn-round btn-lg">
                    test
                </div> -->
                <!-- <survey-all-data></survey-all-data> -->

                <div class="">
        <div class="container" >
          <card>
            <div>
               ""에 대한 결과입니다
            </div>

          </card>
          <!-- card -->
           <!-- {{$store.state.surveyAllData}}---- -->

            <v-list-tile
            v-for="(survey) in $store.state.surveyAllData"
            :key="survey"
            >
                <a href="/survey_ongoing/detail">
              <card >
                  <div >

                    <div id="inputs">
                        <div class="row card-form">

                            <div class="col-sm-6 col-lg-12">
                              <span class="badge badge-primary mr-1">{{survey.category}}</span>
                              <span class="badge  mr-1"
                                    v-bind:class="{ 'badge-success' : survey.status == '진행중' , 'badge-default' : survey.status == '마감'}"
                                >{{survey.status}}</span>
                              <!-- <span class="badge badge-success mr-1">{{survey.status}}</span> -->
                                <span  v-if="survey.status == '진행중'" class="badge badge-warning">{{survey.paymAmount*0.98*0.4}}</span>
                                <span><b> {{survey.title}}</b></span> 
                            </div>
                            <!-- <div class="col-sm-6 col-lg mt-1">
                                <b> <h6>서베이 타이틀입니다</h6></b>
                            </div> -->
                            <div class="surv-disc col-sm-6 col-lg-12 mt-1">
                                <h6> {{survey.subtitle}}</h6>
                            <hr style="border: solid 1px rgb(200,200,200);">
                            </div>
                            <div class="col-sm-6 col-lg-5">
                              <span class="badge badge-neutral mr-1">#태그</span>
                              <span class="badge badge-neutral mr-1">#서베이</span>
                              <span class="badge badge-neutral mr-1">#tag</span>
                              <span class="badge badge-neutral mr-1">#sample</span>
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-3">
                                <div  v-if="survey.status == '진행중'">
                                    <span class="mr-4">남은보상<b>{{survey.targetAmount-survey.currentAmount}}</b></span>
                                    <span>마감 <b>{{survey.tillClose}}</b> 일전</span>
                                </div>
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-2">
                                <span class="ml-3">{{survey.regDate}}</span> 
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-2">
                                <span class="ml-4 now-ui-icons ui-2_chat-round"> {{survey.commentCount}}</span> 
                                <span class="ml-4 now-ui-icons ui-2_favourite-28"> {{survey.likeCount}}</span> 
                            </div>
                        </div>
                    </div>

                  </div>
              </card>
            </a>
            </v-list-tile>

        </div>
    </div>
            </div>
        </div>
    </div>
    
    
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import SurveyAllData from './mycomponents/SurveyAllData.vue';

export default {
//   name: 'search',
//   bodyClass: 'search-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Card,
    // SurveyAllData

  },
  data() {
    return {
        id: this.$route.params.id,
      form: {
        firstName: '',
        email: '',
        message: '',
      }
    };
  },
    beforeCreate(){
        this.$store.dispatch('allSurvey');
    },
  created(){
    //   this.$http.get('/api/survey' + ).then
    // this.$store.state.SurveyAllData
  },
  beforeMount() {
  },
};
</script>
<style></style>
