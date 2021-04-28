<template>
  <div @click="handleClick">
    {{ childName }}
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export  default class Child extends Vue {
  @Prop({ default: '' }) public childName!: string;
  public handleClick() {
    this.$emit('on-child-click', this.childName);
  }
}
</script>