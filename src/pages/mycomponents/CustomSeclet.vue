<template>
  <div class="my-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.my-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 35px;
}

.my-select .selected { 
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid #E3E3E3;
  color: rgb(63, 63, 63);
  padding-left: 1.3em;
  font-size:11.5px;
  cursor: pointer;
  user-select: none;
}

.my-select .selected.open {
  border: 1px solid #5fa4ab;
  border-bottom: 1px solid #E3E3E3;
  border-radius: 18px 18px 0px 0px;
}

.my-select .selected:after {
  position: absolute;
  content: "";
  top: 17px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #E3E3E3 transparent transparent transparent;
}

.my-select .items {
  color: rgb(202, 35, 35);
  border-radius: 0px 0px 18px 18px;
  overflow: hidden;
  border-right: 1px solid #5fa4ab;
  border-left: 1px solid #5fa4ab;
  border-bottom: 1px solid #5fa4ab;
  position: absolute;
  background-color: #ffffff;
  left: 0;
  right: 0;
  z-index: 1;
}

.my-select .items div { 
  color: rgb(63, 63, 63);
  font-size:11.5px;

  padding-left: 1.3em;
  cursor: pointer;
  user-select: none;
}

.my-select .items div:hover {
  background-color: rgb(240, 240, 240);
}

.selectHide {
  display: none;
}
</style>
