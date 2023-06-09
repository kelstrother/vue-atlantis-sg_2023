<template>
  <div class="atlantis-container">
    <AddressDirectory :locations="locations" />
    <Stargate
      ref="gate"
      class="stargate-component"
      :gateData="gateData"
      :engagedSymbol="engagedSymbol"
    />
    <DhdComponent
      @click="dialSymbol"
      ref="dhd"
      class="dhd-component"
      :gateData="gateData"
    />
  </div>
</template>

<script>
import './atlantis.scss';
import AddressDirectory from '../components/AddressDirectory.vue';
import Stargate from '../components/Stargate.vue';
import DhdComponent from '@/components/DhdComponent.vue';
import { ref, onMounted, h, watch } from 'vue';

export default {
  name: 'AtlantisView',
  components: { AddressDirectory, Stargate, DhdComponent },
  setup() {
    let gateSymbol;
    const dhd = ref(null);
    const gate = ref(null);
    let dialed;
    let engagedSymbol = [];
    let index = 0;

    function dialSymbol(e) {
      index++;
      dialed = e.target;
      console.log(index);
      for (let i = 0; i < dhd.value.symbols.length; i++) {
        gateSymbol = gate.value.symbols[i];
        let dials = dhd.value.symbols[i];
        const symbol = dialed.firstElementChild;
        if (
          gateSymbol.innerText === symbol.innerText &&
          !symbol.classList.contains('active')
        ) {
          reserveSpot();
          gate.value.locked = true;
          spinGate();
          engagedSymbol.push(symbol);
          gate.value.trigger = symbol;
          dialed.style.border = '2px groove hsl(191, 87%, 47%)';
          dialed.firstElementChild.classList.add('active');
          if (dhd.value.stargateAddress.length === 7) {
            dials.classList.remove('active');
            index = 0;
            dhd.value.engageDial.classList.add('engage-active');
          }
        }
      }
    }

    const reserveSpot = () => {
      if (index === 1) {
        gate.value.symbols[0].classList.add('hide');
        setTimeout(() => {
          gate.value.ic1.style.background = 'hsl(191, 87%, 47%)';
        }, 1250);
      }
      if (index === 2) {
        gate.value.symbols[4].classList.add('hide');
         setTimeout(() => {
          gate.value.ic2.style.background = 'hsl(191, 87%, 47%)';
        }, 1250);
      }
      if (index === 3) {
        gate.value.symbols[8].classList.add('hide');
         setTimeout(() => {
          gate.value.ic3.style.background = 'hsl(191, 87%, 47%)';
        }, 1250);
      }
      if (index === 4) {
        gate.value.symbols[12].classList.add('hide');
         setTimeout(() => {
          gate.value.ic4.style.background = 'hsl(191, 87%, 47%)';
        }, 1250);
      }
      if (index === 5) {
        gate.value.symbols[24].classList.add('hide');
         setTimeout(() => {
          gate.value.ic5.style.background = 'hsl(191, 87%, 47%)';
        }, 1250);
      }
      if (index === 6) {
        gate.value.symbols[28].classList.add('hide');
         setTimeout(() => {
          gate.value.ic6.style.background = 'hsl(191, 87%, 47%)';
        }, 1250);
      }
      if (index === 7) {
        gate.value.symbols[32].classList.add('hide');
         setTimeout(() => {
          gate.value.ic7.style.background = 'hsl(191, 87%, 47%)';
        }, 1250);
      }
    };

    function spinGate() {
      gate.value.engaged = true;
      if (gate.value.engaged) {
        gate.value.symbols.forEach((symbol) => {
          symbol.style.opacity = '0.5';
        });
      }
      setTimeout(() => {
        gate.value.engaged = false;
        gate.value.symbols.forEach((symbol) => {
          symbol.style.opacity = '1';
        });
      }, 1250);
    }

    const locations = ref([
      {
        reference: 'earth',
        world: 'Earth',
        gateAddress: ['o ', 'q ', 'H ', 'p ', 'G ', 'J ', 'E '],
      },
      {
        reference: 'asuras',
        world: 'Asuras',
        gateAddress: ['g ', 'f ', 'k ', 's ', 'I ', 'j ', 'E '],
      },
      {
        reference: 'dagan',
        world: 'Dagan',
        gateAddress: ['q ', 'v ', 'z ', 's ', 'r ', 'C ', 'E '],
      },
      {
        reference: 'athos',
        world: 'Athos',
        gateAddress: ['p ', 'i ', 's ', 'F ', 'A ', 'u ', 'E '],
      },
      {
        reference: 'fords-planet',
        world: "Ford's Planet",
        gateAddress: ['o ', 'u ', 't ', 'p ', 'C ', 's ', 'E '],
      },
      {
        reference: 'genii',
        world: 'Genii Homeworld',
        gateAddress: ['G ', 'q ', 'l ', 'c ', 'v ', 'h ', 'E '],
      },
      {
        reference: 'hoff',
        world: 'Hoff',
        gateAddress: ['c ', 'z ', 'a ', 'F ', 'q ', 'r ', 'E '],
      },
      {
        reference: 'lord-protector',
        world: "Lord Protector's Planet",
        gateAddress: ['t ', 'o ', 'w ', 'e ', 'r ', 'b ', 'E '],
      },
      {
        reference: 'lucius',
        world: "Lucius's Planet",
        gateAddress: ['g ', 'h ', 'j ', 'f ', 'u ', 'n ', 'E '],
      },
      {
        reference: 'm4d-058',
        world: 'M4D-058',
        gateAddress: ['s ', 'a ', 'l ', 'k ', 'm ', 'h ', 'E '],
      },
      {
        reference: 'olesia',
        world: 'Olesia',
        gateAddress: ['g ', 'o ', 't ', 'e ', 'a ', 'm ', 'E '],
      },
      {
        reference: 'sateda',
        world: 'Sateda',
        gateAddress: ['g ', 'm ', 'n ', 'q ', 'u ', 's ', 'E '],
      },
      {
        reference: 'taranis',
        world: 'Taranis',
        gateAddress: ['t ', 'm ', 'a ', 'r ', 'n ', 'i ', 'E '],
      },
      {
        reference: 'shadow',
        world: 'M4X-337',
        gateAddress: ['t ', 'r ', 'q ', 'o ', 'C ', 'B ', 'E '],
      },
    ]);

    const gateData = ref([
      { index: 1, letter: 'g', constellation: 'arami', active: null },
      { index: 2, letter: 't', constellation: 'olavii', active: null },
      { index: 3, letter: 'v', constellation: 'elenami', active: null },
      { index: 4, letter: 'H', constellation: 'sibbron', active: null },
      { index: 5, letter: 'r', constellation: 'hacemill', active: null },
      { index: 6, letter: 'f', constellation: 'ca po', active: null },
      { index: 7, letter: 'i', constellation: 'illume', active: null },
      { index: 8, letter: 'o', constellation: 'zamillioz', active: null },
      { index: 9, letter: 'a', constellation: 'earth', active: null },
      { index: 10, letter: 'p', constellation: 'danami', active: null },
      { index: 11, letter: 'w', constellation: 'sandovi', active: null },
      { index: 12, letter: 'x', constellation: 'dawnre', active: null },
      { index: 13, letter: 'l', constellation: 'lenchan', active: null },
      { index: 14, letter: 'd', constellation: 'amiwill', active: null },
      { index: 15, letter: 'q', constellation: 'salma', active: null },
      { index: 16, letter: 'I', constellation: 'once el', active: null },
      { index: 17, letter: 'J', constellation: 'laylox', active: null },
      { index: 18, letter: 'n', constellation: 'ecrumig', active: null },
      { index: 19, letter: 'E', constellation: 'subido', active: null },
      { index: 20, letter: 'u', constellation: 'roehi', active: null },
      { index: 21, letter: 'm', constellation: 'alura', active: null },
      { index: 22, letter: 'y', constellation: 'aldeni', active: null },
      { index: 23, letter: 'h', constellation: 'aaxel', active: null },
      { index: 24, letter: 'z', constellation: 'recktic', active: null },
      { index: 25, letter: 'k', constellation: 'avoniv', active: null },
      { index: 26, letter: 'F', constellation: 'bydo', active: null },
      { index: 27, letter: 'D', constellation: 'zeo', active: null },
      { index: 28, letter: 'A', constellation: 'poco re', active: null },
      { index: 29, letter: 'b', constellation: 'tahnan', active: null },
      { index: 30, letter: 'j', constellation: 'ramnon', active: null },
      { index: 31, letter: 'C', constellation: 'gilltin', active: null },
      { index: 32, letter: 'e', constellation: 'acjesis', active: null },
      { index: 33, letter: 'B', constellation: 'abrin', active: null },
      { index: 34, letter: 's', constellation: 'hamlinto', active: null },
      { index: 35, letter: 'c', constellation: 'setas', active: null },
      { index: 36, letter: 'G', constellation: 'robandus', active: null },
    ]);

    return {
      locations,
      gateData,
      dhd,
      gate,
      dialSymbol,
      spinGate,
      engagedSymbol,
    };
  },
};
</script>
