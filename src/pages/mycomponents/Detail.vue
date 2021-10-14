<template>
    <card>
              <div class="">
                <template>
{{$route.params.surveyId}}---
<!-- {{takeSurveyIndex}} -->
                </template>
            <div v-for="(survey) in surveyIndexBySurveyId($route.params.surveyId)" :key="survey">
                {{survey.title}}-=-=-=-=

                <div id="inputs">
                    <div class="row card-form ">
                            <div class="col-sm-6 col-lg-12">
                              <span class="badge badge-primary mr-1">{{survey.category}}</span>
                              <span class="badge badge-success mr-1">{{survey.status}}</span>
                                <span class="badge badge-warning">120</span>
                                <span><b> {{survey.title}}</b></span> 
                            </div>
                            <!-- 프사 -->
                            <!-- <div class="col-sm-1 col-lg-1">
                                <img
                                v-lazy="'img/julie.jpg'"
                                alt="Circle Image"
                                class="rounded-circle"
                                />
                            </div> -->
                            <div class="col-sm-1 col-lg-5">
                                <span><b class="mr-3">{{survey.userId}}</b> </span>
                                <span class="surv-disc">{{survey.regDate}}</span>

                            </div>
                            <div class="col-sm-6 col-lg-10">
                                <span class="mr-3 surv-disc">참여한 인원 {{survey.particAmount}}</span> 
                                <span class="mr-3 surv-disc">마감까지 5일 4시간 27분</span>
                                <span class="mr-3 surv-disc">남은보상 <b>{{remainAmount}}</b></span>
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-2">
                                <span class="ml-4 now-ui-icons ui-2_chat-round"> {{survey.commentCount}} </span> 
                                <span class="ml-4 now-ui-icons ui-2_favourite-28"> {{survey.likeCount}} </span> 
                            </div>
                            <div class="col-sm-6 col-lg-12">
                                <hr style="background:rgb(200,200,200); "> 
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-12 mt-1">
                                <h6>{{survey.subtitle}}</h6>
                            </div>

                            <!-- <div class="col-sm-6 col-lg-12">
                                <hr style="padding-top:30px"> 
                            </div> -->
  <!-- 질문 -->
                            <div class="container one-block">
<!-- {{$store.state.surveyQuestionData}} -->
                                <div v-for="(quest, index) in $store.state.surveyQuestionData" :key="quest"
                                >
                                  <template v-if="$store.state.surveyAllData[$route.params.surveyId-1].surveyId == quest.surveyId">
                                    
                                    <span class="badge badge-default mt-5">질문{{index+1}}</span>
                                    <span class=" mr-1">{{quest.content}}</span>
                                    <!-- <v-list-tile v-for="(choice) in $store.state.surveyAllData"
                                                  :key="choice"
                                                  > -->
 <small>{{quest}}</small> 
                                        
                                        <n-radio v-for="(answer, index) in answersByQuestIdx(quest.id)" 
                                                :key="index" :value="answer.id"  
                                                v-show="quest.id == answer.questionId"
                                                v-model= quest.answer
                                                :label = answer.id>
                                          <small>  <label :for="`q${index}${answer.id}`">{{ answer.id }} </label> </small> 
                                            {{index}}-{{answer.content}}
                                        </n-radio>>
                                    <!-- </v-list-tile> -->
                                  </template>
                                </div>

                                <!-- <div style="padding-top:30px">
                                    <span class="badge badge-default">질문2</span>
                                    <span class=" mr-1">이것에 대해 어떻게 생각하십니까?</span>
                                        <n-radio v-model="radios.radioOff" label="1">이렇고 그렇게 생각한다</n-radio>
                                        <n-radio v-model="radios.radioOff" label="2">이것은 아니라고 생각한다</n-radio>
                                        <n-radio v-model="radios.radioOff" label="3">그럴수도 있다고 생각한다</n-radio>
                                        <n-radio v-model="radios.radioOff" label="4">저럴수도 있다고 생각한다</n-radio>
                                </div> -->
                              
                            </div>

 <!-- 태그 -->
                            <div class="container one-block">
                                <div class="">
                                    <span class="badge badge-neutral mr-1">#태그</span>
                                    <span class="badge badge-neutral mr-1">#서베이</span>
                                    <span class="badge badge-neutral mr-1">#tag</span>
                                    <span class="badge badge-neutral mr-1">#sample</span>
                                </div>
                            </div>

                            <div class="container one-block">
                                <div class="">
                                    <span class="mr-4 now-ui-icons ui-2_chat-round"> {{survey.commentCount}}</span> 
                                    <span class="mr-4 now-ui-icons ui-2_favourite-28"> {{survey.likeCount}}</span> 
                                    <a href=""><span class="mr-4 now-ui-icons arrows-1_share-66"></span></a> 
                                    <a href="" class="btn btn-primary btn-round btn-lg"> 서베이 참여 </a>
                                </div>
                            </div>
                            
                        
                    </div>
                </div>
            </div>

                
              </div>
          </card>
</template>
<script>
import { Card, Tabs, TabPane } from '@/components';
// import { Button, Modal, FormGroupInput } from '@/components';
import { Popover, Tooltip, DatePicker } from 'element-ui';
// import CommentBox from './mycomponents/CommentBox.vue';


import {
  Button,
  Checkbox,
  Radio,
  FormGroupInput,
  Slider,
  Switch,
  
} from '@/components';

export default {
  components: {
    Card,
    [Radio.name]: Radio,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      // surveyIndex: surveyIndexBySurveyId,
      radios: {
        radioOn: '0',
        radioOff: '0'
      },
      switches: {
        defaultOn: true,
        defaultOff: false
      },
    };
  },
  methods:{
    answersByQuestIdx(idx){
      let answers = this.$store.getters.getsurveyAnswerDataByQusetId(idx)
      return answers
    },
    surveyIndexBySurveyId(routeId){
      // console.log("hi")
      // let routeId = $route.params.surveyId;
      let surveyIndex = this.$store.getters.getsurveyIndexBySurveyId(routeId)
      return surveyIndex
    },
    

  },
  computed:{
    remainAmount(){
      return this.$store.state.surveyAllData[0].targetAmount - this.$store.state.surveyAllData[0].particAmount;
    },
    // surveyIndex(){
    //   return surveyIndexBySurveyId;
    // }
    // takeSurveyIndex(){
    //   let num = 0;
    //   for(let i = 0; i < this.$store.state.surveyAllData.length; i++){
    //     if(this.$store.state.surveyAllData[i].surveyId == $route.params.surveyId)
    //       num = i;
    //   }
    //   return num;
    // }
  },
  beforeCreate(){
    // for(let i = 0; i < this.$store.state.surveyAllData.length; i++){
    //   if(this.$store.state.surveyAllData[i].surveyId == $route.params.surveyId)
    //     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    //     // surveyIndex = i;
    // }
    // $route.params.surveyId
    // console.log($route.params.surveyId + " ---------- ");
    // this.$store.dispatch('allQuestion');
    // this.$store.dispatch('allAnswer');
  }
};
</script>
<style lang="scss">
.one-block{
    margin-top:30px
}

.commnet-box{
  border: 2px solid rgb(221, 221, 221)!important;
  border-radius:16px;
  // margin: 20px;
  // padding-right: 13px;
}
.commnet-button{

}
</style>
