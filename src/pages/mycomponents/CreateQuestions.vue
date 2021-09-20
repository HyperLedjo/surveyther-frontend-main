<template>
    <div class="question-location ">
        <div class="container" >
          <!-- card -->
          <card>
              <div class="">

                <div id="inputs">
                    <div class="row card-form ">
                        <div class="col-sm-6 col-lg-3">
                            <fg-input placeholder="카테고리선택"></fg-input>
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
                </template>
                <card>
                        <div id="inputs">
                            <div class="row card-form ">
                                <div class="col-sm-6 col-lg-8">
                                    <fg-input placeholder="자유양식입니다. 질문을 입력해주세요."></fg-input>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <p4>복수선택</p4>
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
                                    <button type="button" class="btn btn-simple btn-round btn-primary">
                                        지우기
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                </card>
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
      }
    };
  }
};
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
