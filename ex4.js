const btn = document.body.querySelector('.btn');
const output = document.body.querySelector('.output');

const main = () => {
  const input = document.body.querySelector('#input').value;
  const n1 = document.body.querySelector('#n1').value;
  const n2 = document.body.querySelector('#n2').value;
  const number1 = Number(n1);
  const number2 = Number(n2);
  let str = '';
  if (input === '+') {
    str += `${number1} + ${number2} = ${number1 + number2}`;
  } else if (input === '-') {
    str += `${number1} - ${number2} = ${number1 - number2}`;
  } else if (input === '/') {
    str += `${number1} / ${number2} = ${number1 / number2}`;
  } else {
    str += `${number1} * ${number2} = ${number1 * number2}`;
  }
  output.innerHTML = str;
};

btn.addEventListener('click', main);
