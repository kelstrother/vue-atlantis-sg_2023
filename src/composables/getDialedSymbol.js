import { ref } from 'vue';

const getDialedSymbol = (e) => {
  // const engageDial = ref(null);
  let symbols = [];
  let stargateAddress = [];
  let dialed = e.target;

  for (let i = 0; i < symbols.length; i++) {
    const symbol = dialed.firstElementChild;
    if (
      dialed.dataset.symbol === symbols[i].dataset.symbol &&
      !symbol.classList.contains('active')
    ) {
      stargateAddress.push(dialed);
      // dialed.style.border = '2px groove hsl(191, 87%, 47%)';
      // dialed.firstElementChild.classList.add('active');
      // if (stargateAddress.length === 7) {
      //   engageDial.value.classList.add('engage-active');
      // }
    }
  }
  return { symbols, stargateAddress, dialed };
};

export default getDialedSymbol;