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
            <h1 class="title">List of Free Survey </h1>
            
            </div>
        </div>
        </div>

    <div class="space">
            <list-free></list-free>    
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';

import ListFree from './mycomponents/ListFree.vue';


export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    ListFree,
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
