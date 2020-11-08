const btn = document.querySelector('.btn');
const numberInput = document.querySelector('.calInput');
const body = document.querySelector('body');
let result = [];

function removeValue() {
  numberInput.value = '';
}

function btnClicked() {
  const number = numberInput.value;
  result.unshift(number);
  resultChecked();
  //   if (result.length === 2) {
  //     let n1 = Number(result[0]);
  //     let n2 = Number(result[1]);
  //     calculator.add(n1, n2);
  //   } else if (result.length > 2) {
  //     result.pop();
  //     result.pop();
  //   }
}

function resultChecked() {
  if (result.length === 2) {
    let n1 = Number(result[0]);
    let n2 = Number(result[1]);
    calculator.add(n1, n2);
  } else if (result.length > 2) {
    result = [];
  } else {
    console.log('hi');
  }
}

const calculator = {
  add: function (x, y) {
    console.log(x + y);
  },
  minus: function (x, y) {
    console.log(x - y);
  },
  divide: function (x, y) {
    console.log(x / y);
  },
  muliply: function (x, y) {
    console.log(x * y);
  },
};

function main() {
  numberInput.addEventListener('click', removeValue);
  btn.addEventListener('click', btnClicked);
}

main();
