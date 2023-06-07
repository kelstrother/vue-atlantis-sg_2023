<template>
  <div class="sg-container">
    <div class="stargate" id="spinning-gate">
      <div
        :ref="(el) => setSymbolContainerRef(el, index)"
        class="symbol-container"
        :data-symbol="gate.constellation"
        v-for="gate in gateData"
        :key="gate.letter"
      >
        <p
          :ref="(el) => setSymbolRef(el, index)"
          :data-symbol="gate.constellation"
          class="gate-symbol"
        >
          {{ gate.letter }}
        </p>
      </div>
    </div>
    <div id="chev-gate" class="chevron-gate">
      <div id="c-1" class="chevron">
        <span id="ic-1" class="inner-chevron"></span>
      </div>
      <div id="c-2" class="chevron">
        <span id="ic-2" class="inner-chevron"></span>
      </div>
      <div id="c-3" class="chevron">
        <span id="ic-3" class="inner-chevron"></span>
      </div>
      <div id="c-4" class="chevron">
        <span id="ic-4" class="inner-chevron"></span>
      </div>
      <div id="c-5" class="chevron">
        <span id="ic-5" class="inner-chevron"></span>
      </div>
      <div id="c-6" class="chevron">
        <span id="ic-6" class="inner-chevron"></span>
      </div>
      <div id="c-7" class="chevron">
        <span id="ic-7" class="inner-chevron"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import './stargate.scss';
let symbolsContainer = [];
let symbols = [];
const props = defineProps(['gateData']);

defineExpose({
  symbols, symbolsContainer
});

// console.log('gate symbols: ', symbols);
// console.log('gate containers: ', symbolsContainer);
const setSymbolRef = (el, index) => {
  if (el) {
    symbols.push(el);
    return;
  }
};
const setSymbolContainerRef = (el, index) => {
  if (el) {
    symbolsContainer.push(el);
    return;
  }
};
</script>
