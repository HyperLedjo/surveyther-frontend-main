<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
  name: 'app',
  data(){
    return {

    };
  },
  components:{

  },
  computed:{
    ...mapState({
      //json객체를 리턴함
    })
  },
  mounted(){
    console.log(this.$store);
  }
};
</script>
