<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Survey Detail</h1>
        </div>
      </div>
    </div>

    
    <div class="space">
      <div class="question-location ">
        <div class="container" >
            <detail></detail>    
            <comment-box></comment-box>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';

import Detail from './mycomponents/Detail.vue';
import CommentBox from './mycomponents/CommentBox.vue';



export default {
  components: {
    // Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Detail,
    CommentBox,

  },
  data() {
    return {
    };
  }
};
</script>
<style>


</style>
