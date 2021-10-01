<template>
<card>
              <div class="">

                <div id="inputs">
                    <div class="row card-form ">

                        <div class="col-md-12">
                          <h5><b>댓글</b> </h5>
                          <hr>
                        </div>

                        <div class="col-md-12">
                          <h7><b class="col-md-3">user_id</b> 2021.08.27 </h7>
                          <div>
                          <h8 class="col-md-12"> 댓글입니다 댓글입니다 댓글입니다 댓글입니다</h8> 
                          </div>
                          <hr style="border:0px">
                        </div>

                        <div class="col-md-12">
                          <h7><b class="col-md-3">user_id</b> 2021.08.27 </h7>
                          <div>
                          <h8 class="col-md-12"> 댓글입니다 댓글입니다 댓글입니다</h8> 
                          </div>
                          <hr style="border:0px">
                        </div>

                        <div class="textarea-container col-md-12 mr-auto p-4 commnet-box">
                          <h7><b>user_id</b> </h7>
                          <textarea name="commnet" id="comment" cols="100%" rows="100%" placeholder="댓글을 남겨보세요..."
                          class="form-control "></textarea>
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
        return {}
    }
}
</script>
  