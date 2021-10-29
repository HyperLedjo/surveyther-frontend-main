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
                    <h4>여기점</h4>
                    <p1>
                    간단한 사이트 소개글 같은거 세가지로 분류해서 넣어주세요! 간단한 사이트 소개글 같은거 세가지로 분류해서 넣어주세요!mycompononts/MainInfo.vue
                    </p1>
                </div>
                <div class="card-container" style="width:30%">
                    <img class="info-img" src="img/now-logo.png" alt="" />
                    <h4>채워</h4>
                  <p1>
                    간단한 사이트 소개글 같은거 세가지로 분류해서 넣어주세요! 간단한 사이트 소개글 같은거 세가지로 분류해서 넣어주세요!
                  </p1>
                </div>
                
                <div class="card-container" style="width:30%">
                  <img class="info-img" src="img/now-logo.png" alt="" />
                  <h4>주세유</h4>
                  <p1>
                  간단한 사이트 소개글 같은거 세가지로 분류해서 넣어주세요! 간단한 사이트 소개글 같은거 세가지로 분류해서 넣어주세요!
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
