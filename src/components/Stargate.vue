<template>
  <div class="sg-container">
    <div class="stargate" id="spinning-gate">
      <div
        class="symbol-container"
        :data-symbol="gate.constellation"
        v-for="gate in gateData"
        :key="gate.letter"
      >
        <p :data-symbol="gate.constellation" class="gate-symbol">
          {{ gate.letter }}
        </p>
      </div>
    </div>
  <div id='chev-gate' class="chevron-gate">
    <div id='c-1' class="chevron">
      <span id='ic-1' class="inner-chevron"></span>
    </div>
    <div id='c-2' class="chevron">
      <span id='ic-2' class="inner-chevron"></span>
    </div>
    <div id='c-3' class="chevron">
      <span id='ic-3' class="inner-chevron"></span>
    </div>
    <div id='c-4' class="chevron">
      <span id='ic-4' class="inner-chevron"></span>
    </div>
    <div id='c-5' class="chevron">
      <span id='ic-5' class="inner-chevron"></span>
    </div>
    <div id='c-6' class="chevron">
      <span id='ic-6' class="inner-chevron"></span>
    </div>
    <div id='c-7' class="chevron">
      <span id='ic-7' class="inner-chevron"></span>
    </div>
  </div>
  </div>
</template>

<script>
import './stargate.scss'
export default {
  name: 'Stargate',
  props: ['gateData'],
  setup() {
    return {};
  },
};
</script>

