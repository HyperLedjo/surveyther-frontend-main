<template>
    <card>
              <div class="">

                <div id="inputs">
                    <div class="row card-form ">
                            <div class="col-sm-6 col-lg-12">
                              <span class="badge badge-primary mr-1">{{$store.state.surveyData.category}}</span>
                              <span class="badge badge-success mr-1">{{$store.state.surveyData.status}}</span>
                                <span class="badge badge-warning">120</span>
                                <span><b> {{$store.state.surveyData.title}}</b></span> 
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
                                <span><b class="mr-3">{{this.$store.state.surveyData.userId}}</b> </span>
                                <span class="surv-disc">{{this.$store.state.surveyData.regDate}}</span>

                            </div>
                            <div class="col-sm-6 col-lg-10">
                                <span class="mr-3 surv-disc">참여한 인원 {{this.$store.state.surveyData.particAmount}}</span> 
                                <span class="mr-3 surv-disc">마감까지 5일 4시간 27분</span>
                                <span class="mr-3 surv-disc">남은보상 <b>{{remainAmount}}</b></span>
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-2">
                                <span class="ml-4 now-ui-icons ui-2_chat-round"> {{$store.state.surveyData.commentCount}} </span> 
                                <span class="ml-4 now-ui-icons ui-2_favourite-28"> {{$store.state.surveyData.likeCount}} </span> 
                            </div>
                            <div class="col-sm-6 col-lg-12">
                                <hr style="background:rgb(200,200,200); "> 
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-12 mt-1">
                                <h6>{{$store.state.surveyData.subtitle}}</h6>
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
                                    <span class="mr-4 now-ui-icons ui-2_chat-round"> {{$store.state.surveyData.commentCount}}</span> 
                                    <span class="mr-4 now-ui-icons ui-2_favourite-28"> {{$store.state.surveyData.likeCount}}</span> 
                                    <a href=""><span class="mr-4 now-ui-icons arrows-1_share-66"></span></a> 
                                    <a href="" class="btn btn-primary btn-round btn-lg"> 서베이 참여 </a>
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
  },
  computed:{
    remainAmount(){
      return this.$store.state.surveyData.targetAmount - this.$store.state.surveyData.particAmount;
    }
  }
};
</script>
<style lang="scss">
.one-block{
    padding-top:60px
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
