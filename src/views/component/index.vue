<template>
  <div>
    主页面 <br/>
    <button @click="handleClick1">点击记载组件1</button><br/>
    <button @click="handleClick2">点击记载组件2</button><br/>
    <component :is="child1"></component>
    <component :is="child2"></component>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class AsyncComponent extends Vue {
  public child1:any = null;
  public child2:any = null;
  handleClick1() {
    this.child1 = require('./child1').default;
  }
  handleClick2() {
    this.child2 = require('./child2').default;
  }
}
</script>
