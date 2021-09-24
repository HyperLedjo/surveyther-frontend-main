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
        <p class="category">{{$store.state.userInfo.id}}</p>
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
          <a href="#button" class="btn btn-primary btn-round btn-lg">로그아웃</a>
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
          <card>
            <div>
              <h3 class=""><b>My Wallet</b></h3>
              <!-- <hr> -->
              <h6>지갑주소: {{$store.state.userInfo.wallet}}</h6> 
              <h4>보유토큰    <b>{{$store.state.userInfo.tokenAmount}}</b></h4>
            </div>
          </card>
          <div class="row">
            <div class="col-md-3 mr-auto ">
              <card>
                <h6 class="my-4">내정보보기</h6>
                <h6 class="my-4">등록한서베이</h6>
                <h6 class="my-4">보유서베이</h6>
                <h6 class="my-4">보유상품권</h6>
              </card>
            </div>

            <div class="col-md-9 ml-auto ">
              <card>
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
                <div class="row ">
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
                      <h6 class="my-3">-</h6>
                      <h6 class="my-3">-</h6>
                      <h6 class="my-3">-</h6>
                      <h6 class="my-3">-</h6>
                      <h6 class="my-3">-</h6>
                      <h6 class="my-3">-</h6>
                      <h6 class="my-3">-</h6>
                    </b>
                  </div>
                </div>


              </card>
            </div>

          </div>
          
        </div>
        

        <!-- <h3 class="title">About me</h3>
        <h5 class="description">
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
          records all of his own music, giving it a warm, intimate feel with a
          solid groove structure. An artist of considerable range.
        </h5>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">My Portfolio</h4>
          </div>
          <tabs
            pills
            class="nav-align-center"
            tab-content-classes="gallery"
            tab-nav-classes="nav-pills-just-icons"
            type="primary"
          >
            <tab-pane title="Profile">
              <i slot="label" class="now-ui-icons design_image"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg6.jpg" class="img-raised" />
                    <img src="img/bg11.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Home">
              <i slot="label" class="now-ui-icons location_world"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg1.jpg" alt="" class="img-raised" />
                    <img src="img/bg3.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Messages">
              <i slot="label" class="now-ui-icons sport_user-run"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg3.jpg" alt="" class="img-raised" />
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                    <img src="img/bg6.jpg" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>
          </tabs>
          
        </div> -->

      </div>
    </div>
  </div>
</template>
<script>
import { Card, Tabs, TabPane } from '@/components';
import {EventBus} from '@/main.js';


export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
    // Tabs,
    // TabPane,
    Card
  }
};
</script>
<style></style>
