<template>
    <div class="question-location ">
        <div class="container" >
          <!-- card -->
          <card>
              <div class="">

                <div id="inputs">
                    <div class="row card-form ">
                        <div class="col-sm-6 col-lg-3">
                            <!-- <fg-input placeholder="카테고리선택"></fg-input> -->
                            <select name="" id="" class="selectpicker" data-style="btn-primary">
                                    <option disabled value="">Please select one</option>
                                <optgroup label="Blockchain">
                                    <option>부동산</option>
                                    <option>유통</option>
                                    <option>식음료</option>
                                    <option>관광</option>
                                    <option>금융</option>
                                    <option>정보통신</option>
                                    <option>보건의료</option>
                                    <option>공공정책</option>
                                </optgroup>
                                <optgroup label="Free">
                                    <option>커뮤니티</option>
                                </optgroup>
                            </select>

                            

                        </div>
                        <div class="col-sm-6 col-lg-9 ">
                            <fg-input class="card-maxline" placeholder="타이틀을 입력해주세요."></fg-input>
                        </div>
                        <div class="col-sm-6 col-lg ">
                            <fg-input class="card-maxline" placeholder="서베이에 대한 간단한 설명을 입력해주세요."></fg-input>
                        </div>
                    </div>
                </div>
              </div>
          </card>

<!-- 서베이 양식 -->
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
                   자유양식{{this.QuestCount}}
                </template>

                            <!-- <a href="" @click="dddddddddddd"> testtesttesttesttesttesttesttest-->
                          
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
                            <!-- <a href="" @click="dddddddddddd"> testtesttesttesttesttesttesttest-->
                            
                                       Box:  {{selectedBox}} ------- Choice:  {{selectedChoice}}
                <button  
                @click="selectQuestion(quest.questionId)"
                class="card"
                v-for="(quest, index) in $store.state.questionData" :key="quest" 
                v-bind:style="selectedBox==quest.questionId ? {'border': '4px solid red'}:{'': ''}"
                >
                        <div id="inputs">
                            <!-- <div class="col-sm-6 col-lg-1">
                                <span class="badge badge-primary mr-1">질문 1</span>
                            </div> -->
                            <div class="row card-form pb-0">
                                <div class="col-sm-6 col-lg-1  d-flex align-items-center">
                                    <span class="badge badge-primary mr-1 py-2">질문 {{quest.questionId}}</span>
                                </div>
                                <div class="col-sm-6 col-lg-8">
                                    <fg-input placeholder="자유양식입니다. 질문을 입력해주세요." v-model="title"></fg-input>
                                </div>
                                <div class="col-sm-6 col-lg-3 p-0 d-flex flex-row-reverse align-items-center">
                                    <n-switch
                                        class=""
                                        v-model="switches.defaultOff"
                                        on-text="On"
                                        off-text="Off"
                                    ></n-switch>
                                    <small class="px-1 pb-2"><b>복수선택</b></small>
                                    
                                </div>

                                <div class="col-sm-6 col-lg-9 pr-0 row"  
                                v-for="(choice, index) in $store.state.choiceData" :key="choice"
                                v-show="quest.questionId==choice.questionId"
                                >{{quest.questionId}}/{{choice.choiceId}}
                                    <div class="col-sm-6 col-lg-10 pr-0" @mouseover="selectChoice(choice.choiceId)">
                                        <fg-input class="card-maxline" placeholder="선택" v-model="choiceCnt"></fg-input>
                                    </div>
                                    <div class="col-sm-6 col-lg-1 p-0" @mouseover="selectChoice(choice.choiceId)">
                                        <button type="button" @click="deleteChoice(index)" class="btn btn-icon btn-round btn-neutral m-0">
                                            <i class="now-ui-icons ui-1_simple-remove"></i>
                                        </button>
                                    </div>
                                </div>

                                <!-- <div class="col-sm-6 col-lg-8 pr-0">
                                    <fg-input class="card-maxline" placeholder="선택2"></fg-input>
                                </div>
                                <div class="col-sm-6 col-lg-1 p-0">
                                    <button type="button" class="btn btn-icon btn-round btn-neutral m-0">
                                        <i class="now-ui-icons ui-1_simple-remove"></i>
                                    </button>
                                </div> -->

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
                <!-- <RadioToggleButtons
		v-model='currentValue'
		:values='values'
		color='purple'
		textColor='#000'
		selectedTextColor='#fff'
	/> -->
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
          <!-- </card> -->
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

            <card>
              <div class="">

                <div id="inputs">
                    <div class="row card-form ">
                        <div class="col-sm-6 col-lg-6">
                            <fg-input placeholder="태그를 입력해주세요."></fg-input>
                            <span class="badge badge-neutral">#태그</span>
                            <span class="badge badge-neutral">#이런저런</span>
                            <span class="badge badge-neutral">#태그들</span>
                        </div>
                        <div class="col-sm-6 col-lg-6 ">
                            <fg-input class="card-maxline" placeholder="목표인원수"></fg-input>
                        </div>
                        <div class="col-sm-6 col-lg-6 ">
                            <fg-input class="card-maxline" placeholder="결제할 금액을 입력해주세요."></fg-input>
                        </div>
        <!-- datepick -->
                        <div class="col-sm-6 col-lg-6 ">
                            <fg-input class="card-maxline" >
                                <el-date-picker
                                                    type="date"
                                                    popper-class="date-picker date-picker-primary"
                                                    placeholder="Date Time Picker"
                                                    v-model="pickers.datePicker"
                                                >
                                </el-date-picker>
                            </fg-input>
                        </div>
                        

                        <div class="col-sm-6 col-lg-10 ">
                            <button type="button" class="btn btn-round btn-round btn-primary">
                                서베이 등록
                            </button>
                            <button type="button" class="btn btn-simple btn-round btn-primary">
                                결제하기
                            </button>
                        </div>
                        
                    </div>
                </div>
              </div>
          </card>

<!-- xxxxxxxxxxxxxxxxxxxxxxxx -->
        <!-- <div id="todo-list-example" class="demo">
            <form v-on:submit.prevent="addNewTodo">
                <label for="new-todo">Add a todo</label>
                <input
                v-model="newTodoText"
                id="new-todo"
                placeholder="E.g. Feed the cat"
                />
                <button>Add</button>
            </form>
            <ul>
                <todo-item
                v-for="(todo, index) in todos"
                v-bind:key="todo.id"
                v-bind:title="todo.title"
                v-on:remove="todos.splice(index, 1)"
                ></todo-item>
            </ul>
        </div> -->

        </div>
      
    </div>
</template>
<script>
import { Card, Tabs, TabPane } from '@/components';
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
  },
  data() {
    return {
      switches: {
        defaultOn: true,
        defaultOff: false
      },
    // modals: {
    //     classic: false,
    //     mini: false
    //   },
      pickers: {
        datePicker: ''
      },
      values: [
				{ label: 'Value 1', value: '1' },
				{ label: 'Value 2', value: '2' },
				{ label: 'Value 3', value: '3' },
				{ label: 'Value 5', value: '4' },
			],
			// currentValue: '',
            selectedBox: '',
            selectedChoice: '',
            isSelected: false,

            title:'',
            choiceCnt: '',
            testq:'',
            testc:'',
    //   QuestCount: this.$store.state.questionData.length,

      //-------------
    //   newTodoText: '',
    //   todos: [
    //     {
    //       id: 1,
    //       title: 'Do the dishes'
    //     },
    //     {
    //       id: 2,
    //       title: 'Take out the trash'
    //     },
    //     {
    //       id: 3,
    //       title: 'Mow the lawn'
    //     }
    //   ],
    //   nextTodoId: 4
        //---------------
    };
  },
  methods:{
      addQuestion(){
          this.$store.state.questionData.push({
              questionId: this.QuestCount+1, 
              surveyId: null, 
              content: ''
          });
          this.$store.state.choiceData.push({
              choiceId: this.ChoiceCount+1,
              questionId: this.QuestCount,
              content:''
          });
          this.$store.state.choiceData.push({
              choiceId: this.ChoiceCount+1,
              questionId: this.QuestCount,
              content:''
          });
          
        console.log(this.$store.state.questionData.length + ' ---------------' + this.QuestCount);
      },
      addChoice(){
          this.$store.state.choiceData.push({
              choiceId: this.ChoiceCount+1, 
              questionId: this.selectedBox//호버로 바꿀것@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          });
      },
      selectQuestion(val){
          this.selectedBox = val;
          console.log(this.QuestCount + ' worked!!!!!!!!!!!!!!!!!!!!!!!!!!!@@@@@@@@@@@@@@@@@@@@' + val);
      },
      selectChoice(val){
          this.selectedChoice = val;
      },
      deleteQuestion(val){
          this.$store.state.questionData.splice(val,1);
          //선택 같이
      },
      deleteChoice(val){
          this.$store.state.choiceData.splice(val,1);
      },
    //   addNewTodo() {
    //   this.todos.push({
    //     id: this.nextTodoId++,
    //     title: this.newTodoText
    //   })
    //   this.newTodoText = ''
    // }
    
  },
  computed:{
    QuestCount(){
        return this.$store.state.questionData.length;
    },
    ChoiceCount(){
        return this.$store.state.choiceData.length;
    },
    // test(){
    //     return (val) =>{
    //         return val;
    //     };
    // }
    
    
  },

  
};
// app.component('todo-item', {
//   template: `
//           <li>
//             {{ title }}
//             <button v-on:click="$emit('remove')">Remove</button>
//           </li>
//         `,
//   props: ['title'],
//   emits: ['remove']
// })

// app.mount('#todo-list-example')
</script>
<style lang="scss">
// .question-location{
//     position: absolute;
//     top:400px;
//     /* align-content:center; */
//     width:100%;
//     background: rgb(82, 82, 82, 0);
//     /* opacity: 0.5; */
//     padding-left: 300px;
//     padding-right: 300px;

// }
// .question-card{
//     padding-top:100px;
// }
#javascriptComponents {
  .modal-buttons,
  .popover-buttons,
  .tooltip-buttons {
    .btn + .btn {
      margin-left: 3px;
    }
  }
}
</style>
