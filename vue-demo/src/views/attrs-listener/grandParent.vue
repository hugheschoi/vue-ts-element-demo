<template>
  <div>
    <Parent :parentName="parentName" :childName="childName" @on-child-click="handleChildClick" />
  </div>
</template>
<script lang="ts">
import Parent from './parent.vue';
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  components: {
    Parent,
  },
})
export default class GrandParent extends Vue {
  public parentName = 'parent';
  public childName = 'child';
  public handleChildClick(name: string) {
    alert('child name: ' + name);
  }
}
</script>
