<template>
  <div class="" >
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Create your own survey.</h1>
          
        </div>
      </div>
    </div>

    <!-- <div class="block-title">
        <div class="container">
            <create-title></create-title>
        </div>

    </div>
    <div class="container">
        <div class="black">
            
        </div>
    </div> -->
    <div class="space">
            <create-questions></create-questions>    
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';

import CreateQuestions from './mycomponents/CreateQuestions.vue';


export default {
  name: 'create',
  bodyClass: 'create-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    CreateQuestions
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style>
.block-title{
    /* height:600px; */
    /* background: gray; */
    /* margin-top:500px; */
}
.mycheck{
    /* background: gray; */
}
.space{
    /* height:2000px; */
    /* background: red; */
    padding-bottom:1400px;
    

}
.question-location{
    position: absolute;
    top:400px;
    /* align-content:center; */
    width:100%;
    background: rgb(82, 82, 82, 0);
    /* opacity: 0.5; */
    padding-left: 200px;
    padding-right: 200px;
}
.question-card{
    padding-top:100px;
}

</style>
