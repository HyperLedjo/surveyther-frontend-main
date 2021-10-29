<template>
    <div class="">
      
          <div
            v-for="survey in $store.state.surveyAllData"
            :key="survey"
            >
             <!-- v-if="survey.category == $route.params.category" -->
            <template v-if="survey.category == $route.params.category && survey.status == $route.params.status">
                <router-link :to="{name: 'survey_detail', params:{surveyId: survey.surveyId}}">
              <div class="card p-3"
                @mouseover ="selectingBox(survey.surveyId)"
                v-bind:style="selectedBox==survey.surveyId ? 
                      {'border-left': '10px solid #fddcae'
                      , 'border-right' : '10px solid #fddcae'
                      }:{'': ''}"
              
              >
                  <div >

                    <div id="inputs">
                        <div class="row card-form">

                            <div class="col-sm-6 col-lg-12">
                              <span class="badge badge-primary mr-1">{{survey.category}}</span>
                              <span class="badge  mr-1"
                                    v-bind:class="{ 'badge-success' : survey.status == '진행중' , 'badge-default' : survey.status == '마감'}"
                                >{{survey.status}}</span>
                              <!-- <span class="badge badge-success mr-1">{{survey.status}}</span> -->
                                <span  v-if="survey.status == '진행중'" class="badge badge-warning">{{survey.paymAmount*0.98*0.5/survey.targetAmount}}</span>
                                <span><b class="black-text"> {{survey.title}}</b></span> 
                            </div>
                            <!-- <div class="col-sm-6 col-lg mt-1">
                                <b> <h6>서베이 타이틀입니다</h6></b>
                            </div> -->
                            <div class="surv-disc col-sm-6 col-lg-12 mt-1">
                                <h6> {{survey.subtitle}}</h6>
                                 <!-- style="border: solid 1px rgb(200,200,200);" -->
                            <hr>
                            </div>
                      <!-- 태그 -->
                            <div class="col-sm-6 col-lg-5 black-text">
                              <span v-for="tag in $store.state.tagData " :key="tag" class="badge badge-neutral mr-1">
                                      <template v-if="tag.surveyId == survey.surveyId">
                                        #{{tag.content}}
                                      </template>
                                      </span>
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-3">
                                <div  v-if="survey.status == '진행중'">
                                    <span class="mr-4">남은보상<b>{{survey.targetAmount-survey.currentAmount}}</b></span>
                                    <span>마감일 <b>{{survey.closingDate}}</b></span>
                                </div>
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-2">
                                <span class="ml-3">등록일 {{survey.regDate}}</span> 
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-2">
                                <span class="ml-4 now-ui-icons ui-2_chat-round"> {{survey.commentCount}}</span> 
                                <span class="ml-4 now-ui-icons ui-2_favourite-28"> {{survey.likeCount}}</span> 
                            </div>
                        </div>
                    </div>

                  </div>
              </div>
            </router-link>
            </template>



          </div>
    </div>
</template>
<script>

import {
  FormGroupInput,
} from '@/components';

export default {
  components: {
    // Card,
    [FormGroupInput.name]: FormGroupInput,
  },
  data(){
    return{
      reward: 0,
        selectedBox: '',

    }
  },
  
  methods:{
    selectingBox(val){
      this.selectedBox = val;
    }
  },
  computed:{
    rewardPerOne() {
    return this.list.map((element) => {
      // do your work on this element here 
      element*0.98*0.4
    })
  }
  }
  
};
</script>
<style>
.black-text{
  color: black;
}
.white-text{
  color: white;
}
</style>
