<template>
  <div class="container black" style="padding-top:300px">
      <div class="mybox red">
            <img class="left-box img-info" src="img/survey_sample.jpeg" alt="" />
            <div class="right-box">
                    <h4><b>PARTICIPATE</b></h4>
                    <p>
                        많은 서베이가 당신의 소중한 의견을 기다리고있어요!
                        지금 서베이에 참여하고 더 많은 토큰을 모아보세요! 
                    </p>
                    <a href="/survey/진행중/부동산"><button class="btn btn-round btn-primary btn-lg">보러가기</button></a>
            </div>    
                
      </div>

      <div class="mybox red">
            <div class="left-box img-info">
                <h4><b>PURCHASE</b></h4>
                <p>
                    회사나 연구에 설문조사가 필요한가요? 서베이더에 비슷한 설문조사가 이미 있는지 찾아보고 구매하세요!
                </p>
                <a href="/survey/마감/부동산"><button class="btn btn-round btn-primary btn-lg">보러가기</button></a>

            </div>
            <img class="right-box" src="img/survey_buy.jpeg" alt="" />
      </div>

      <div class="mybox red">
            <img class="left-box img-info" src="img/survey_create.jpeg" alt="" />
            <div class="right-box">
                    <h4><b> FILL OUT</b></h4>
                    <p>
                        나만의 서베이를 보상과 함께 등록해보세요! 지불금액을 원하는만큼 지정하여 지불할수있으며, 지불금액은 참여자에게 보상으로 돌아갑니다! 
                    </p>
                    <a href="/survey_create"><button class="btn btn-round btn-primary btn-lg">보러가기</button></a>

            </div>    
      </div>

      <div class="mybox red">
            <div class="left-box img-info">
                <h4><b>SHOPPING</b></h4>
                <p>
                    참여후 받은 토큰으로 리워드샵에서 아이스크림, 커피 등 다양한 모바일 상품권으로 교체할수 있어요! 
                </p>
                <a href="/rewardshop"><button class="btn btn-round btn-primary btn-lg">보러가기</button></a>

            </div>
            <img class="right-box" src="img/reward.jpeg" alt="" />
      </div>

      <!-- <div class="mybox red">
            <img class="left-box img-info" src="img/bg7.jpg" alt="" />
            <div class="right-box">
                    <h4><b> 리워드샵</b></h4>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at.
                    </p>
                    <button class="btn btn-round btn-primary btn-lg">보러가기</button>
            </div>    
      </div> -->
      
  </div>
</template>
<script>
export default {
  
}
</script>
<style>

.img-info{
    
    height: 400px;
}
.mybox{
    height: 500px;
    padding-top: 100px;
    padding-bottom: 100px;
}
.img{
    width:48%;
}
.mybox > div{
    width:45%;
}
.left-box{
    float:left;
    margin-left:0px;
}
.right-box{
    float:right;
    width:38%;
    /* margin-top:5%; */

}



</style>
