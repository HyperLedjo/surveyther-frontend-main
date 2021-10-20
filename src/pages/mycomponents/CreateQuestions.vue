<template>
    <div class="">
        <div class="container" style="padding-top:180px">

<!-- ---------------------------------------서베이 내용 양식--------------------------------------- -->
    <div class="row col-md-11 mx-5">
        
        <div class="col-md-10 ">
          <!-- Nav tabs -->
          <!-- <card> -->
            <tabs
              slot="raw-content"
              tab-content-classes=" text-center"
            >
              <tab-pane>
                <template slot="label">
                   자유양식
                   <!-- {{this.QuestCount}} -->
                </template>
<!-- {{$store.state.questionData}}
<hr>
{{$store.state.choiceData}}
<hr> {{$store.state.questionData}}
<hr>
{{$store.state.choiceData}}
<hr>-->
                          
                        <!-- <button
                         @click="select(quest.questionId)" class="card"  
                         v-for="quest in $store.state.questionData" :key="quest"  
                         value="this.QuestCount" 
                         v-bind:style="selectedBox==quest.questionId ? {'border': '4px solid red'}:{'': ''}"
                         
                         >                                     
                            button {{quest.questionId}}
                            <input type="text" v-model="testq">
                            <div v-for="choice in $store.state.choiceData" :key="choice"
                                v-show="quest.questionId==choice.questionId"
                                >
                                {{quest.questionId}}----{{choice.questionId}}/{{choice.choiceId}}
                                <input type="text" v-model="testc">
                            </div>
                            <button @click="addChoice">add</button>
                        </button> -->
                            
                                       <!-- Box:  {{selectedBox}} ------- Choice:  {{selectedChoice}} -->
                <button  
                @mousedown ="selectQuestion(quest.questionId)"
                class="card"
                v-for="(quest, index) in $store.state.questionData" :key="quest" 
                v-bind:style="selectedBox==quest.questionId ? 
                {'border-left': '10px solid #fff2c8'
                , 'border-right' : '10px solid #fff2c8'
                }:{'': ''}"
                >
                        <div id="inputs">
                            <!-- index: {{index}}---- -->
                            
                            <div class="row card-form pb-0">
                                <div class="col-sm-6 col-lg-1  d-flex align-items-center">
                                    <span class="badge badge-primary mr-1 py-2">질문 {{index+1}}</span>
                                </div>
                                <div class="col-sm-6 col-lg-8">
                                    <fg-input placeholder="자유양식입니다. 질문을 입력해주세요." 
                                    v-model="quest.content"
                                    ></fg-input>
                                    <!-- title:{{title}}-------{{quest.content}} -->
                                </div>
                                <div class="col-sm-6 col-lg-3 p-0 d-flex flex-row-reverse align-items-center">
                                    <n-switch
                                        class=""
                                        v-model="quest.isMultyple"
                                        on-text="On"
                                        off-text="Off"
                                    ></n-switch>
                                    <small class="px-1 pb-2"><b>복수선택</b></small>
                                    
                                </div>
<!-- 선택 -->
                                <div class="col-sm-6 col-lg-9 pr-0 row"  
                                v-for="(choice, index) in $store.state.choiceData" :key="choice"
                                v-show="quest.questionId==choice.questionId"
                                >
               <!-- {{quest.questionId}}/{{choice.choiceId}} -->
                                    <div class="col-sm-6 col-lg-10 pr-0" @mousedown="selectChoice(choice.choiceId)">
                                        <fg-input class="card-maxline" 
                                        placeholder="선택" 
                                        v-model="choice.content"
                                        
                                        ></fg-input>
                                    </div>
                                    <div class="col-sm-6 col-lg-1 p-0" @mousedown="selectChoice(choice.choiceId)">
                                        <button type="button" @click="deleteChoice(index)" class="btn btn-icon btn-round btn-neutral m-0">
                                            <i class="now-ui-icons ui-1_simple-remove"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-lg-9 ">
                                    <button type="button"  @click="addChoice" class="btn btn-icon btn-round btn-primary">
                                        <i class="now-ui-icons ui-1_simple-add"></i>
                                    </button>
                                </div>
                                <div class="col-sm-6 col-lg-3 ">
                                    <button type="button" @click="deleteQuestion(index)" class="btn btn-simple btn-block btn-round btn-primary">
                                        지우기  
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                </button>

              </tab-pane>
              <tab-pane>
                <template slot="label">
                   시장조사
                </template>
                <card>
                        <div id="inputs">
                            <div class="row card-form ">
                                <div class="col-sm-6 col-lg-8">
                                    <fg-input placeholder="시장조사 질문 양식"></fg-input>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <n-switch
                                        v-model="switches.defaultOff"
                                        on-text="ON"
                                        off-text="OFF"
                                    ></n-switch>
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <fg-input class="card-maxline" placeholder="선택1"></fg-input>
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <fg-input class="card-maxline" placeholder="선택2"></fg-input>
                                    <!-- <button type="button" class="btn btn-icon btn-round btn-primary">
                                        <i class="now-ui-icons ui-1_simple-add"></i>
                                    </button> -->
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <button type="button" class="btn btn-icon btn-round btn-primary">
                                        <i class="now-ui-icons ui-1_simple-add"></i>
                                    </button>
                                </div>
                                <div class="col-sm-6 col-lg-4 ">
                                    <button type="button" class="btn btn-round btn-round btn-primary">
                                        지우기
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                </card>
                <card>
                        <div id="inputs">
                            <div class="row card-form ">
                                <div class="col-sm-6 col-lg-8">
                                    <fg-input placeholder="시장조사 질문 양식 2"></fg-input>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <n-switch
                                        v-model="switches.defaultOff"
                                        on-text="ON"
                                        off-text="OFF"
                                    ></n-switch>
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <fg-input class="card-maxline" placeholder="선택1"></fg-input>
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <fg-input class="card-maxline" placeholder="선택2"></fg-input>
                                    <!-- <button type="button" class="btn btn-icon btn-round btn-primary">
                                        <i class="now-ui-icons ui-1_simple-add"></i>
                                    </button> -->
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <button type="button" class="btn btn-icon btn-round btn-primary">
                                        <i class="now-ui-icons ui-1_simple-add"></i>
                                    </button>
                                </div>
                                <div class="col-sm-6 col-lg-4 ">
                                    <button type="button" class="btn btn-round btn-round btn-primary">
                                        지우기
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                </card>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  고객경험
                </template>
                <card>
                        <div id="inputs">
                            <div class="row card-form ">
                                <div class="col-sm-6 col-lg-8">
                                    <fg-input placeholder="고객경험 질문 양식"></fg-input>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <n-switch
                                        v-model="switches.defaultOff"
                                        on-text="ON"
                                        off-text="OFF"
                                    ></n-switch>
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <fg-input class="card-maxline" placeholder="선택1"></fg-input>
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <fg-input class="card-maxline" placeholder="선택2"></fg-input>
                                    <!-- <button type="button" class="btn btn-icon btn-round btn-primary">
                                        <i class="now-ui-icons ui-1_simple-add"></i>
                                    </button> -->
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <button type="button" class="btn btn-icon btn-round btn-primary">
                                        <i class="now-ui-icons ui-1_simple-add"></i>
                                    </button>
                                </div>
                                <div class="col-sm-6 col-lg-4 ">
                                    <button type="button" class="btn btn-round btn-round btn-primary">
                                        지우기
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                </card>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                   목표시장분석
                </template>
                <card>
                        <div id="inputs">
                            <div class="row card-form ">
                                <div class="col-sm-6 col-lg-8">
                                    <fg-input placeholder="목표시장분석 질문양식."></fg-input>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <n-switch
                                        v-model="switches.defaultOff"
                                        on-text="ON"
                                        off-text="OFF"
                                    ></n-switch>
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <fg-input class="card-maxline" placeholder="선택1"></fg-input>
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <fg-input class="card-maxline" placeholder="선택2"></fg-input>
                                    <!-- <button type="button" class="btn btn-icon btn-round btn-primary">
                                        <i class="now-ui-icons ui-1_simple-add"></i>
                                    </button> -->
                                </div>
                                <div class="col-sm-6 col-lg-8 ">
                                    <button type="button" class="btn btn-icon btn-round btn-primary">
                                        <i class="now-ui-icons ui-1_simple-add"></i>
                                    </button>
                                </div>
                                <div class="col-sm-6 col-lg-4 ">
                                    <button type="button" class="btn btn-round btn-round btn-primary">
                                        지우기
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                </card>
              </tab-pane>
            </tabs>
        </div>

        <!-- tool box -->
        <div class="col-md-2 pt-5">
            <div class=" py-5">
                <card class="rounded-pill" style="width:100px">
                    <div class="col-md-12 d-flex justify-content-center">
                        <button type="button" class="btn btn-icon btn-round btn-simple">
                                <i class="now-ui-icons files_single-copy-04"></i>
                        </button>
                    </div>
                    <div class="col-md-12 d-flex justify-content-center">
                        <button type="button" class="btn btn-icon btn-round btn-simple">
                                <i class="now-ui-icons design_image"></i>
                        </button>
                    </div>
                    <div class="col-md-12 d-flex justify-content-center">
                        <button type="button" class="btn btn-icon btn-round btn-simple">
                                <i class="now-ui-icons files_single-copy-04"></i>
                        </button>
                    </div>
                    <div class="col-md-12 d-flex justify-content-center">
                        <button type="button" @click="addQuestion" class="btn btn-icon btn-round btn-primary">
                                <i class="now-ui-icons ui-1_simple-add"></i>
                        </button>
                    </div>
                </card>
            </div>
        </div>

    </div>
<!-- <button onclick="scroll(0, 100);">click to scroll to the 100th pixel</button> -->
<!-- --------------------------------------- 추가 정보입력 --------------------------------------- -->
            <card  class="col-md-11 mx-5">
              <div class="">

                <div id="inputs">
                    <div class="row card-form ">
                        <div class="col-sm-6 col-lg-6">
                            <fg-input placeholder="태그를 입력해주세요." v-model="inputTag" @input="tagCreator"></fg-input>
                            <span v-for="(tag, index) in $store.state.tags" :key="tag" >
                                <span class="badge badge-neutral mr-1">
                                    # {{tag.content}}
                                    <i type="button" class="now-ui-icons ui-1_simple-remove align-middle" @click="deleteTag(index)"
                                    ></i>
                                </span>
                            </span>
                        </div>
                        <div class="col-sm-6 col-lg-6" v-if="$store.state.category != '커뮤니티'">
                            <fg-input class="card-maxline" v-model="$store.state.targetAmount" placeholder="목표인원수"></fg-input>
                            <div class="px-3 row">
                                <div class="col-sm-6 col-lg-6 ">
                                    <small>
                                        <h6>
                                            참여인 보상
                                        </h6>
                                        <h6>
                                            목표달성 보상
                                        </h6>
                                        <h6>
                                            수수료
                                        </h6>
                                    </small>
                                </div>
                                <div class="col-sm-6 col-lg-6 ">
                                    <small>
                                        <h6>
                                            {{$store.state.calculate.firstReward}}
                                        </h6> 
                                        <h6>
                                            {{$store.state.calculate.secReward}}
                                        </h6>
                                        <h6>
                                            {{$store.state.calculate.fee}}
                                        </h6>   
                                    </small>
                                </div>

                            </div>
                        </div>
                        
        <!-- 마감날짜 -->
                        <div class="col-sm-6 col-lg-6 " v-if="$store.state.category != '커뮤니티'">
                            <fg-input class="card-maxline" >
                                <el-date-picker
                                                    type="date"
                                                    popper-class="date-picker date-picker-primary"
                                                    placeholder="Date Time Picker"
                                                    v-model="$store.state.closingDate"
                                                >
                                </el-date-picker>
        <!-- {{$store.state.closingDate}}===={{datePicker}} -->
                            </fg-input>
                        </div>
                        
                        <div class="col-sm-6 col-lg-6 " v-if="$store.state.category != '커뮤니티'">
                            <fg-input class="card-maxline" v-model="$store.state.paymAmount" @input="$store.commit('rewardCalculator')" placeholder="결제할 금액을 입력해주세요."></fg-input>
                        </div>
                        <div class="col-sm-6 col-lg-12 d-flex justify-content-center mt-3">
                            <div class="col-lg-8 d-flex justify-content-center">
                                <!-- <button type="button" class="btn btn-simple btn-round btn-primary px-5 mx-3 btn-block" >
                                    결제하기
                                </button> -->
                                <button type="button" class="btn btn-round btn-round btn-primary px-5 mx-3 btn-block"
                                @click="$store.dispatch('postSurvey')">
                                    서베이 등록
                                </button>

                            </div>
                        </div>
                        
                    </div>
                </div>
              </div>
            </card>

        </div>
        
    <!-- 등록실패Modal -->
        <modal :show.sync="$store.state.isfailToPay" headerClasses="justify-content-center pt-0" class="modal-primary" type="mini" >
        <h5 slot="header" class="title title-up pb-0">알림</h5>
            <h6 class="text-center">
            등록에 실패하였습니다!
            </h6>
        <template slot="footer">
            <n-button  class="btn btn-round btn-block btn-neutral btn" 
            type="button"
            @click="$store.commit('IsfailToPayFalse')" >
            확인
            </n-button>
        </template>
        </modal>

    </div>
</template>
<script>
import { Card, Tabs, TabPane, Modal } from '@/components';
// import { Button, Modal, FormGroupInput } from '@/components';
import { DatePicker } from 'element-ui';

import {
  FormGroupInput,
  Switch
  
} from '@/components';

export default {
  components: {
    Card,
    [FormGroupInput.name]: FormGroupInput,
    [Switch.name]: Switch,
    Tabs,
    TabPane,
    [DatePicker.name]: DatePicker,
    Modal,
  },
  data() {
    return {
        isfailToPay: false,
      switches: {
        defaultOn: true,
        defaultOff: false
      },

      
        selectedBox: '',//quest//작성중인 질문
        selectedChoice: '',//작성중인 선택

        lastNumOfQues: 1,//quest//마지막 질문 아이디
        lastNumOfchoi: 2,//마지막 선택 아이디

        inputTag:'',//태그생성을 위한 입력

        //리워드 관련 계산 입력들
        firstReward: 0,
        secReward:0,
        fee:0,
    };
  },
  methods:{
      //----------ADD
      addQuestion(){ 
          //질문추가와 동시에 선택 2개도 추가 
          this.$store.state.questionData.push({
              questionId: this.lastNumOfQues+1, 
              surveyId: null, 
              content: null,
              isMultyple: false
          });
          this.$store.state.choiceData.push({
              choiceId: this.lastNumOfchoi+1,
              questionId: this.lastNumOfQues+1,
              content:null
          });
          this.lastNumOfchoi++;
          this.$store.state.choiceData.push({
              choiceId: this.lastNumOfchoi+1,
              questionId: this.lastNumOfQues+1,
              content:null
          });
          this.lastNumOfQues++;
          this.lastNumOfchoi++;

        // console.log(this.$store.state.questionData.length + ' ---------------' + this.QuestCount);
      },
      addChoice(){
          //선택추가
          this.$store.state.choiceData.push({
              choiceId: this.lastNumOfchoi+1, 
              questionId: this.selectedBox,
              content:null
          });
          this.lastNumOfchoi++;

      },
      //----------SELECT
      selectQuestion(val){
          //선택한 질문박스의 질문아이디를 저장
          this.selectedBox = val;
      },
      selectChoice(val){
          //선택한 선택사항의 선택아이디를 저장
          this.selectedChoice = val;
      },
      //----------DELETE
      deleteQuestion(val){
          //질문을 삭제
          this.$store.state.questionData.splice(val,1);
          let num = val;
          let count= this.ChoiceCount;
          //해당 질문아이디를 가지고있는 선택사항들을 삭제
          for(let i = 0; i < count; i++){
              if(this.$store.state.choiceData[i].questionId == this.selectedBox){
                  this.deleteChoice(i);
                  i--;
              }
          }
      },
      deleteChoice(val){
          //선택 삭제
          this.$store.state.choiceData.splice(val,1);
      },
      deleteTag(val){
          //태그 삭제
          this.$store.state.tags.splice(val,1);
      },

      
      tagCreator(){
          //태그 생성기
          let tags = this.inputTag.split(" ");
          if(tags[0] != "" && tags[tags.length-1]  == ""){
              this.$store.state.tags.push({
                  surveyId: null,
                  content: tags[0],
              });
              this.inputTag = '';
          }
          if(tags[0] == ""){
              this.inputTag = '';
          }

      },
      scroll(){
        //   console.clear();
        //     $(window).scroll(function() {
        //         let scrollTop = $(this).scrollTop();
        //         console.log(scrollTop)
                
        //         if ( scrollTop < 100 ) {
        //             scrollTop = 100;
        //         }
        //         else if ( scrollTop > 9600 ) {
        //             scrollTop = 9600;
        //         }
                
        //         let duration = 1000;
        //         $('.fly').stop().animate({top:scrollTop}, duration);
                
        //         //console.log(scrollTop);
        //     });

            window.scroll({
                top: 100,
                left: 100,
                behavior: 'smooth'
                });
      },
    
      postSurvey(){
        this.$store.dispatch('postSurvey');
     }
      //-----------------------------------------------------------TEST---------------------------------------------------------------
    
  },
  computed:{
    
  },
    

  
};

</script>
<style lang="scss">
#javascriptComponents {
  .modal-buttons,
  .popover-buttons,
  .tooltip-buttons {
    .btn + .btn {
      margin-left: 3px;
    }
  }
}

.fly {
    position:absolute;
    left:50%;
    width:100px;
    top:100px;
    height:500px;
    margin-left:520px;
    background-color:red;
}

div.con {
    width:1000px;
    margin: 100px auto;
    margin-bottom:1000px;
    height:10000px;
    // background: linear-gradient(to bottom, red, yellow);
}
</style>
