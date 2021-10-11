<template>
  <div class="" >
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Create your own survey</h1>
          
        </div>
      </div>
    </div>



    <div class="" style="padding-bottom:100px">
      <div class="question-location">
        <div class="container">
            <card class="col-md-11 mx-5">
              <div class="">
                <div id="inputs">
                    <div class="row card-form ">
                        <div class="col-sm-6 col-lg-3">
                          <small>

                                    <!-- <vue-dropdown :config="config" ></vue-dropdown> -->
                          </small>

                            <select name="" id="" class="selectpicker" data-style="btn-primary" v-model="$store.state.category">
                                    <!-- <option disabled value="">카테고리선택</option> -->
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
                            <fg-input class="card-maxline" placeholder="타이틀을 입력해주세요." v-model="$store.state.title"></fg-input>
                        </div>
                        <div class="col-sm-6 col-lg ">
                            <fg-input class="card-maxline" placeholder="서베이에 대한 간단한 설명을 입력해주세요." v-model="$store.state.subtitle"></fg-input>
                        </div>
                    </div>
                </div>
              </div>
            </card>
        </div>
      </div>
            <create-questions></create-questions>    
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';

import CreateQuestions from './mycomponents/CreateQuestions.vue';
import VueDropdown from 'vue-dynamic-dropdown';

export default {
  name: 'create',
  bodyClass: 'create-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    CreateQuestions,
    Card,
    // VueDropdown,
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      config: {
        options: [
          {
            value: "부동산",
          },
          {
            value: "금융",
          },
          {
            value: "option 3",
          },
        ],
        placeholder: "카테고리선택",
        backgroundColor: "#E3E3E3",
        textColor: "gray",
        borderRadius: "2.5em",
        border: "1px solid #E3E3E3",
        width: 180,
      },
    };
  },
  methods:{
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
      this.config.options = selectedOption.options;
    },
  }
};
</script>
<style>
.block-title{
    /* height:600px; */
    /* background: gray; */
    /* margin-top:500px; */
}
.mycheck{
    /* background: gray; */
}
.space{
    /* height:2000px; */
    /* background: red; */
    padding-bottom:1400px;
    

}
.question-location{
    position: absolute;
    top:400px;
    /* align-content:center; */
    width:100%;
    background: rgb(82, 82, 82, 0);
    /* opacity: 0.5; */
    /* padding-left: 200px;
    padding-right: 200px; */
}
.question-card{
    padding-top:100px;
}


</style>
