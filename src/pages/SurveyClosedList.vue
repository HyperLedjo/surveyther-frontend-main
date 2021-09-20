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
            <h1 class="title">List of closed Survey </h1>
            <div class="text-center">
                <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-facebook-square"></i>
                </a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-google-plus"></i>
                </a>
            </div>
            </div>
        </div>
        </div>

    <div class="space">
            <list-closed></list-closed>    
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';

import ListClosed from './mycomponents/ListClosed.vue';


export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    ListClosed
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


</style>
