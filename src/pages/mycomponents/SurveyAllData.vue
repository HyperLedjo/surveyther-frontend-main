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
                              <span class="badge mr-1" style="color:#5a48d0;"><b>{{survey.blockNo}}</b></span>
                              <span class="badge badge-primary mr-1">{{survey.category}}</span>
                              <span class="badge  mr-1"
                                    v-bind:class="{ 'badge-success' : survey.status == '진행중' , 'badge-default' : survey.status == '마감'}"
                                >{{survey.status}}</span>
                                <span  v-if="survey.status == '진행중'" class="badge badge-warning">{{survey.paymAmount*0.98*0.5/survey.targetAmount}}</span>
                                <span><b class="black-text"> {{survey.title}}</b></span> 
                                <span class="badge pull-right" style="color:#5a48d0;">
                                  <small>
                                    <b>{{survey.txHash}}</b>
                                  </small>
                                </span>
                            </div>
                            
                            <div class="surv-disc col-sm-6 col-lg-12 mt-1">
                                <h6> {{survey.subtitle}}</h6>
                                <hr>
                            </div>
                      <!-- 태그 -->
                            <div class="col-sm-6 col-lg-8 black-text">
                              <span v-for="tag in $store.state.tagData " :key="tag" class="badge badge-neutral mr-1">
                                      <template v-if="tag.surveyId == survey.surveyId">
                                        #{{tag.content}}
                                      </template>
                                      </span>
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-2">
                                <div  v-if="survey.status == '진행중'">
                                    <span class="mr-4">남은보상<b>{{survey.targetAmount-survey.currentAmount}}</b></span>
                                </div>
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
