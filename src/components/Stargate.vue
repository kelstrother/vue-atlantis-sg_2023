<template>
  <div class="sg-container">
    <div
      :class="{ spin: engaged }"
      ref="stargate"
      class="stargate"
      id="spinning-gate"
    >
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
      <div v-if="locked" ref="activeGate" id="engaged-gate" class="stargate">
        <div
          v-for="trigger in engagedSymbol"
          :key="trigger"
          id="engaged-symbol"
          class="symbol-container engaged-container"
        >
          <p ref="trigger" id='engaged-symbol' class="gate-symbol active">
            {{ trigger.innerText }}
          </p>
        </div>
      </div>
    </div>
    <div id="chev-gate" class="chevron-gate">
      <div id="c-1" class="chevron">
        <span ref="ic1" id="ic-1" class="inner-chevron"></span>
      </div>
      <div id="c-2" class="chevron">
        <span ref="ic2" id="ic-2" class="inner-chevron"></span>
      </div>
      <div id="c-3" class="chevron">
        <span ref="ic3" id="ic-3" class="inner-chevron"></span>
      </div>
      <div id="c-4" class="chevron">
        <span ref="ic4" id="ic-4" class="inner-chevron"></span>
      </div>
      <div id="c-5" class="chevron">
        <span ref="ic5" id="ic-5" class="inner-chevron"></span>
      </div>
      <div id="c-6" class="chevron">
        <span ref="ic6" id="ic-6" class="inner-chevron"></span>
      </div>
      <div id="c-7" class="chevron">
        <span ref="ic7" id="ic-7" class="inner-chevron"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import './stargate.scss';
const ic1 = ref(null);
const ic2 = ref(null);
const ic3 = ref(null);
const ic4 = ref(null);
const ic5 = ref(null);
const ic6 = ref(null);
const ic7 = ref(null);
let engaged = ref(false);
let locked = ref(false);
let symbolsContainer = [];
let symbols = [];
let trigger = ref(null);
const stargate = ref(null);
const props = defineProps(['gateData', 'engagedSymbol', 'triggeredSymbol']);

defineExpose({
  symbols,
  symbolsContainer,
  stargate,
  engaged,
  locked,
  trigger,
  ic1,
  ic2,
  ic3,
  ic4,
  ic5,
  ic6,
  ic7,
});

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
const setEngagedRef = (el, index) => {
  if (el) {
    triggeredArr.push(el);
    return;
  }
};
</script>
