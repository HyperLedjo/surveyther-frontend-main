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
            <h1 class="title">List of Ongoing Survey </h1>
            
            </div>
        </div>
        </div>

    <div class="space">
            <list-ongoing></list-ongoing>    
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';

import ListOngoing from './mycomponents/ListOngoing.vue';


export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    ListOngoing,
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
