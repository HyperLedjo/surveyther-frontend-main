<template>
<div>
    <card>
              <div class="p-4">
                
            <div >
                <div id="inputs">
                    <div class="row card-form ">
                            <div class="col-sm-6 col-lg-12 align-bottom">
                              <span class="badge badge-primary mr-1">{{survey.category}}</span>
                              <span class="badge  mr-1"
                                    v-bind:class="{ 'badge-success' : survey.status == '진행중' , 'badge-default' : survey.status == '마감'}"
                                >{{survey.status}}</span>
                                <template v-if="survey.category != '커뮤니티' && survey.status == '진행중'">
                                    <span class="badge badge-warning">{{survey.paymAmount*0.98*0.4/survey.targetAmount}}</span>
                                </template>
                                <h4 class="mt-2"><b> {{survey.title}}</b></h4>  
                            </div>
                            <div class="col-sm-1 col-lg-5">
                                
                                <!-- <small>0xaf9e247e413e86ec0b9dd1037ce8b6861fec93e9446e5c7c19710903d8ceca30 </small> -->

                            </div>
                            <div class="col-sm-6 col-lg-10">
                              <span><b class="mr-3">{{survey.userId}}</b> </span>
                                <span class="mr-3 surv-disc">참여한 인원 {{survey.currentAmount}}</span> 
                                <span class="mr-3 surv-disc">등록일 {{survey.regDate}}</span>
                                <template v-if="survey.category != '커뮤니티'">
                                    <span class="mr-3 surv-disc">마감일 {{survey.closingDate}}</span>
                                </template>
                                <template v-if=" survey.status == '진행중'">
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
                                <h6><b>{{survey.subtitle}}</b> </h6>
                            </div>

  <!-- 질문 -->
                            <div class="container one-block">
                                <div v-for="(quest, index) in this.questions" :key="quest"
                                >
                                    
                                    <span class="badge badge-default mt-5">질문{{index+1}}</span>
                                    <span class="align-middle ml-2"><b>{{quest.content}}</b> </span>
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
                                          <div class="row " v-if="isMySurvey">

                            <div v-if="loaded" class="small">
                                <div  v-for="(data,index) in chartData" :key="index">
                                    <chart
                                           v-show="data.questId == quest.id"
                                          :chartdata="data" :width="400" :height="200"
                                          />
                                </div>        
                            </div>

          <table id="" class="align-bottom p-10 mytable" style="width:30%">
            <thead>
              <tr class="mytr myp-10" style="background:gray">
                <th class="myp-10 myth">답변</th>
                <th class="myp-10 myth">응답수</th>
                <th class="myp-10 myth">백분율</th>
              </tr>
            </thead>
            <tbody >
              <tr v-for="answer in answers" :key="answer" 
              v-show="quest.id == answer.questionId"
              class="mytr myp-10"
              >
                <td  class="myp-10" style="width:60%">{{answer.content}}</td>
                <td  class="myp-10">{{answer.result}}</td>
                <td  class="myp-10">{{answer.percentage}}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <n-radio n-radio v-for="(answer, index) in answers" 
                  :key="index" :value="answer.id"  
                  v-model= quest.answer
                  v-show="quest.id == answer.questionId"
                  :label = answer.id 
                  disabled>
            <small>  <label :for="`q${index}${answer.id}`"> </label> </small> 
              {{answer.content}}
          </n-radio>
        </div>
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
                                    <!-- <a href=""></a> -->
                                    
                                    <template v-if="!isMySurvey">
                                        <button type="button" class="btn btn-primary btn-round btn-lg pull-right" @click="checkUser">
                                          <template v-if="survey.category == '커뮤니티'">
                                            참여하고 결과보기  
                                          </template>
                                          <template v-else-if="survey.status == '진행중'">
                                              서베이 참여  
                                          </template>
                                          <template v-else-if="survey.status == '마감'">
                                              서베이 구매  
                                          </template>
                                        </button>
                                    </template>

                                    <template v-if="survey.category != '커뮤니티'">



                                    <n-button v-popover:popover2 type="default" class="btn btn-primary btn-simple btn-round pull-right btn-lg mx-2">
                                            <span class=" now-ui-icons design_app"></span> 체인정보
                                      </n-button>
                                      <el-popover
                                                  ref="popover2"
                                                  popper-class="popover popover-primary"
                                                  placement="top"
                                                  width="600"
                                                  trigger="click"
                                                >
                                                  <h3 class="popover-header">Block: {{survey.blockNo}}</h3>
                                                  <div class="popover-body">
                                                      {{survey.txHash}}                                                  
                                                  </div>
                                      </el-popover>

                                    </template>
                                    <button type="button" 
                                      class="btn btn-danger btn-round pull-right btn-lg mx-2" 
                                      v-bind:class="{ '' : islike == true , 'btn-simple' : islike == false}"
                                      @click="like"
                                      >
                                        <span class=" now-ui-icons ui-2_favourite-28"></span> 좋아요
                                    </button>
                                    <button type="button" value="Custom"
                                      class="btn btn-warning btn-simple btn-round  pull-right btn-lg mx-2" 
                                      @click="kakaoShare">
                                        <span class=" now-ui-icons arrows-1_share-66"></span> 공유하기
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
          비어있는 답변이 있습니다.
        </h6>
      <template slot="">
        <n-button  class="btn btn-round btn-block btn-neutral btn mt-4 mb-0" 
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
          보상 {{survey.paymAmount*0.98*0.4/survey.targetAmount}} SVTH 을 받았습니다!
        </h6>
      <template slot="">
        <n-button  class="btn btn-round btn-block btn-neutral btn mt-4 mb-0" 
          type="button"
          @click="ParticipateSucceed = false" >
          확인
        </n-button>
      </template>
    </modal>

    <modal :show.sync="ParticipateFailed" headerClasses="justify-content-center pt-0" class="modal-primary" type="mini" >
      <h5 slot="header" class="title title-up pb-0">알림</h5>
        <h6 class="text-center">
          중복참여는 불가합니다.
        </h6>
      <template slot="">
        <n-button  class="btn btn-round btn-block btn-neutral btn  mt-4 mb-0" 
          type="button"
          @click="ParticipateFailed = false" >
          확인
        </n-button>
      </template>
    </modal>

</div>
</template>
<script>
import { Card, Tabs, TabPane, Modal, Button} from '@/components';
import { Popover} from 'element-ui';
// import ChartContainer from './ChartContainer.vue';
import Chart from './Chart.vue'

import {
  // Button,
  // Checkbox,
  Radio,
  FormGroupInput,
  // Slider,
  // Switch,
  
} from '@/components';

export default {
  components: {
    Card,
    [Radio.name]: Radio,
    [FormGroupInput.name]: FormGroupInput,
    Modal,
    Chart,
    [Button.name]: Button,
    [Popover.name]: Popover,
  },
  data() {
    return {
      surveyResultData: null,
      EmptyAnswerAlert: false,
      ParticipateSucceed: false,
      ParticipateFailed: false,
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
            status: null,
            txHash: null,
            blockNo: null,
      },
      questions:[

      ],
      answers:[

      ],
      tags:[

      ],
      islike: false,
      likes: 0,
      //내가 보유한 서베이인지 여부
      isMySurvey: false,
      chartDataLoaded: false,
      //차트 데이터
      chartData:[],
      loaded: false,//차트데이터 로드
    };
  },
  methods:{
    makeitTrue(){
        this.loaded = true;
    },
    updateSurveyInfo() {
      fetch('/api/survey/' + this.$route.params.surveyId).then(response => response.json()).then(
          data => {
                    this.survey.surveyId = data.no;
                    this.survey.userId = data.author;
                    if(data.category == '5')
                        this.survey.category = '부동산';
                    else if(data.category == '6')
                        this.survey.category = '유통';
                    else if(data.category == '7')
                        this.survey.category = '식음료';
                    else if(data.category == '8')
                        this.survey.category = '관광';
                    else if(data.category == '9')
                        this.survey.category = '금융';
                    else if(data.category == '10')
                        this.survey.category = '정보통신';
                    else if(data.category == '11')
                        this.survey.category = '보건의료';
                    else if(data.category == '12')
                        this.survey.category = '공공정책';
                    else if(data.category == '13')
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
                    this.survey.txHash = data.txHash;
                    this.survey.blockNo = data.blockNo;
          }
        );
        
    },
    async updateQuestions(){
      await fetch('/api/question/' + this.$route.params.surveyId).then(response => response.json()).then(
          data => {
            for(let i = 0; i < data.length; i++){
              this.questions.push({
                    id: data[i].no,
                    surveyId: data[i].surveyId,
                    content: data[i].content,
                    // answer: null
              });
              fetch('/api/answers/' + data[i].no).then(response => response.json()).then(
                data =>{
                  for(let i = 0; i < data.length; i++){
                      // console.log(data[i]);
                      this.answers.push({
                            id: data[i].no,
                            questionId: data[i].questionId,
                            content: data[i].content,
                            result: null,
                            percentage: null,
                      });
                  }
                }
              ).then(
                fetch('/api/participants/survey/' + this.$route.params.surveyId)
                .then(response=>response.json())
                .then( data =>{
                  for(let i = 0; i < data.length; i++){
                    // for(let j = 0; j < data.length; j++){
                      // if(this.answers[i].id == data[i].no)
                        this.answers[i].result = data[i].result;
                    // }
                  }
                })
              )
            }
                    // console.log("--------chartchart");
      // this.chartDataLoaded = true;
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
         if(this.questions[i].answer == null) {
          //  window.alert(i+1 + "번째 답변을 꼭 선택해 주세요!");
           this.EmptyAnswerAlert = true;
           return;
         }
        //  console.log(1); // 위에서 answer가 null이면 콘솔에 1이 출력되지 않아야 합니다.
         result.push({
           memberId: this.$store.state.userInfo.no,
           surveyId: this.survey.surveyId,
           questionId: this.questions[i].id,
           answerId: this.questions[i].answer
          //  content:this.questions
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
        else if(0 == data){
          this.ParticipateFailed = true;
        }
        // else{
        //   console.log(data + "--------?????");
        // }
      })
      .catch(error=>console.log(error));
    },
    //마감서베이 구매하기
    async buySurvey(){
      let isPaid = false;
      let _paymentId = 0;
      let _surveyId = this.survey.surveyId;
      let _paymAmount = this.survey.paymAmount;
      var IMP = window.IMP;
      IMP.init('imp43832818');
      IMP.request_pay({
                pg: 'kakaopay',
                pay_method: 'card',
                merchant_uid: 'merchant_' + new Date().getTime(),
                name: this.survey.title,
                amount: this.survey.paymAmount,
                // buyer_email: 'alskim93@kakao.com',
                // buyer_name: 'test',
                // buyer_tel: '010-9028-5863',
                // buyer_addr: "서울특별시 성북구 정릉동",
                // buyer_postcode: "123-456"
            }, async function(resp) {
              console.log(resp);
              if(resp.success) {
                await fetch('/api/payments/' + resp.imp_uid, {
                  method: "POST"
                })
                .then(response => response.json())
                .then(async data => {
                  if(data.response.amount === resp.paid_amount) {
                    let request = {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(
                        {
                          memberId: state.userInfo.no,
                          paymentType: data.response.payMethod,
                          paidAmount: data.response.amount
                        }
                      )
                    }
                    await fetch('/api/payments', request)
                    .then(response => response.json())
                    .then(data => {
                      if(0 !== data) {
                        _paymentId = data;
                        isPaid = true;
                      }
                    });

                    if(isPaid) {
                      // storing survey order entity
                      /*
                      * Need columns
                      * memberId
                      * surveyId
                      * paymentId
                      * price
                      * paid
                      * date
                      */
                     const survey_order = {
                       memberId: this.$store.state.userInfo.no,
                       surveyId: _surveyId,
                       paymentId: _paymentId,
                       price: _paymAmount,
                       paid: resp.paid_amount
                     };
                     const request = {
                       method: "POST",
                       headers: {
                         "Content-Type": "application/json",
                       },
                       body: JSON.stringify(survey_order)
                     };
                     await fetch("/api/order/survey", request)
                     .then(response => response.json())
                     .then(data => {
                       console.log("Survey Ordering Result: \n", data);
                     })
                     .catch(err => {
                       console.log("ERROR: \n", err);
                     });
                    }
                  }
                })
              }
            });
    },
    //좋아요 & 좋아요취소
    like(){
      if(!this.islike){
        // let likeInfo = {
        //   surveyId: this.$route.params.surveyId,
        //   memberId: this.$store.state.userInfo.no
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
        //   memberId: this.$store.state.userInfo.no
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
    //좋아요 갯수
    likeCount(){
        // fetch('/api/likes/count/' + this.$route.params.surveyId).then(response => response.json()).then(
        //   data =>{
        //     // console.log(data);
        //   }
        // );
    },
    //내가 좋아요를 눌렀는지
    checkIfLike(){
    //   let likeInfo = {
    //       surveyId: this.$route.params.surveyId,
    //       memberId: this.$store.state.userInfo.no
    //     }
    //     let request = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(likeInfo)
    //     };
    //     // console.log(JSON.stringify(likeInfo)+"========");
    //     fetch("/api/likes/me", request)
    //     .then(response=>response.json()).then(
    //       data =>{
    //         console.log(data);
    //         if(data.liked == false){
    //           console.log("안쥬ㅜ아");
    //           this.islike = false;
    //         }else if(data.liked == true){
    //           console.log("쥬아");
    //           this.islike = true;

    //         }
    //       })
    //     .catch(error=>console.log(error));


      
    },
    async fillChartData(){
      let mQuestId = []; // 중복 제거해서 단일로 남기기
      let mAnswerId = [];
      let mLabels = []; // 불러온 데이터들의 답변 아이디들(라벨로 사용)
      let mDatas = [];  // 불러온 데이터들의 결과 값
      let mData;

      await fetch('/api/participants/survey/' + this.$route.params.surveyId)
      .then(response=>response.json())
      .then(data=>{
        mData = data;
        data.forEach(element => {
          mQuestId.push(element["questionId"]);
          // mAnswerId.push(element["answerId"]);
          // mDatas.push(element["result"]);
        });
      });  
      // Question ID 중복 제거
      const set = new Set(mQuestId);
      const uniqQuestId = [...set];      

      // mAnswer ID에 저장된 ID에 해당하는 Content를
      // mLabels에 저장
      for(var i=0; i < mAnswerId.length; i++) {
        fetch(`/api/answer/${mAnswerId[i]}`, {
          headers: {
            'Accept': 'application/json',
          }
        })
        .then(response=>response.json())
        .then(data=>mLabels.push(data.content));
      }
      for(var i=0; i < uniqQuestId.length; i++) {
        for(var j=0; j < mData.length; j++) {
          if(uniqQuestId[i] === mData[j].questionId) {
            mDatas.push(mData[j].result);
            await fetch(`/api/answer/${mData[j].answerId}`, {
              headers: {
                'Accept': 'application/json',
              }
            }).then(response=>response.json())
            .then(data=>mLabels.push(data.content));
          }
        }
        await this.chartData.push({
          labels: mLabels,
          datasets: [
            {
              label: '인원수',
              backgroundColor: "#53ecec",
              data: mDatas
            }
          ],
          questId: uniqQuestId[i]
        });
        mDatas = [];
        mLabels = [];
      }
    },
    percentageCal(){
      //
      let questSum = 0; //한질문 합계 --각문제가 필수참여라 한문제 총인원이 총참여인원임

      for(let i=0; i< this.answers.length; i++){
        if(this.answers[i].questionId === this.questions[0].id){
          questSum = questSum + this.answers[i].result;
        }
      }

      for(let i=0; i< this.answers.length; i++){
        // console.log(i + "이건 안나이ㅓㄹ미러ㅣㄴ아러민아러미;ㄴ얾옴");
        this.answers[i].percentage = this.answers[i].result / questSum *100;
      }
    },
    async checkIfMySurvey(){
      await fetch('/api/survey/my/' + this.$route.params.surveyId)
                .then(response=>response.json())
                .then(data =>{
                  if(data == this.$store.state.userInfo.no){
                      this.isMySurvey = true;
                    console.log("이거내꺼내꺼");
                  }else{
                      this.isMySurvey = false;
                      console.log("이거안내꺼");
                  }
                  // for(let i=0; i<data.length; i++){
                  //   if(data[i].memberId == this.$store.state.userInfo.no){
                  //     this.isMySurvey = true;
                  //     console.log("이거내꺼내꺼");
                  //     break;
                  //   }else{
                  //     console.log("이거안내꺼");
                  //     this.isMySurvey = false;
                  //   }
                  // }
                })
    },
    kakaoShare(){
      // Kakao.init('76b1a1af5fbcdb013e33863339e81def');
      Kakao.Link.sendCustom(
        {
          templateId: 64384,
          templateArgs: {
            title:
              this.survey.title,
            description:
              this.survey.subtitle,
          },
        }
      );
      //   Kakao.Link.sendDefault({
      //   // templateId:'64384',
      //   objectType: 'feed',
      //   content: {
      //     title: this.survey.title,
      //     description: this.survey.subtitle,
      //     // description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
      //     imageUrl:
      //       'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      //     link: {
      //       mobileWebUrl: 'http://localhost:8081/',
      //       webUrl: 'http://localhost:8081/',
      //     },
      //   },
      //   social: {
      //     likeCount: 286,
      //     commentCount: 45,
      //     sharedCount: 845,
      //   },
      //   // buttons: [
      //   //   {
      //   //     title: '웹으로 보기',
      //   //     link: {
      //   //       mobileWebUrl: 'https://developers.kakao.com',
      //   //       webUrl: 'https://developers.kakao.com',
      //   //     },
      //   //   },
      //   //   {
      //   //     title: '앱으로 보기',
      //   //     link: {
      //   //       mobileWebUrl: 'https://developers.kakao.com',
      //   //       webUrl: 'https://developers.kakao.com',
      //   //     },
      //   //   },
      //   // ],
      // });
      Kakao.Link.cleanup();
    },
    async checkifBoughtSurvey(){
        let purchaseInfo = {
          surveyId: this.$route.params.surveyId,
          memberId: this.$store.state.userInfo.no
        }

        let request = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(purchaseInfo)
        };
        await fetch("/api/order/survey/check", request)
        .then(response=>response.json())
        .then(
          data =>{
            if(data){
                this.isMySurvey = true;
                console.log("이거는 이제 내꺼내꺼");
            }
          })
        .catch(error=>console.log(error));
    }
      
    

  },
  async mounted () {
      await this.fillChartData();
      await this.makeitTrue();
    this.percentageCal();

  },
  watch: {
    chartData () {
      this.$data._chart.update();
    }
  },
  computed: {
    remainAmount(){
      return this.survey.targetAmount - this.survey.currentAmount;
    },
  },
  beforeCreate(){
    
  },
  created(){
    this.checkIfMySurvey();
    this.checkifBoughtSurvey();
    this.updateSurveyInfo();
    this.updateQuestions();
    // this.resultDataLoad();
    // this.fillChartData();
    this.updateTags();
    this.checkIfLike();
  },
  beforeUpdate () {
      //this.updateSurveyInfo();
    },
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
.myp-10{
  padding: 10px;
  text-align: left;
}
.mytr:nth-child(even) {background-color: #f2f2f2;}
.myth {
  background-color: #595959;// darkcyan;
  color: white;
}
.mytable{
  width: 45%; 
  height: 1%; 
  border-collapse: collapse; 
  border: 2px solid #e4e4e4;
    margin:  20px auto;

}

</style>
