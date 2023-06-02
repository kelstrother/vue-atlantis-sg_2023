<template>
  <div class="ad-container">
  <transition-group name='d'>
    <div v-if='showDirectory' class="directory-container" >
      <div
        class="location-container"
        v-for="location in locations"
        :key="location.reference"
      >
        <p class="world">{{ location.world }}</p>
        <p class="address">{{ location.gateAddress.join('') }}</p>
      </div>
    </div>
  </transition-group>
    <button @click="showDirectory = !showDirectory" class="show-directory">
      Known Gate Addresses
    </button>
  </div>
</template>

<script>
import './address-directory.scss'
import { ref } from 'vue';

export default {
  name: 'AddressDirectory',
  props: ['locations'],
  setup() {
    const showDirectory = ref(false);
      const bg = ref('rgba(0,0,0,0.4)')
    return { bg, showDirectory };
  },
};
</script>
