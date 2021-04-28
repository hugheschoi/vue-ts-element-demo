<template>
  <div>
    动态组件1
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Child1 extends Vue {
  mounted() {
    console.log('动态组件1');
  }
}
</script>
