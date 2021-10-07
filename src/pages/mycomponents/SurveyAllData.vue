<template>
    <div class="">
        <div class="container" >
          <card>
            <div>
               
            </div>

          </card>
          <!-- card -->
            

            <v-list-tile
            v-for="(survey) in $store.state.surveyAllData"
            :key="survey"
            >
                <a href="/survey_ongoing/detail">
              <card >
                  <div >

                    <div id="inputs">
                        <div class="row card-form">

                            <div class="col-sm-6 col-lg-12">
                              <span class="badge badge-primary mr-1">부동산</span>
                              <span class="badge badge-success mr-1">진행중</span>
                                <span class="badge badge-warning">{{survey.paymAmount*0.98}}</span>
                                <span><b> {{survey.title}}</b></span> 
                            </div>
                            <!-- <div class="col-sm-6 col-lg mt-1">
                                <b> <h6>서베이 타이틀입니다</h6></b>
                            </div> -->
                            <div class="surv-disc col-sm-6 col-lg-12 mt-1">
                                <h6> {{survey.subtitle}}</h6>
                            <hr style="border: solid 1px rgb(200,200,200);">
                            </div>
                            <div class="col-sm-6 col-lg-5">
                              <span class="badge badge-neutral mr-1">#태그</span>
                              <span class="badge badge-neutral mr-1">#서베이</span>
                              <span class="badge badge-neutral mr-1">#tag</span>
                              <span class="badge badge-neutral mr-1">#sample</span>
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-3">
                                <span class="mr-4">남은보상<b>{{survey.targetAmount-survey.currentAmount}}</b></span>
                                <span>마감 <b>{{survey.tillClose}}</b> 일전</span>
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-2">
                                <span class="ml-3">{{survey.regDate}}</span> 
                            </div>
                            <div class="surv-disc col-sm-6 col-lg-2">
                                <span class="ml-4 now-ui-icons ui-2_chat-round"> {{survey.commentCount}}</span> 
                                <span class="ml-4 now-ui-icons ui-2_favourite-28"> {{survey.likeCount}}</span> 
                            </div>
                        </div>
                    </div>

                  </div>
              </card>
            </a>
            </v-list-tile>

<!-- teste -->
            <!-- <v-list-tile
            v-for="(user, index) in $store.state.tests"
            :key="user"
            >
            <h5>index: {{index}}------id: {{user.id}}-------sample: {{user.sample}}</h5>
            </v-list-tile> -->

          

        </div>
    </div>
</template>
<script>
import { Card } from '@/components';
import {EventBus} from '@/main.js';

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
    // [Radio.name]: Radio,
    [FormGroupInput.name]: FormGroupInput,
    // [Switch.name]: Switch,
    // [Option.name]: Option,
    // Slider
  },
  data(){
    return{
      // tests:[
      //   {id: 1, sample:'one'},
      //   {id: 2, sample:'two'},
      //   {id: 3, sample:'three'}
      // ]

    }
  },
  mounted(){
    // EventBus.$on('signUp',  sample => {
    //   this.$store.state.tests.push(sample)
    // })
  }
  
};
</script>
<style>
/* .title-location{
    position: absolute;
    top:360px;
    width:100%;
    background: rgb(82, 82, 82, 0);
}
.card-form{
    padding:15px;
}
.card-maxline{
    width:100%;
}
.surv-disc{
  color: rgb(156, 156, 156);
} */
</style>
