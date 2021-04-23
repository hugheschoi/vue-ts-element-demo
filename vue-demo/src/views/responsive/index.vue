<template>
  <div>
    {{ childData }}
    <Child v-model="childData"/>
  </div>
</template>
<script lang="ts">
import Child from './child.vue';
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  components: {
    Child,
  },
})
export default class Parent extends Vue {
  public childData = [1, 2, 3];
}
</script>