<template>
  <div class="dhd-wrapper">
    <div @click='dialSymbol' class="dhd-console">
    <!-- //~ //////////////////
    //!     ROW 1       \\
    //~ ////////////////// -->
      <div id="row-1" class="row">
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[0].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[0].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[1].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[1].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[2].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[2].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[3].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[3].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[4].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[4].letter }}</p>
        </div>
      </div>
      <!-- //~ //////////////////
    //!     ROW 2       \\
    //~ ////////////////// -->
      <div id="row-2" class="row">
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[5].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[5].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[6].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[6].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[7].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[7].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[8].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[8].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[9].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[9].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[10].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[10].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[11].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[11].letter }}</p>
        </div>
      </div>
      <!-- //~ //////////////////
    //!     ROW 3       \\
    //~ ////////////////// -->
      <div id="row-3" class="row">
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[12].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[12].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[13].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[13].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[14].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[14].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[15].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[15].letter }}</p>
        </div>
        <div
          class="dial"
          ref="engageDial"
          @click="engage"
          :data-symbol="engage"
          id="engage"
        ></div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[16].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[16].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[17].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[17].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[18].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[18].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[19].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[19].letter }}</p>
        </div>
      </div>
      <!-- //~ //////////////////
    //!     ROW 4       \\
    //~ ////////////////// -->
      <div id="row-4" class="row">
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[20].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[20].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[21].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[21].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[22].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[22].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[23].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[23].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[24].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[24].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[25].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[25].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[26].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[26].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[27].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[27].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[28].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[28].letter }}</p>
        </div>
      </div>
      <!-- //~ //////////////////
    //!     ROW 5       \\
    //~ ////////////////// -->
      <div id="row-5" class="row">
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[29].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[29].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[30].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[30].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[31].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[31].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[32].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[23].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[33].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[33].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[34].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[34].letter }}</p>
        </div>
        <div
          :ref="(el) => setSymbolRef(el, index)"
          class="dial"
          :data-symbol="gateData[35].constellation"
          :class="{ active: isActive }"
        >
          <p class="dhd-symbol">{{ gateData[35].letter }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './dhd-device.scss';
import { ref } from 'vue';

export default {
  name: 'DhdDevice',
  props: ['gateData'],
  setup() {
    const engageDial = ref(null)
    let isActive = ref(false);
    let symbols = [];
    let stargateAddress = []

    function dialSymbol(e) {
      let dialed = e.target;
      for (let i = 0; i < symbols.length; i++) {
        if(dialed.dataset.symbol === symbols[i].dataset.symbol) {
          stargateAddress.push(dialed);
          dialed.style.border = '2px groove hsl(191, 87%, 47%)';
          dialed.firstElementChild.classList.add('active')
          if (stargateAddress.length === 7) {
          engageDial.value.classList.add('engage-active');
          }
        }
      }
    }

    const setSymbolRef = (el, index) => {
      if (el) {
        symbols.push(el);
        return;
      }
    }

    return { isActive, dialSymbol, symbols, setSymbolRef, stargateAddress };
  },
};
</script>
