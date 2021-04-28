<template>
  <div>
    {{ obj.currentName }} <br/>
    <Child />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Child from './child.vue';
@Component({
  components: {
    Child,
  },
})
export default class ProvideInject extends Vue {
  public name = 'parent';
  @Provide()
  obj = {
    currentName: this.name,
    initData: this.initData,
  };
  initData() {
    console.log('Parent Init Data');
  }
}
</script>
