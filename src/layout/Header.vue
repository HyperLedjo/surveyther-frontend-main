<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <b>Surveyther</b> 
      </router-link>

      <!-- <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded by Creative Tim
        </div>
      </el-popover> -->

    </template>
    <template slot="navbar-menu" id="signIn()">
      <li class="nav-item">
        <a
          class="nav-link"
          href="/about"
          target="_blank"
        >
          <!-- <i class="now-ui-icons arrows-1_cloud-download-93"></i> -->
          <p>About</p>
        </a>
      </li>

      <drop-down
              tag="li"
              title="서베이참여"
              icon="now-ui-icons files_paper"
              class="nav-item"
      >
        
        <nav-link to="/survey/진행중/부동산"> 부동산
            <router-link :to="{name: 'survey_list', params: { status:'진행중', category: '부동산' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/진행중/유통"> 유통
            <router-link :to="{name: 'survey_list', params: { status:'진행중', category: '유통' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/진행중/식음료"> 식음료
            <router-link :to="{name: 'survey_list', params: { status:'진행중', category: '식음료' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/진행중/관광"> 관광
            <router-link :to="{name: 'survey_list', params: { status:'진행중', category: '관광' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/진행중/금융"> 금융
            <router-link :to="{name: 'survey_list', params: { status:'진행중', category: '금융' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/진행중/정보통신"> 정보통신
            <router-link :to="{name: 'survey_list', params: { status:'진행중', category: '정보통신' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/진행중/보건의료"> 보건의료
            <router-link :to="{name: 'survey_list', params: { status:'진행중', category: '보건의료' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/진행중/공공정책"> 공공정책
            <router-link :to="{name: 'survey_list', params: { status:'진행중', category: '공공정책' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/진행중/커뮤니티"> 커뮤니티
            <router-link :to="{name: 'survey_list', params: { status: null, category: '커뮤니티' } }">
            </router-link>
        </nav-link>

      </drop-down>

      <drop-down
              tag="li"
              title="서베이구매"
              icon="now-ui-icons business_chart-bar-32"
              class="nav-item"
      >
        <nav-link to="/survey/마감/부동산"> 부동산
            <router-link :to="{name: 'survey_list', params: { status:'마감', category: '부동산' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/마감/유통"> 유통
            <router-link :to="{name: 'survey_list', params: { status:'마감', category: '유통' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/마감/식음료"> 식음료
            <router-link :to="{name: 'survey_list', params: { status:'마감', category: '식음료' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/마감/관광"> 관광
            <router-link :to="{name: 'survey_list', params: { status:'마감', category: '관광' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/마감/금융"> 금융
            <router-link :to="{name: 'survey_list', params: { status:'마감', category: '금융' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/마감/정보통신"> 정보통신
            <router-link :to="{name: 'survey_list', params: { status:'마감', category: '정보통신' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/마감/보건의료"> 보건의료
            <router-link :to="{name: 'survey_list', params: { status:'마감', category: '보건의료' } }">
            </router-link>
        </nav-link>
        <nav-link to="/survey/마감/공공정책"> 공공정책
            <router-link :to="{name: 'survey_list', params: { status:'마감', category: '공공정책' } }">
            </router-link>
        </nav-link>
      </drop-down>

      <li class="nav-item">
        <a
          class="nav-link"
          href="/survey_create"
        >
        <!-- design-2_ruler-pencil -->
        <i class="now-ui-icons business_bulb-63"></i>
          <p>서베이작성</p>
        </a>
      </li>

      <!-- <drop-down
              tag="li"
              title="리워드샵"
              icon="now-ui-icons shopping_cart-simple"
              class="nav-item"
      >
        <nav-link to="/rewardshop">
            아이스크림
        </nav-link>
        <nav-link to="/#">
            커피
        </nav-link>
        <nav-link to="/#">
            베이커리
        </nav-link>
        <nav-link to="/#">
            편의점
        </nav-link>
        <nav-link to="/#">
            패스트푸드
        </nav-link>
      </drop-down> -->
      <li class="nav-item">
        <a
          class="nav-link"
          href="/rewardshop"
        >
        <i class="now-ui-icons shopping_cart-simple"></i>
          <p>리워드샵</p>
        </a>
      </li>
      

      <li class="nav-item" v-if="isUser">
        <a
          class="nav-link"
          href="/profile"
        >
        <i class="now-ui-icons users_circle-08"></i>
          <p>마이페이지</p>
        </a>
      </li>


              <!-- @mousedown="$commit.updateCurrentFilter('금융')" -->
      <li class="nav-item">
        <a
          class="nav-link"
          href="/search"
        >
        <i class="now-ui-icons ui-1_zoom-bold"></i>
          <!-- <p>마이페이지</p> -->
        </a>
      </li>


      <li class="nav-item" v-if="isUser">
        <n-button 
          class="nav-link btn btn-neutral" 
          type="neutral" 
          @click.native="modals.logout = true">
              로그아웃
        </n-button>
      </li>
      <li class="nav-item" v-else>
        <n-button 
          class="nav-link btn btn-neutral" 
          type="neutral" 
          @click.native="$store.state.loginAlert = true">
              로그인
        </n-button>
      </li>
    

    <!-- Login model -->
    <modal :show.sync="$store.state.loginAlert" headerClasses="justify-content-center" class="modal-primary" >
      <h4 slot="header" class="title title-up">로그인</h4>
      <div class="mx-5 ">
        
        <card class="card-signup" header-classes="text-center" >
          <template>
            <fg-input
                    class="no-border"
                    placeholder="Your ID"
                    addon-left-icon="now-ui-icons users_circle-08"
                  >
            </fg-input>
          </template>
          <template>
            <fg-input
                    class="no-border mb-0"
                    placeholder="Your Password"
                    addon-left-icon="now-ui-icons users_circle-08"
                  >
            </fg-input>
          </template>
        </card>
        <div class="row h6">
          <div class="col-md-6 mr-auto ">
            <n-checkbox class="mt-0" v-model="checkboxes.unchecked">아이디 저장</n-checkbox>
          </div>
          <div class="col-md-2 ml-auto mt-1 p-0">
            <a href="" class="text-right">회원가입</a>
          </div>
          <div class="col-md-12 ml-auto mt-3">
            <button type="button" class="btn btn-round btn-block btn-neutral btn-lg "><b>로그인</b></button>
          </div>
                                                    <!-- --------- -->
        </div>
        <div class="row h6">
            <div class="col-md-3 mr-auto p-0">
              <hr>
            </div>
            <div class="col-md-6 mr-auto text-center p-0 pt-2">
             <h6>또는 다른계정으로 로그인하기</h6> 
            </div>
            <div class="col-md-3 mr-auto p-0">
              <hr>
            </div>
            <div class="col-md-12 ml-auto">
            <button type="button" 
              @click="kakaoLogin"
              class="btn btn-round btn-block btn-lg"
              style="color:black; background:#FEE500;"
              >
              <b>카카오로 로그인</b> 
            </button>
          </div>
         </div>
      </div>
    </modal>

    <!-- Logout model -->
    <modal :show.sync="modals.logout" headerClasses="justify-content-center pt-0" class="modal-primary" type="mini" >
      <h5 slot="header" class="title title-up pb-0">로그아웃</h5>
        <h6 class="text-center">
          로그아웃 하시겠습니까?
        </h6>
      <template slot="footer">
        <n-button class="btn btn-round btn-block btn-primary btn" @click.native="modals.logout = false">
          취소
        </n-button>
        <button  class="btn btn-round btn-block btn-neutral btn col-md-6" 
          type="button"
          @click="kakaoLogout" >
          로그아웃
        </button>
      </template>
    </modal>

    </template>
  </navbar>
</template>

<script>
import { Button, DropDown, Navbar, NavLink, Modal,FormGroupInput, Checkbox } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-header',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Modal,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover,
    [Checkbox.name]: Checkbox
  },
  methods:{
    kakaoLogin() {
            this.$store.commit('kakaoLogin');
    },
    kakaoLogout(){
            this.$store.commit('kakaoLogout');
    },

    currentFilter(selected){
      this.$store.commit('updateCurrentFilter',selected);
      this.$store.dispatch('allSurvey')
    }
  },
  data() {
    return {
      modals: {
        login: false,
        logout: false
      },
      checkboxes: {
        unchecked: false,
      },
    };
  },
  mounted() {
    this.$store.dispatch('logIn');
  },
  beforeCreate(){
    this.$store.dispatch('allSurvey');

    // this.$store.dispatch('allQuestion');
    // this.$store.dispatch('allAnswer');
    // console.log('eeeeeeeeebeforecreate');
        
    },
    created(){
      // this.$store.dispatch('UserWallet');

    },
    
  computed: {
    isUser(){
      return this.$store.state.isUser;
    },
  }
};
</script>

<style scoped></style>
