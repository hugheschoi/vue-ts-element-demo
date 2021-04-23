<template>
  <button @click="handleClick">add</button>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import cloneDeep from './util';
@Component({})
export  default class Child extends Vue {
  @Prop() public value!: Array<number>;
  get currentData() {
    return cloneDeep(this.value);
  }
  set currentData(val: Array<number>) {
    this.$emit('input', val);
  }
  public handleClick() {
    this.currentData.push(this.currentData[this.currentData.length - 1] + 1);
  }
}
</script>