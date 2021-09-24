<template>
    <div class="question-location ">
        <div class="container" >
          <!-- card -->
          <card>
              <div class="">

                <div id="inputs">
                    <div class="row card-form ">
                            <div class="col-sm-6 col-lg-12">
                              <span class="badge badge-primary mr-1">부동산</span>
                              <span class="badge badge-default mr-1">마감</span>
                                <span><b> 서베이 타이틀입니다</b></span> 
                            </div>
                            <!-- 프사 -->
                            <div class="col-sm-1 col-lg-1">
                                <img
                                v-lazy="'img/julie.jpg'"
                                alt="Circle Image"
                                class="rounded-circle"
                                />
                            </div>
                            <div class="col-sm-1 col-lg-5">
                                <span><b class="mr-3">user_id</b> </span>
                                <span class="surv-disc">2021.08.27</span>

                            </div>
                            <div class="col-sm-6 col-lg-10">
                                <span class="mr-3 surv-disc">참여한 인원 1843</span> 
                                <span class="mr-3 surv-disc">마감까지 5일 4시간 27분</span>
                                <span class="mr-3 surv-disc">남은보상 <b>157</b></span>
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-2">
                                <span class="ml-4 now-ui-icons ui-2_chat-round"> 3</span> 
                                <span class="ml-4 now-ui-icons ui-2_favourite-28"> 3</span> 
                            </div>
                            <div class="col-sm-6 col-lg-12">
                                <hr style="background:rgb(200,200,200); "> 
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-12 mt-1">
                                <h6>서베이에 대한 간단한 설명입니다. 서베이에 대한 간단한 설명입니다.서베이에 대한 간단한 설명입니다.서베이에 대한 간단한 설명입니다.</h6>
                            </div>

                            <!-- <div class="col-sm-6 col-lg-12">
                                <hr style="padding-top:30px"> 
                            </div> -->
  <!-- 질문 -->
                            <div class="container one-block">
                                <div>
                                    <span class="badge badge-default">질문1</span>
                                    <span class=" mr-1">이것에 대해 어떻게 생각하십니까?</span>
                                        <n-radio v-model="radios.radioOn" label="1">이렇고 그렇게 생각한다</n-radio>
                                        <n-radio v-model="radios.radioOn" label="2">이것은 아니라고 생각한다</n-radio>
                                        <n-radio v-model="radios.radioOn" label="3">그럴수도 있다고 생각한다</n-radio>
                                        <n-radio v-model="radios.radioOn" label="4">저럴수도 있다고 생각한다</n-radio>
                                </div>

                                <div style="padding-top:30px">
                                    <span class="badge badge-default">질문2</span>
                                    <span class=" mr-1">이것에 대해 어떻게 생각하십니까?</span>
                                        <n-radio v-model="radios.radioOff" label="1">이렇고 그렇게 생각한다</n-radio>
                                        <n-radio v-model="radios.radioOff" label="2">이것은 아니라고 생각한다</n-radio>
                                        <n-radio v-model="radios.radioOff" label="3">그럴수도 있다고 생각한다</n-radio>
                                        <n-radio v-model="radios.radioOff" label="4">저럴수도 있다고 생각한다</n-radio>
                                </div>
                              
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
                                    <span class="mr-4 now-ui-icons ui-2_chat-round"> 3</span> 
                                    <span class="mr-4 now-ui-icons ui-2_favourite-28"> 3</span> 
                                    <a href=""><span class="mr-4 now-ui-icons arrows-1_share-66"></span></a> 
                                    <a href="" class="btn btn-primary btn-round btn-lg"> 서베이 참여 </a>
                                </div>
                            </div>
                            
                        
                    </div>
                </div>
              </div>
          </card>

        

            <!-- TempCommnetBox!!!!!!!!!!!!!!!! -->
          <card>
              <div class="">

                <div id="inputs">
                    <div class="row card-form ">

                        <div class="col-md-12">
                          <h5><b>댓글</b> </h5>
                          <hr>
                        </div>

                        <div class="col-md-12">
                          <h7><b class="col-md-3">user_id</b> 2021.08.27 </h7>
                          <div>
                          <h8 class="col-md-12"> 댓글입니다 댓글입니다 댓글입니다 댓글입니다</h8> 
                          </div>
                          <hr style="border:0px">
                        </div>

                        <div class="col-md-12">
                          <h7><b class="col-md-3">user_id</b> 2021.08.27 </h7>
                          <div>
                          <h8 class="col-md-12"> 댓글입니다 댓글입니다 댓글입니다</h8> 
                          </div>
                          <hr style="border:0px">
                        </div>

                        <div class="textarea-container col-md-12 mr-auto p-4 commnet-box">
                          <h7><b>user_id</b> </h7>
                          <textarea name="commnet" id="comment" cols="100%" rows="100%" placeholder="댓글을 남겨보세요..."
                          class="form-control "></textarea>
                          <!-- <button type="button" class="btn btn-primary btn-round btn-lg"> 댓글등록</button> -->
                          <!-- <a href="" class="btn btn-primary btn-round btn-lg commnet-button">댓글등록</a> -->

                        </div>

                        
                        
                    </div>
                </div>
              </div>
          </card>
<!-- TempCommnetBox!!!!!!!!!!!!!!!! -->


        </div>
      
    </div>
</template>
<script>
import { Card, Tabs, TabPane } from '@/components';
// import { Button, Modal, FormGroupInput } from '@/components';
import { Popover, Tooltip, DatePicker } from 'element-ui';

import {
  Button,
  Checkbox,
  Radio,
  FormGroupInput,
  Slider,
  Switch
  
} from '@/components';

export default {
  components: {
    Card,
    // [Button.name]: Button,
    // [Checkbox.name]: Checkbox,
    [Radio.name]: Radio,
    [FormGroupInput.name]: FormGroupInput,
    // [Switch.name]: Switch,
    // [Option.name]: Option,
    // Slider
    // Tabs,
    // TabPane,
    // Modal,
    // [Button.name]: Button,
    // [Popover.name]: Popover,
    // [Tooltip.name]: Tooltip,
    // [DatePicker.name]: DatePicker,
    // [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      radios: {
        radioOn: '0',
        radioOff: '0'
      },
    //   checkboxes: {
    //     unchecked: false,
    //     checked: true,
    //     disabledUnchecked: false,
    //     disabledChecked: true
    //   },
      switches: {
        defaultOn: true,
        defaultOff: false
      },
    //   sliders: {
    //     simple: 30,
    //     rangeSlider: [20, 60]
    //   }
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

</style>
