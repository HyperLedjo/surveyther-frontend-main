<template>
  <div class=""  style="position: absolute; top:830px;" >
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
                    <h4>surveyther</h4>
                    <p1>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. ??
                    </p1>
                </div>
                <div class="card-container" style="width:30%">
                    <img class="info-img" src="img/now-logo.png" alt="" />
                    <h4>surveyther</h4>
                  <p1>
                    So when you get something that has the name Kanye
                    West on it, it’s supposed to be pushing the furthest
                    possibilities. 
                  </p1>
                </div>
                
                <div class="card-container" style="width:30%">
                  <img class="info-img" src="img/now-logo.png" alt="" />
                  <h4>surveyther</h4>
                  <p1>
                  I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture.
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
  width: 100px;
  /* background: linear-gradient(-45deg, #788cff, #b4c8ff); */
}
.info-img{
  width:40px;
  /* padding-bottom: 20px; */
}
</style>
