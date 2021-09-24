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
          <h1 class="title"> Free Survey Detail</h1>
        </div>
      </div>
    </div>

    
    <div class="space">
            <free-detail></free-detail>    
    </div>

  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';

import FreeDetail from './mycomponents/FreeDetail.vue';


export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    FreeDetail
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

.question-card{
    padding-top:100px;
}

</style>
