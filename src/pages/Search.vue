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
          <h1 class="title" style="margin-top:80px">Search </h1>
          <card class="rounded-pill" style="height: 88px; width:800px; margin-top:20px">
                <div class="row" style="margin:-10px; margin-left:-30px; margin-right:-30px;">
                    <fg-input
                        class="input-lg col-md-9"
                        style="margin-top: 10px; padding-left:40px;"
                        placeholder="검색어를 입력해주세요"
                        v-model="keyword"
                        addon-left-icon="now-ui-icons ui-1_zoom-bold"
                        >
                    </fg-input>
                    <a class="col-md-3 p-0"  @click="search">
                      <router-link :to="{name: 'searchByKeyword', params: { keyword: this.keyword } }">
                        <button class="btn btn-primary btn-round btn-lg">검색</button>
                      </router-link>
                    </a>
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
                <div class="">
        <div class="container" >
          <card>
            <div>
               "<b>{{this.$route.params.keyword}}</b>"에 대한 결과입니다
            </div>

          </card>
                
<div v-if="this.$route.params.keyword">
      <v-list-tile
            v-for="(survey) in resultSurvey"
            :key="survey"
            >
                  <template>
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
                          <!-- <span class="badge mr-1" style="color:#5a48d0;"><b>{{survey.blockNo}}</b></span> -->

                                    <span class="badge badge-primary mr-1">{{survey.category}}</span>
                                    <span class="badge  mr-1"
                                          v-bind:class="{ 'badge-success' : survey.status == '진행중' , 'badge-default' : survey.status == '마감'}"
                                      >{{survey.status}}</span>
                                    <!-- <span class="badge badge-success mr-1">{{survey.status}}</span> -->
                                      <span  v-if="survey.status == '진행중'" class="badge badge-warning">{{survey.paymAmount*0.98*0.4/survey.targetAmount}}</span>
                                      <span><b class="black-text"> {{survey.title}}</b></span> 
                                      <span class="badge pull-right" style="color:#5a48d0;">
                                        <small>
                                          <b>{{survey.txHash}}</b>
                                        </small>
                                      </span>
                                  </div>
                                  <!-- <div class="col-sm-6 col-lg mt-1">
                                      <b> <h6>서베이 타이틀입니다</h6></b>
                                  </div> -->
                                  <div class="surv-disc col-sm-6 col-lg-12 mt-1">
                                      <h6> {{survey.subtitle}}</h6>
                                      <!-- style="border: solid 1px rgb(200,200,200);" -->
                                      
                                  <hr>
                                  </div>
                                  <div class="col-sm-6 col-lg-8 black-text">
          <!-- 탸그 -->
                                    <span v-for="tag in resultTag" :key="tag" class="badge badge-neutral mr-1">
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
      </v-list-tile>
</div>
<div v-else>
      <v-list-tile
  v-for="(survey) in $store.state.surveyAllData"
  :key="survey"
  >
        <template>
            <router-link :to="{name: 'survey_detail', params:{surveyId: survey.surveyId}}">
          <div  class="card p-3"
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
                          <!-- <span class="badge mr-1" style="color:#5a48d0;"><b>{{survey.blockNo}}</b></span> -->
                          <span class="badge badge-primary mr-1">{{survey.category}}</span>

                          <span class="badge  mr-1"
                                v-bind:class="{ 'badge-success' : survey.status == '진행중' , 'badge-default' : survey.status == '마감'}"
                            >{{survey.status}}</span>
                          <!-- <span class="badge badge-success mr-1">{{survey.status}}</span> -->
                          <span  v-if="survey.status == '진행중'" class="badge badge-warning">{{survey.paymAmount*0.98*0.4/survey.targetAmount}}</span>
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



      </v-list-tile>
</div>


           

        </div>
    </div>
            </div>
        </div>
    </div>
    
    
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';

export default {
  // name: 'search',
  // bodyClass: 'search-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Card,

  },
  data() {
    return {
        keyword: '',
        resultSurvey:[

        ],
        resultTag:[

        ],
        selectedBox: '',
    };
  },
  methods:{
    search(){
      // console.log(this.$route.params.keyword);
      fetch('/api/search?keyword=' + this.$route.params.keyword).then(response => response.json()).then(
          data =>{
            // console.log(data);
              this.resultSurvey = [];
              this.resultTag = [];

            for(let i = 0; i < data.length; i++){
              this.resultSurvey.push({
                    surveyId: data[i].no,
                    userId: data[i].memberId,
                    
                    category: null,
                    title: data[i].title,
                    subtitle: data[i].content,
                    targetAmount: data[i].goalParticipants,
                    currentAmount: data[i].currentParticipants,
                    regDate: data[i].regDate.slice(0,10),
                    closingDate: data[i].deadline,
                    paymAmount: data[i].paid,
                    commentCount: data[i].comments,
                    likeCount: data[i].likes,
                    status: data[i].status,
                    blockNo: data[i].blockNo,
                    txHash: data[i].txHash,
              });
              if(data[i].category == '5')
                    this.resultSurvey[i].category = '부동산';
                else if(data[i].category == '6')
                    this.resultSurvey[i].category = '유통';
                else if(data[i].category == '7')
                    this.resultSurvey[i].category = '식음료';
                else if(data[i].category == '8')
                    this.resultSurvey[i].category = '관광';
                else if(data[i].category == '9')
                    this.resultSurvey[i].category = '금융';
                else if(data[i].category == '10')
                    this.resultSurvey[i].category = '정보통신';
                else if(data[i].category == '11')
                    this.resultSurvey[i].category = '보건의료';
                else if(data[i].category == '12')
                    this.resultSurvey[i].category = '공공정책';
                else if(data[i].category == '13')
                    this.resultSurvey[i].category = '커뮤니티';
                
                if(data[i].status == '0')
                    this.resultSurvey[i].status = '진행중';
                else if(data[i].status == '1')
                    this.resultSurvey[i].status = '마감';

                fetch('/api/tag/' + data[i].no).then(response => response.json()).then(
                  data =>{
                    // console.log(data[i]);

                    for(let i = 0; i < data.length; i++){
                      this.resultTag.push({
                        id: data[i].no,
                        surveyId: data[i].surveyId,
                        content: data[i].content,
                      });
                    }
                  }
                );
            }
          }
        );
      // this.$store.commit('SearchSurvey');
    },
    selectingBox(val){
      this.selectedBox = val;
    }

  },
  computed:{
    
  },
    // beforeCreate(){
    //   // console.log('eeeeeeeeebeforecreate')
    //     this.$store.dispatch('allSurvey');
    // },
  created(){
    //   this.$http.get('/api/survey' + ).then
    // this.$store.state.SurveyAllData
  },
  beforeMount() {
  },
};
</script>
<style></style>
