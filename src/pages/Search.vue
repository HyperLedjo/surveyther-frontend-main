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
          <h1 class="title" style="margin-top:80px">Search</h1>
            <card class="rounded-pill" style="height: 88px; width:800px; margin-top:20px">
                <div class="row" style="margin:-10px; margin-left:-30px; margin-right:-30px;">
                    <fg-input
                        class="input-lg col-md-9"
                        style="margin-top: 10px; padding-left:40px;"
                        placeholder="검색어를 입력해주세요"
                        v-model="form.firstName"
                        addon-left-icon="now-ui-icons ui-1_zoom-bold"
                        >
                    </fg-input>
                    <div class="col-md-3 p-0">
                        <button class="btn btn-primary btn-round btn-lg">검색</button>

                    </div>
                </div>
            </card>
        </div>
      </div>
    </div>
    
    <div class="section">
        <div class="container">
            <div class="button-container">
                <!-- <div class="btn btn-primary btn-round btn-lg">
                    test
                </div> -->
            </div>
        </div>
    </div>
    
    
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
export default {
//   name: 'search',
//   bodyClass: 'search-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Card

  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: '',
      }
    };
  }
};
</script>
<style></style>
