<template>
  <div class="" >
        <div class="page-header page-header-small">
          <parallax
              class="page-header-image"
              style="background-image: url('img/bg-shop.jpeg')"
          >
          </parallax>
          <div class="content-center">
              <div class="container"> 
              <h1 class="title">Reward Shop </h1>
              
              </div>
          </div>
        </div>

    <div class="container">
      <!-- style="background: yellow" -->
      <card>
        <div>
          
        </div>
      </card>

      <div class="row">

        <!-- <div class="col-md-4 mr-auto">
          <card>
            <img src="img/reward.jpg" alt="">
            <h6 class="category category-absolute">스타벅스</h6>
            <h6 class="">아이스 아메리카노 T</h6>
            <h5 class="mt-4"><b> 4100</b> 토큰</h5>
            <button type="button" class="btn btn-round btn-block btn-primary btn-lg"> 구매하기 </button>
          </card>
        </div> -->

        <v-list-tile v-for="product in $store.state.rewardshop"
        :key="product" class="col-md-4 mr-auto">
            <card>
              <img src="img/reward.jpg" alt="">
              <h6 class="category category-absolute">{{product.comp}}</h6>
              <h6 class="">{{product.product}}</h6>
              <h5 class="mt-4"><b> {{product.price}}</b> 토큰</h5>
              <button type="button" class="btn btn-round btn-block btn-primary btn-lg"> 구매하기 </button>
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
  }
};
</script>
<style>


</style>
