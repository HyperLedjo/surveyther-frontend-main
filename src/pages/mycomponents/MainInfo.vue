<template>
  <div class=""  style="position: absolute; top:900px;" >
    <div class="">
      

      <div class="">
        <div class="col-md-10 ml-auto col-xl-8 mr-auto">
          
          <!-- Nav tabs -->
          <card>
            <tabs
              slot=""
              tab-content-classes=" text-center"
            >
              <div class="text-box">
                
                <div class="card-container" style="width:30%">
                    <img class="info-img" src="img/now-logo.png" alt="" />
                    <h4>BLOCKCHAIN</h4>
                    <p1>
                    SURVEYTHER는 블록체인 기술을 활용해 서베이 조작, 중복참여, 대리 응답 등의 부정 행위를 방지하고, 사용자에게 믿을 수 있는 서베이 데이터를 제공합니다. 
                    </p1>
                </div>
                <div class="card-container" style="width:30%">
                    <img class="info-img" src="img/now-logo.png" alt="" />
                    <h4>REWARD</h4>
                  <p1>
                    SURVEYTHER는 단순히 서베이를 등록하고 참여하는 서비스가 아닙니다. 누구나 쉽게 전문적인 서베이를 만들고, 언제 어디서든 참여 및 공유가 가능합니다.
                    지금 서비스에 존재하는 서베이에 참여하고 보상을 받으세요. 
                  </p1>
                </div>
                
                <div class="card-container" style="width:30%">
                  <img class="info-img" src="img/now-logo.png" alt="" />
                  <h4>EXCHANGE</h4>
                  <p1>
                  SURVEYTHER는 여러분이 만든 서베이 데이터도 자산이라고 생각하고 기획, 개발된 서비스입니다. SURVEYTHER를 이용해 여러분의 서베이에 진정한 가치를 부여하세요.
                  </p1>
                </div>
                
              </div>
              
            </tabs>
          </card>
        </div>

        
      </div>
      
    </div>
  </div>
</template>
<script>
import { Card, Tabs, TabPane } from '@/components';

export default {
  components: {
    Card,
    Tabs
  }
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
.move-top{
    /* padding-right: -110px;
    border-top: 200px; */
    float:top;
    margin-bottom:300px;
    background:black;
    height: 90px;
}
.text-box{
  display: flex;
  justify-content: space-between;
  /* padding-bottom: 100px; */
  /* padding-bottom-color: blue; */
}
.text-box > div {
  width: 130px;
  padding-right: 30px;
  padding-left: 30px;
  /* background: linear-gradient(-45deg, #788cff, #b4c8ff); */
}
.info-img{
  width:40px;
  /* padding-bottom: 20px; */
}
</style>
