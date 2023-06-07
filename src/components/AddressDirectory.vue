<template>
  <div class="ad-container">
    <transition-group name="d">
      <div v-if="showDirectory" class="directory-container">
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
    <div class="btn-container">
      <button @click="showDirectory = !showDirectory" class="show-directory">
        Known Gate Addresses
      </button>
      <transition name='b'>
        <button v-if="showDirectory" class="translate-btn" :class='{ dropped: showDirectory }'>Translate</button>
      </transition>
    </div>
  </div>
</template>
<script setup>
import './address-directory.scss';
import { ref } from 'vue';

const props = defineProps({
  locations: {
    type: Array,
    required: true,
  },
});

const showDirectory = ref(false);
const bg = ref('rgba(0,0,0,0.4)');
</script>
//// ////
<script>
// export default {
//   name: 'AddressDirectory',
//   props: ['locations'],
//   setup() {
//     const showDirectory = ref(false);
//     return { bg, showDirectory };
//   },
// };
//
</script>
