<template>
<div>

    <card>
              <div class="">
                <template>
<!-- {{$route.params.surveyId}}---{{survey.title}} -->
                </template>
            <div >
                <!-- {{survey.title}} -->

                <div id="inputs">
                    <div class="row card-form ">
                            <div class="col-sm-6 col-lg-12">
                              <span class="badge badge-primary mr-1">{{survey.category}}</span>
                              <span class="badge  mr-1"
                                    v-bind:class="{ 'badge-success' : survey.status == '진행중' , 'badge-default' : survey.status == '마감'}"
                                >{{survey.status}}</span>
                                <template v-if="survey.category != '커뮤니티' && survey.status == '진행중'">
                                    <span class="badge badge-warning">{{survey.paymAmount*0.98*0.4/survey.targetAmount}}</span>
                                </template>
                                <span><b> {{survey.title}}</b></span> 
                            </div>
                            <div class="col-sm-1 col-lg-5">
                                <span><b class="mr-3">{{survey.userId}}</b> </span>
                                <span class="surv-disc">{{survey.regDate}}</span>

                            </div>
                            <div class="col-sm-6 col-lg-10">
                                <span class="mr-3 surv-disc">참여한 인원 {{survey.currentAmount}}</span> 
                                <template v-if="survey.category != '커뮤니티' && survey.status == '진행중'">
                                    <span class="mr-3 surv-disc">마감까지 5일 4시간 27분</span>
                                    <span class="mr-3 surv-disc">남은보상 <b>{{remainAmount}}</b></span>
                                </template>
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

  <!-- 질문 -->
                            <div class="container one-block">
                                <div v-for="(quest, index) in this.questions" :key="quest"
                                >
                                    
                                    <span class="badge badge-default mt-5">질문{{index+1}}</span>
                                    <span class=" mr-1">{{quest.content}}</span>
 <!-- <small>{{quest}}</small>  -->
                                        <template v-if="survey.status == '진행중'">
                                            <n-radio v-for="(answer, index) in answers" 
                                                    :key="index" :value="answer.id"  
                                                    v-model= quest.answer
                                                    v-show="quest.id == answer.questionId"
                                                    :label = answer.id>
                                              <small>  <label :for="`q${index}${answer.id}`"> </label> </small> 
                                                {{answer.content}}
                                            </n-radio>
                                        </template>
                                        <template v-else-if="survey.status == '마감'">
                                            <n-radio n-radio v-for="(answer, index) in answers" 
                                                    :key="index" :value="answer.id"  
                                                    v-model= quest.answer
                                                    v-show="quest.id == answer.questionId"
                                                    :label = answer.id 
                                                    disabled>
                                              <small>  <label :for="`q${index}${answer.id}`"> </label> </small> 
                                                {{answer.content}}
                                            </n-radio>
                                        </template>
                                </div>

                              
                            </div>

 <!-- 태그 -->
                            <div class="container one-block">
                                <div class="" >
                                    <span v-for="tag in tags" :key="tag" class="badge badge-neutral mr-1">#{{tag.content}}</span>
                                </div>
                            </div>

                            <div class="container one-block">
                                <div class="">
                                    <span class="mr-4 now-ui-icons ui-2_chat-round"> {{survey.commentCount}}</span> 
  <!-- 여기여기 -->
                                    <span class="mr-4 now-ui-icons ui-2_favourite-28"> {{likes}}</span> 
                                    <a href=""><span class="mr-4 now-ui-icons arrows-1_share-66"></span></a> 
                                    <!-- <a href=""></a> -->
                                    
                                    <button type="button" class="btn btn-primary btn-round btn-lg pull-right" @click="checkUser">
                                      <template v-if="survey.category == '커뮤니티'">
                                        참여하고 결과보기  
                                      </template>
                                      <template v-else-if="survey.status == '진행중'">
                                          서베이 참여  
                                      </template>
                                      <template v-else-if="survey.status == '마감'">
                                            ??? SVTH  
                                      </template>
                                    </button>

                                    <button type="button" 
                                    class="btn btn-danger btn-round btn-icon pull-right mt-3 mx-3" 
                                    v-bind:class="{ '' : islike == true , 'btn-simple' : islike == false}"
                                    @click="like"
                                    >
                                      <span class="mt-2 now-ui-icons ui-2_favourite-28"></span> 
                                    </button>
                                </div>
                            </div>
                            
                        
                    </div>
                </div>
            </div>

                
              </div>
          </card>

    <modal :show.sync="EmptyAnswerAlert" headerClasses="justify-content-center pt-0" class="modal-primary" type="mini" >
      <h5 slot="header" class="title title-up pb-0">알림</h5>
        <h6 class="text-center">
          선택하지못한 답변이 있습니다!
        </h6>
      <template slot="footer">
        <n-button  class="btn btn-round btn-block btn-neutral btn" 
          type="button"
          @click="EmptyAnswerAlert = false" >
          확인
        </n-button>
      </template>
    </modal>

    <modal :show.sync="ParticipateSucceed" headerClasses="justify-content-center pt-0" class="modal-primary" type="mini" >
      <h5 slot="header" class="title title-up pb-0">알림</h5>
        <h6 class="text-center">
          성공적으로 참여하여
          보상 300 SVTH 을 받았습니다!
        </h6>
      <template slot="footer">
        <n-button  class="btn btn-round btn-block btn-neutral btn" 
          type="button"
          @click="ParticipateSucceed = false" >
          확인
        </n-button>
      </template>
    </modal>

</div>
</template>
<script>
import { Card, Tabs, TabPane, Modal, } from '@/components';
import { Popover, Tooltip, DatePicker } from 'element-ui';


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
    Modal,

  },
  data() {
    return {
      EmptyAnswerAlert: false,
      ParticipateSucceed: false,
      survey: {
            surveyId: '',
            userId: '',
            
            category: '',
            title: '',
            subtitle: null,
            targetAmount: null,
            currentAmount: null,
            regDate: null,
            closingDate: null,
            paymAmount: null,
            commentCount: null,
            likeCount: null,
            status: null
      },
      questions:[

      ],
      answers:[

      ],
      tags:[

      ],
      islike: false,
      likes: 0,
    };
  },
  methods:{
    // answersByQuestIdx(idx){
    //   let answers = this.$store.getters.getsurveyAnswerDataByQusetId(idx)
    //   return answers
    // },
    // surveyIndexBySurveyId(routeId){
    //   // console.log("hi")
    //   // let routeId = $route.params.surveyId;
    //   let surveyIndex = this.$store.getters.getsurveyIndexBySurveyId(routeId)
    //   return surveyIndex
    // },
    updateSurveyInfo() {
      fetch('/api/survey/' + this.$route.params.surveyId).then(response => response.json()).then(
          data => {
                    this.survey.surveyId= data.no;
                    this.survey.userId= data.memberId;
                    if(data.category == '1')
                        this.survey.category = '부동산';
                    else if(data.category == '2')
                        this.survey.category = '유통';
                    else if(data.category == '3')
                        this.survey.category = '식음료';
                    else if(data.category == '4')
                        this.survey.category = '관광';
                    else if(data.category == '5')
                        this.survey.category = '금융';
                    else if(data.category == '6')
                        this.survey.category = '정보통신';
                    else if(data.category == '7')
                        this.survey.category = '보건의료';
                    else if(data.category == '8')
                        this.survey.category = '공공정책';
                    else if(data.category == '9')
                        this.survey.category = '커뮤니티';
                    this.survey.title= data.title;
                    this.survey.subtitle= data.content;
                    this.survey.targetAmount= data.goalParticipants;
                    this.survey.currentAmount= data.currentParticipants;
                    this.survey.regDate= data.regDate.slice(0,10);
                    this.survey.closingDate= data.deadline;
                    this.survey.paymAmount= data.paid;
                    this.survey.commentCount= data.comments;
                    this.survey.likeCount= data.likes;
                    if(data.status == '0')
                        this.survey.status = '진행중';
                    else if(data.status == '1')
                        this.survey.status = '마감';
          }
        );
        
    },
    updateQuestions(){
      fetch('/api/question/' + this.$route.params.surveyId).then(response => response.json()).then(
          data => {
            for(let i = 0; i < data.length; i++){
              this.questions.push({
                    id: data[i].no,
                    surveyId: data[i].surveyId,
                    content: data[i].content,
                    answer: null
              });
              fetch('/api/answer/' + data[i].no).then(response => response.json()).then(
                data =>{
                  for(let i = 0; i < data.length; i++){
                      // console.log(data[i]);
                      this.answers.push({
                            id: data[i].no,
                            questionId: data[i].questionId,
                            content: data[i].content,
                      });
                    }
                }
              )
            }

          }
        );
    },
    updateTags(){
      fetch('/api/tag/' + this.$route.params.surveyId).then(response => response.json()).then(
        data =>{
          for(let i = 0; i < data.length; i++){
            this.tags.push({
              id: data[i].no,
              surveyId: data[i].surveyId,
              content: data[i].content,
            });
          }
        }
      );

    },
    //로그인상태인지 확인
    checkUser(){
      if(this.$store.state.isUser){
        if(this.survey.category == '커뮤니티') 
          this.participateSurveyAndGetResult();
        else if(this.survey.status == '진행중') 
          this.participateSurvey();
        else if(this.survey.status == '마감')
          this.buySurvey();
      }else{
        this.$store.state.loginAlert = true;
      }
    },
    //무료서베이 참여하고 결과바로보기
    participateSurveyAndGetResult(){
      console.log("participateSurveyAndGetResult");
    },
    //유료서베이 참여하고 보상받기
    async participateSurvey(){
      // console.log("survey ID: " + this.survey.surveyId);
      // console.log("user ID: " + 1);
       let result =[];
       for(let i = 0; i < this.questions.length; i++){
         if(this.questions[i].answer === null) {
          //  window.alert(i+1 + "번째 답변을 꼭 선택해 주세요!");
           this.EmptyAnswerAlert = true;
           return;
         }
        //  console.log(1); // 위에서 answer가 null이면 콘솔에 1이 출력되지 않아야 합니다.
         result.push({
           memberId: 1,
           surveyId: this.survey.surveyId,
           questionId: this.questions[i].id,
           answerId: this.questions[i].answer
         })
       }
      let request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result)
      }
      // console.log(request);
      // console.log("quests & answers: " + JSON.stringify(result));
      await fetch("/api/participants", request)
      .then(response=>response.json())
      .then(data=>{
        if(0 < data) {
          // window.alert("성공적으로 참여 되었습니다!");
          this.ParticipateSucceed = true;
        }
      })
      .catch(error=>console.log(error));
    },
    //마감서베이 구매하기
    buySurvey(){
      console.log("buySurvey");
    },
    //좋아요 & 좋아요취소
    like(){
      if(!this.islike){
        // let likeInfo = {
        //   surveyId: this.$route.params.surveyId,
        //   memberId: this.$store.state.userInfo.id
        // }
        // let request = {
        // method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(likeInfo)
        // };
        // console.log(JSON.stringify(likeInfo));
        // fetch("/api/like", request)
        // .then(response=>response.json())
        // .catch(error=>console.log(error));

        this.islike = true;
        this.likes = 1;
      }else{
        // let dislikeInfo = {
        //   surveyId: this.$route.params.surveyId,
        //   memberId: this.$store.state.userInfo.id
        // }
        // let request = {
        // method: "PUT",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(dislikeInfo)
        // };
        // console.log(JSON.stringify(dislikeInfo));
        // fetch("/api/dislike", request)
        // .then(response=>response.json())
        // .catch(error=>console.log(error));

        this.islike = false;
        this.likes = 0;

      }
    },
    //좋아요 갯수 505
    likeCount(){
        fetch('/api/likes/count/' + this.$route.params.surveyId).then(response => response.json()).then(
          data =>{
            // console.log(data);
          }
        );
    },
    checkIfLike(){
      let likeInfo = {
          surveyId: this.$route.params.surveyId,
          memberId: this.$store.state.userInfo.id
        }
        let request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(likeInfo)
        };
        // console.log(JSON.stringify(likeInfo)+"========");
        fetch("/api/likes/me", request)
        .then(response=>response.json()).then(
          data =>{
            console.log(data);
            if(data.liked == false){
              console.log("안쥬ㅜ아");
              this.islike = false;
            }else if(data.liked == true){
              console.log("쥬아");
              this.islike = true;

            }
          })
        .catch(error=>console.log(error));
    }
    

  },
  computed:{
    remainAmount(){
      return this.survey.targetAmount - this.survey.currentAmount;
    },
    likeWatcher:{
      // return this.survey.likeCount;
        get(){
             return this.survey.likeCount;
        },
        set(){
            // let time;

            // this.time = time;
       }
    }
    
   
  },
  beforeCreate(){
    
  },
  created(){
    this.updateSurveyInfo();
    this.updateQuestions();
    this.updateTags();

    this.checkIfLike();
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

</style>
