<template>
  <div class="atlantis-container">
    <AddressDirectory :locations='locations' />
    <Stargate class='stargate-component' :gateData='gateData' />
  </div>
</template>

<script>
import './atlantis.scss'
// @ is an alias to /src
import AddressDirectory from '../components/AddressDirectory.vue';
import Stargate from '../components/Stargate.vue'
import { ref } from 'vue';

export default {
  name: 'AtlantisView',
  components: { AddressDirectory, Stargate },
  setup() {

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
        { letter: 'g', constellation: 'arami', active: null },
        { letter: 't', constellation: 'olavii', active: null },
        { letter: 'v', constellation: 'elenami', active: null },
        { letter: 'H', constellation: 'sibbron', active: null },
        { letter: 'r', constellation: 'hacemill', active: null },
        { letter: 'f', constellation: 'ca po', active: null },
        { letter: 'i', constellation: 'illume', active: null },
        { letter: 'o', constellation: 'zamillioz', active: null },
        { letter: 'a', constellation: 'earth', active: null },
        { letter: 'p', constellation: 'danami', active: null },
        { letter: 'w', constellation: 'sandovi', active: null },
        { letter: 'x', constellation: 'dawnre', active: null },
        { letter: 'l', constellation: 'lenchan', active: null },
        { letter: 'd', constellation: 'amiwill', active: null },
        { letter: 'q', constellation: 'salma', active: null },
        { letter: 'I', constellation: 'once el', active: null },
        { letter: 'J', constellation: 'laylox', active: null },
        { letter: 'n', constellation: 'ecrumig', active: null },
        { letter: 'E', constellation: 'subido', active: null },
        { letter: 'u', constellation: 'roehi', active: null },
        { letter: 'm', constellation: 'alura', active: null },
        { letter: 'y', constellation: 'aldeni', active: null },
        { letter: 'h', constellation: 'aaxel', active: null },
        { letter: 'z', constellation: 'recktic', active: null },
        { letter: 'k', constellation: 'avoniv', active: null },
        { letter: 'F', constellation: 'bydo', active: null },
        { letter: 'D', constellation: 'zeo', active: null },
        { letter: 'A', constellation: 'poco re', active: null },
        { letter: 'b', constellation: 'tahnan', active: null },
        { letter: 'j', constellation: 'ramnon', active: null },
        { letter: 'C', constellation: 'gilltin', active: null },
        { letter: 'e', constellation: 'acjesis', active: null },
        { letter: 'B', constellation: 'abrin', active: null },
        { letter: 's', constellation: 'hamlinto', active: null },
        { letter: 'c', constellation: 'setas', active: null },
        { letter: 'G', constellation: 'robandus', active: null }
    ])
    
    return { locations, gateData };
  },
};
</script>