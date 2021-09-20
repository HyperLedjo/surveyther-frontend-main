<template>
  <div class="container black">
      <div class="mybox red">
            <img class="left-box img-info" src="img/bg7.jpg" alt="" />
            <div class="right-box">
                    <h4><b> 서베이작성</b></h4>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at.
                    </p>
                    <a href="#/survey_create"><button class="btn btn-round btn-primary">보러가기</button></a>
            </div>    
                
      </div>

      <div class="mybox red">
            <div class="left-box img-info">
                <h4><b> 서베이구매</b></h4>
                <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at.
                </p>
                <button class="btn btn-round btn-primary">보러가기</button>
            </div>
            <img class="right-box" src="img/bg7.jpg" alt="" />
      </div>

      <div class="mybox red">
            <img class="left-box img-info" src="img/bg7.jpg" alt="" />
            <div class="right-box">
                    <h4><b> 커뮤니티</b></h4>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at.
                    </p>
                    <button class="btn btn-round btn-primary">보러가기</button>
            </div>    
                
      </div>

      <div class="mybox red">
            <div class="left-box img-info">
                <h4><b> 리워드샵</b></h4>
                <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at.
                </p>
                <button class="btn btn-round btn-primary">보러가기</button>
            </div>
            <img class="right-box" src="img/bg7.jpg" alt="" />
      </div>
      
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.black{
    /* background: rgb(48, 48, 48); */
}
.red{
    /* background: rgb(255, 97, 97); */

}
.img-info{
    
    height: 300px;
}
.mybox{
    height: 500px;
    padding-top: 100px;
    padding-bottom: 100px;
}
.mybox > img{
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
    width:46%;
    /* margin-top:5%; */

}



</style>
