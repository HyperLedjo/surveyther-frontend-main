<template>
  <div class="">
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background: linear-gradient(169deg, rgba(35,20,255,1) 0%, rgba(207,15,255,1) 100%)"
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
        <div class="container">
            <detail></detail>    
            <comment-box></comment-box>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { Parallax, Button, FormGroupInput } from '@/components';

import Detail from './mycomponents/Detail.vue';
import CommentBox from './mycomponents/CommentBox.vue';



export default {
  components: {
    Parallax,
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
