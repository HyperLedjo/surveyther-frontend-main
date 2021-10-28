<template>
  <div>
    <div class="page-header clear-filter" filter-color="">
      <parallax
        class="page-header-image"
        style="background-image:url('img/Main.jpeg')"
      >
      </parallax>
      <div class="container">
        <!-- <div class="photo-container">
          <img src="img/ryan.jpg" alt="" />
        </div> -->
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
  
  <div class="row">
    <div class="col-md-3 mr-auto">
                <h5 class="mt-4 mb-2"><b>추가정보</b></h5>
    </div>
                <div class="col-md-9 mr-auto">
                  <div>
                    <button v-if="!isEditing" type="button" class="btn btn-primary btn-round my-3 pull-right" @click="ButtonForEdit">수정하기</button>
                  </div>
                  <div>
                    <button v-if="isEditing" type="button" class="btn btn-primary btn-round my-3 pull-right" @click="PostUserData">저장하기</button>
                    <button v-if="isEditing" type="button" class="btn btn-default btn-round my-3 pull-right" @click="ButtonForEdit">취소</button>
                  </div>
                </div>
                
  </div>
                <hr class="mt-0">
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
                    <h6 class="" style="padding-top:13px; padding-bottom:22px">실명</h6>
                    <h6 class="" style="padding-bottom:22px">출생년도</h6>
                    <h6 class="" style="padding-bottom:22px">전화번호</h6>
                    <h6 class="" style="padding-bottom:22px">지역</h6>
                    <h6 class="" style="padding-bottom:22px">직업</h6>
                    <h6 class="" style="padding-bottom:22px">결혼유무</h6>
                    <h6 class="" style="padding-bottom:22px">최종학력</h6>
                    <h6 class="" style="padding-bottom:22px">소득수준</h6>
<!-- {{editData}} -->
                  </div>
                  <div class="col-md-9 ml-auto ">
                      <div class="col-md-12 mr-auto ">
                          <fg-input placeholder="이름을 입력해주세요." v-model="editData.name"></fg-input>
                      </div>
                      <div class="col-md-12 mr-auto ">
                          <fg-input placeholder="출생년도를 입력해주세요. ex)YYYY" v-model="editData.birthYear"></fg-input>
                      </div>
                      <div class="row col-md-12 mr-auto" style="padding-left:30px">
                        <div class="col-md-3 mr-auto p-0">
                            <fg-input placeholder="XXX" v-model="editData.phone1"></fg-input>
                        </div>
                        <div class="col-md-4 mr-auto p-0">
                            <fg-input placeholder="XXXX" v-model="editData.phone2"></fg-input>
                        </div>
                        <div class="col-md-4 mr-auto p-0">
                            <fg-input placeholder="XXXX" v-model="editData.phone3"></fg-input>
                        </div>
                      </div>
                      <div class="col-md-12 mr-auto ">
                        <custom-select
                          :options="['서울특별시', '부산광역시', '대구광역시', '인천광역시','광주광역시', '대전광역시', '울산광역시', '세종특별지차시','경기도', '강원도', '충청북도', '충청남도','전라북도', '전라남도', '경상북도', '경상남도', '제주특별자치도']"
                          :default="'지역을 선택해주세요'"
                          class="select"
                          @input="editResidence($event)"
                        />
                      </div>
                      <div class="col-md-12 mr-auto ">
                        <custom-select
                          :options="['사무직', '노동직', '가정주부', '자영업','학생', '농림어업', '무직', '기타']"
                          :default="'직업선택'"
                          class="select"
                          @input="editJob($event)"
                        />
                      </div>
                      <div class=" row col-md-12 mr-auto"  style="padding-left:30px">
                          <n-radio  class=" col-md-6 p-0 m-0" v-model="editData.married" label="false">미혼</n-radio>
                          <n-radio  class=" col-md-6 p-0 m-0 pb-2" v-model="editData.married" label="true">기혼</n-radio>

                      </div>
                      <div class="col-md-12 mr-auto ">
                        <custom-select
                          :options="['중학교 이하', '고등학교', '전문대학', '대학교','대학원 이상']"
                          :default="'학력선택'"
                          class="select"
                          @input="editAcademic($event)"
                        />
                      </div>
                      <div class="col-md-12 mr-auto ">
                        <custom-select
                          :options="['1000만원 이하', '1000~3000 만원', '3000~5000 만원', '5000~7000 만원', '7000~9000 만원', '9000~1억원', '1억원 이상']"
                          :default="'소득수준'"
                          class="select"
                          @input="editIncome($event)"
                        />
                      </div>

                  </div>



                </div>
<!-- v-else -->

              </card>
            </div>

          </div>
          
        </div>
        

      </div>
    </div>


    <modal :show.sync="EditSucceed" headerClasses="justify-content-center pt-0" class="modal-primary" type="mini" >
      <h5 slot="header" class="title title-up pb-0">알림</h5>
        <h6 class="text-center">
          성공적으로 수정하였습니다
        </h6>
      <template slot="footer">
        <n-button  class="btn btn-round btn-block btn-neutral btn" 
          type="button"
          @click="refresh">
          확인
        </n-button>
      </template>
    </modal>

  </div>
</template>
<script>
import { Card, Tabs, TabPane, FormGroupInput, Radio, Modal} from '@/components';
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
    [Radio.name]: Radio,
    Modal,

  },
  data(){
    // MySeclet
    return {
      isEditing: false,
      EditSucceed:false,
      editData:{
            name: null,
            birthYear: null,
            phone1: null,
            phone2: null,
            phone3: null,
            residence: null,
            job: null,
            married: null,
            academic: null,
            income: null,
      },
      
      
      
    }
  },
  computed:{
    },
  mounted(){

  },
  methods:{
    
    editJob(val){
      this.editData.job = val;
    },
    editResidence(val){
      this.editData.residence = val;
    },
    editAcademic(val){
      this.editData.academic = val;
    },
    editIncome(val){
      this.editData.income = val;
    },
    ButtonForEdit(){
      if(this.isEditing){
        this.isEditing = false;
      }
      else{
        this.isEditing = true;
      }
    },
    PostUserData(){
        let userAddInfo = {
            id: this.$store.state.userInfo.id,
            name: this.editData.name,
            birthYear: this.editData.birthYear,
            phone1: this.editData.phone1,
            phone2: this.editData.phone2,
            phone3: this.editData.phone3,
            residence: this.editData.residence,
            job: this.editData.job,
            married: this.editData.married,
            academic: this.editData.academic,
            income: this.editData.income,
            confirm: false,
        }
        let request = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userAddInfo)
        };
        console.log(JSON.stringify(userAddInfo));
        fetch("/api/member", request)
        .then(response=>response.json())
        .catch(error=>console.log(error));

      this.EditSucceed = true;
    },
    refresh(){
      this.$router.go();
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
