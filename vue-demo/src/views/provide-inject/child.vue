<template>
  <div>
    {{ name }} <br/>
    {{ obj.currentName }}
    <button @click="handleChangeParentName">Change Parent Name</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';
@Component({})
export default class Child extends Vue {
  public name = 'child';
  @Inject() obj:object;
  handleChangeParentName() {
    console.log(this.obj);
    this.obj.currentName = 'parent2';
    this.obj.initData();
  }
}
</script>
