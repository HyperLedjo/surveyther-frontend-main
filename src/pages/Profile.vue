<template>
  <div>
    <div class="page-header clear-filter" filter-color="">
      <parallax
        class="page-header-image"
        style="background-image:url('img/Main.jpeg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img/ryan.jpg" alt="" />
        </div>
        <h3 class="title">My Page</h3>
        <p class="category">ID : {{$store.state.userInfo.id}}</p>
        <div class="content">
          <div class="social-description">
            <h2>0</h2>
            <p>등록한서베이</p>
          </div>
          <div class="social-description">
            <h2>0</h2>
            <p>보유서베이</p>
          </div>
          <div class="social-description">
            <h2>0</h2>
            <p>보유상품권</p>
          </div>
          
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="button-container">
          <a 
          href="https://kauth.kakao.com/oauth/logout?client_id=48500a0e0a3fae56b1ab1f039e7a5c71&logout_redirect_uri=http://localhost:8082/oauth2/logout"
          class="btn btn-primary btn-round btn-lg">로그아웃</a>
          <!-- <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a> -->
        </div>


        <div class="container mt-4">
          <card class="p-3">
            <div>
              <h3 class=""><b>My Wallet</b></h3>
              <!-- <hr> -->
              <h6>지갑주소: {{$store.state.userInfo.wallet}}</h6> 
              <h4>보유토큰    <b>{{$store.state.userInfo.tokenAmount}}</b></h4>
            </div>
          </card>
          <div class="row">
            <div class="col-md-3 mr-auto ">
              <card class="p-3">
                <h6 class="my-4">내정보보기</h6>
                <h6 class="my-4">등록한서베이</h6>
                <h6 class="my-4">보유서베이</h6>
                <h6 class="my-4">보유상품권</h6>
              </card>
            </div>

            <div class="col-md-9 ml-auto ">
              <card class="p-3">
                <h5 class="mt-3"><b>기본정보</b></h5>  
                <hr>
                <div class="row ">
                  <div class="col-md-3 mr-auto ">
                    <h6 class="my-3">이메일</h6>
                    <h6 class="my-3">생일</h6>
                    <h6 class="my-3">성별</h6>

                  </div>
                  <div class="col-md-9 ml-auto ">
                    <b>
                      <h6 class="my-3">{{$store.state.userInfo.email}}</h6>
                      <h6 class="my-3">{{$store.state.userInfo.birthday}}</h6>
                      <h6 class="my-3">{{$store.state.userInfo.gender}}</h6>
                    </b>
                  </div>
                </div>

                <h5 class="mt-4"><b>추가정보</b></h5>
                <hr>
<!-- 추가정보 -->
                <div class="row " v-if="!isEditing">
                  <div class="col-md-3 mr-auto ">
                    <h6 class="my-3">실명</h6>
                    <h6 class="my-3">출생년도</h6>
                    <h6 class="my-3">전화번호</h6>
                    <h6 class="my-3">지역</h6>
                    <h6 class="my-3">직업</h6>
                    <h6 class="my-3">결혼유무</h6>
                    <h6 class="my-3">최종학력</h6>
                    <h6 class="my-3">소득수준</h6>

                  </div>
                  <div class="col-md-9 ml-auto ">
                    <b>
                      <h6 class="my-3">{{$store.state.userAddInfo.name}}-</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.birthYear}}-</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.phone1}}-{{$store.state.userAddInfo.phone2}}{{$store.state.userAddInfo.phone3}}</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.residence}}-</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.job}}-</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.married}}-</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.academic}}-</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.income}}-</h6>

                    </b>
                  </div>
                </div>

                <div v-else class="row ">
                  <div class="col-md-3 mr-auto ">
                    <h6 class="my-3">실명</h6>
                    <h6 class="my-3">출생년도</h6>
                    <h6 class="my-3">전화번호</h6>
                    <h6 class="my-3">지역</h6>
                    <h6 class="my-3">직업</h6>
                    <h6 class="my-3">결혼유무</h6>
                    <h6 class="my-3">최종학력</h6>
                    <h6 class="my-3">소득수준</h6>

                  </div>
                  <div class="col-md-9 ml-auto ">
                    <b>
                      <fg-input placeholder="이름을 입력해주세요." v-model="editData.name"></fg-input>
                      <fg-input placeholder="출생년도를 입력해주세요. ex)YYYY" v-model="editData.birthYear"></fg-input>
                      <div class="row">

                      </div>
                      <h6 class="my-3">{{$store.state.userAddInfo.phone1}}-{{$store.state.userAddInfo.phone2}}{{$store.state.userAddInfo.phone3}}</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.residence}}-</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.job}}-</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.married}}-</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.academic}}-</h6>
                      <h6 class="my-3">{{$store.state.userAddInfo.income}}-</h6>

                    </b>
                  </div>



                </div>
<!-- v-else -->
                      <fg-input placeholder="자유양식입니다. 질문을 입력해주세요." ></fg-input>
<custom-select
      :options="['사무직', '노동직', '가정주부', '자영업','학생', '농림어업', '무직', '기타']"
      :default="'직업선택'"
      class="select"
      v-model="mytest"
      @input="alert(displayToKey($event))"
    />
    {{mytest}}?

              </card>
            </div>

          </div>
          
        </div>
        

      </div>
    </div>
  </div>
</template>
<script>
import { Card, Tabs, TabPane, FormGroupInput} from '@/components';
import  CustomSelect  from './mycomponents/CustomSeclet.vue';
import {EventBus} from '@/main.js';


export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
    // Tabs,
    // TabPane,
    Card,
    // DropDown,
    CustomSelect,
    [FormGroupInput.name]: FormGroupInput,

  },
  data(){
    MySeclet
    return {
      isEditing: false,
      editData:{
            name: null,
            birthYear: null,
            phone1: null,
            phone2: null,
            phone3: null,
            residence: null,
            job: 'null',
            married: null,
            academic: null,
            income: null,
      },
      mytest: null,
      
    }
  }
};
</script>
<style>
.myDropDown{
  border: 1px solid rgb(211, 211, 211);
  /* border-radius: 50px 20px; */
  border-radius: 50px;
}

</style>
