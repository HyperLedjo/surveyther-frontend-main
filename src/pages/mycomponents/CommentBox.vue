<template>
<card>
              <div class="">

                <div id="inputs">
                    <div class="row card-form ">

                        <div class="col-md-12">
                          <h5><b>댓글</b> </h5>
                          <hr>
                        </div>
<!-- {{commentData}} -->
                        <div class="col-md-12" v-for="(comment) in this.commentData" :key="comment">
                          <h7><b class="col-md-3">{{comment.userId}}</b> {{comment.regDate}} </h7>
                          <div>
                          <h8 class="col-md-12"> {{comment.content}}</h8> 
                          </div>
                          <hr style="border:0px">
                        </div>

                        <!-- <div class="col-md-12">
                          <h7><b class="col-md-3">user_id</b>{{commentCreate.regDate}}</h7>
                          <div>
                          <h8 class="col-md-12"> 댓글입니다 댓글입니다 댓글입니다</h8> 
                          </div>
                          <hr style="border:0px">
                        </div> -->
<!-- 댓글작성 -->
                        <div class="textarea-container col-md-12 mr-auto p-4 commnet-box ">
                          <h7 class="col-md-10 p-1"><b>{{commentCreate.user_id}}</b> </h7>
                          <button type="button" class="btn btn-primary btn-round col-md-2 pull-right m-0" @click="postComment">
                                댓글등록
                          </button>
                          <textarea name="commnet" id="comment" cols="100%" rows="100%" placeholder="댓글을 남겨보세요..."
                          class="form-control p-0" v-model="commentCreate.content"></textarea>
                          <!-- <button type="button" class="btn btn-primary btn-round btn-lg"> 댓글등록</button> -->
                          <!-- <a href="" class="btn btn-primary btn-round btn-lg commnet-button">댓글등록</a> -->
                        </div>

                        
                        
                    </div>
                </div>
              </div>
          </card>
</template>
<script>
import { Card,  Radio, FormGroupInput, } from '@/components';


export default {
    components:{
        Card,
        // [Radio.name]: Radio,
        // [FormGroupInput.name]: FormGroupInput,
    },
    data(){
        return {
          commentData:[
            // {
            //   id: null,
            //   user_id: 1,
            //   survey_id: null,
            //   content: null,
            //   regDate:null,
            // },
          ],
          commentCreate:{
            // id: null,
            user_no: this.$store.state.userInfo.no,
            user_id: this.$store.state.userInfo.id,
            survey_id: this.$route.params.surveyId,
            content: null,
            // regDate:this.today(),
          },
        }
    },
    methods:{
      today(){
        var today = new Date();

        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜

        let hours = today.getHours(); // 시
        let minutes = today.getMinutes();  // 분
        let seconds = today.getSeconds();  // 초

        return year + '.' + month + '.' + date + '  ' + hours + ':' + minutes;
        // return today;
      },
      postComment(){
        let comment = {
          memberId: this.commentCreate.user_no,
          surveyId: this.commentCreate.survey_id,
          content: this.commentCreate.content,
        }
        let request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment)
        };
        // console.log(JSON.stringify(request));

        fetch("/api/comment", request)
        .then(response=>response.json())
        .catch(error=>console.log(error));

        this.updateCommentData();
        this.commentCreate.content = '';
      },
      updateCommentData(){
        fetch('/api/comments/' + this.$route.params.surveyId).then(response => response.json()).then(
          data => {
            // console.log(data.length);
              this.commentData = [];
            for(let i = 0; i < data.length; i++){
              this.commentData.push({
                    id: data[i].no,
                    userId: data[i].memberId,
                    surveyId: data[i].surveyId,
                    content: data[i].content,
                    regDate: data[i].regDate.slice(0,10) + '  ' + (data[i].regDate.slice(11,13)-3)+''+ data[i].regDate.slice(13,19),
                
              })
            }
          }
        );
      }
    },
    created(){
      this.updateCommentData();
    },
    computed:{

    },
    beforeUpdate () {
      this.updateCommentData();
    },
}
</script>
  