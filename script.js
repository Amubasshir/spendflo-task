const select = document.querySelector('#price');
const show = document.querySelector('#saving');
const save = document.querySelector('#save');
const pricing = document.querySelector('#pricing');
let arr = [
  {
    id: 1,
    spend: '500000K',
    savings: 150000,
    monthyPrice: 1500,
  },
  {
    id: 2,
    spend: '1M',
    savings: 300000,
    monthyPrice: 2500,
  },
  {
    id: 3,
    spend: '2M',
    savings: 600000,
    monthyPrice: 3500,
  },
  {
    id: 4,
    spend: '3M',
    savings: 900000,
    monthyPrice: 4500,
  },
  {
    id: 5,
    spend: '4M',
    savings: 1200000,
    monthyPrice: 5500,
  },
  {
    id: 6,
    spend: '5M',
    savings: 1500000,
    monthyPrice: 6500,
  },
];

for (let i = 0; i < arr.length; i++) {
  var option = document.createElement('option');
  option.text = arr[i].spend;
  option.value = arr[i].savings;
  option.setAttribute('price', arr[i].monthyPrice);
  select.appendChild(option);
}
select.addEventListener('change', function (event) {
  save.innerHTML = event.target.value;
  idx = event.target.options.selectedIndex;
  pricing.innerHTML = event.target.options[idx].getAttribute('price');
});

// - 0M  / $0 per month
// - 500K  / $150,000 per month
// -  1M / $300,000 per month
// -  2M / $600,000 per month
// - 3M p/ $900,000 per month
// -  4M / $1,200,000 per month
// -  5M / $1,500,000 per month

const range = document.getElementById('range');

const rangePricing = {
  1: {
    views: '0M',
    price: 0,
  },
  2: {
    views: '500K',
    price: 150000,
  },
  3: {
    views: '1M',
    price: 300000,
  },
  4: {
    views: '2M',
    price: 600000,
  },
  5: {
    views: '3M',
    price: 900000,
  },
  6: {
    views: '4M',
    price: 1200000,
  },
  7: {
    views: '5M',
    price: 1500000,
  },
};

showCurrentPrice(range.value);

function showCurrentPrice(value) {
  const currentPrice = rangePricing[value];
  const price = currentPrice.price;
  document.querySelector(
    '.stats_views'
  ).innerHTML = `Your annual SaaS spend: ${currentPrice.views}`;
  document.querySelector(
    '.stats_price '
  ).innerHTML = `Your potential saving $${price.toLocaleString()}`;
}

range.addEventListener('input', (event) => {
  showCurrentPrice(event.target.value);
});

//online solution
// document.addEventListener('DOMContentLoaded', function () {
//   const slideValue = document.querySelector('.sliderValue span');
//   const inputSlider = document.querySelector('.calci-field input');
//   const progress = document.getElementById('calci-progress');
//   const savingvalue = document.getElementById('calci-savings');

//   inputSlider.oninput = () => {
//     let value = inputSlider.value;
//     if (value == 0) {
//       slideValue.innerHTML = 'Your annual SaaS spend: $0M';
//       savingvalue.innerHTML = '$0';
//       slideValue.style.left = '0%';
//       progress.style.width = '0%';
//     } else if (value < 20) {
//       slideValue.innerHTML = 'Your annual SaaS spend: $500K';
//       savingvalue.innerHTML = '$150,000';
//       slideValue.style.left = '16.66%';
//       progress.style.width = '16.66%';
//     } else if (value < 48) {
//       slideValue.innerHTML = 'Your annual SaaS spend: $1M';
//       savingvalue.innerHTML = '$300,000';
//       slideValue.style.left = '33.32%';
//       progress.style.width = '33.32%';
//     } else if (value < 65) {
//       slideValue.innerHTML = 'Your annual SaaS spend: $2M';
//       savingvalue.innerHTML = '$600,000';
//       slideValue.style.left = '50%';
//       progress.style.width = '50%';
//     } else if (value < 82) {
//       slideValue.innerHTML = 'Your annual SaaS spend: $3M';
//       savingvalue.innerHTML = '$900,000';
//       slideValue.style.left = '66.64%';
//       progress.style.width = '66.64%';
//     } else if (value < 98) {
//       slideValue.innerHTML = 'Your annual SaaS spend: $4M';
//       savingvalue.innerHTML = '$1,200,000';
//       slideValue.style.left = '83.30%';
//       progress.style.width = '83.30%';
//     } else {
//       slideValue.innerHTML = 'Your annual SaaS spend: $5M';
//       savingvalue.innerHTML = '$1,500,000';
//       slideValue.style.left = '100%';
//       progress.style.width = '100%';
//     }
//     // slideValue.style.left = (value) + "%";
//     // progress.style.width = (value) + "%";
//     slideValue.classList.add('show');
//   };
//   inputSlider.onblur = () => {
//     slideValue.classList.remove('show');
//   };
// });
