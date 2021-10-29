<template>
  <div class="" >
        <div class="page-header page-header-small">
          <parallax
              class="page-header-image"
              style="background: linear-gradient(141deg, rgba(81,58,180,1) 1%, rgba(196,29,253,1) 17%, rgba(240,139,112,1) 54%, rgba(255,235,60,1) 94%)"
          >
          </parallax>
          <div class="content-center">
              <div class="container"> 
              <h1 class="title">Reward Shop </h1>
              
              </div>
          </div>
        </div>

    <div class="container">
      <!-- <card>
        <div>
          
        </div>
      </card> -->

      <div class="row p-5">

        <v-list-tile v-for="product in $store.state.rewardshop"
        :key="product" class="col-md-4 mr-auto">
            <card class="p-2">
              <img src="img/reward.jpg" alt="">
              <h6 class="category category-absolute">{{product.comp}}</h6>
              <h6 class="">{{product.product}}</h6>
              <h5 class="mt-4"><b> {{product.price}}</b> 토큰</h5>
              <button type="button" class="btn btn-round btn-block btn-primary btn-lg m-0" @click="checkUser">
                 구매하기 
              </button>
            </card>
        </v-list-tile>
        
        

        

      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput, Card } from '@/components';

export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  },
  methods:{
    checkUser(){
      if(this.$store.state.isUser){
        this.buyProduct();
      }else{
        this.$store.state.loginAlert = true;
      }

    },
    buyProduct(){
      console.log("buy it!!")
    }
  }
};
</script>
<style>


</style>
