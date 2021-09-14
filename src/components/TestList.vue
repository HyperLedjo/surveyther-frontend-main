<template>
  <div class="test">
    <button v-on:click="getTestList">조회</button>
    <div
      v-for="(m, i) in msg"
      v-bind:key="i"
    >사원번호: {{m.employee_id}} | 이름: {{m.first_name}} | 봉급: {{m.salary}}</div>
  </div>
</template>

<script>
export default {
  name: "TestList",
  data() {
    return {
      msg: []
    };
  },
  methods: {
    getTestList() {
      fetch("http://localhost:8082/api/test", { method: "GET" })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.msg = data;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
