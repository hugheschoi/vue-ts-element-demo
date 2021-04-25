<template>
  <div>
    {{ childData }} <br/>
    {{ changeTimes }} <br/>
    <Child v-model="childData" :changeTimes.sync="changeTimes"/>
  </div>
</template>
<script lang="ts">
import Child from './child.vue';
import { Component, Vue, Prop, Mixins } from 'vue-property-decorator';
import CommonMixins from "@/views/responsive/mixin";
@Component({
  components: {
    Child,
  },
})
export default class Parent extends Mixins(CommonMixins) {
  public childData = [1, 2, 3];
  public changeTimes = 1;
}
</script>
