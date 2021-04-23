<template>
  <div>
    {{ parentName }}
    <Child v-bind="$attrs" v-on="$listeners"/>
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
  @Prop({ default: '' }) public parentName!: string;
}
</script>