<template>
  <div>
    {{ name }} <br/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Bus } from '@/utils/event-bus';
@Component({})
export default class EventBus extends Vue {
  public name = '';
  public mounted() {
    Bus.$on('changeName', (name: string) => {
      console.log('getName', name);
    });
  }
}
</script>
