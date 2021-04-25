<template>
  <div>
    {{ name }} <br/>
    <button @click="handleChangeName">Change Name</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Bus } from '@/utils/event-bus';
@Component({})
export default class EventBus extends Vue {
  public name = 'Event Bus';
  public handleChangeName() {
    this.name = 'Event Bus Name';
    Bus.$emit('changeName', 'Event Bus Name');
  }
}
</script>
