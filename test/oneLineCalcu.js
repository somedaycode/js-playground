const calcBtn = document.querySelector('#calc');

var input = {};
input.init = function (str) {
  this.list = str.split('');
  console.log(this.list);
};

input.empty = function () {
  return this.list.length == 0;
};

input.getValue = function () {
  var str = this.list.shift();
  var n = Number(str);

  return n;
};

input.getOperator = function () {
  var op = this.list.shift();
  if (op === '+' || op === '-' || op === '*' || op === '/') {
    return op;
  } else {
    return '$';
  }
};

calculator = {};
calculator.calculate = function (first, second, op) {
  var ret;
  switch (op) {
    case '+':
      ret = first + second;
      break;
    case '-':
      ret = first - second;
      break;
    case '*':
      ret = first * second;
      break;
    case '/':
      ret = first / second;
      break;
    default:
      return NaN;
  }
  return ret;
};

var output = {};
output.out = document.getElementById('output');

output.print = function (value) {
  this.out.innerHTML = '최종 결과값은 ' + value + '입니다.';
};

document.querySelector('.btn').addEventListener('click', calc);
function calc() {
  var str = document.getElementById('input').value;
  input.init(str);
  var result = input.getValue();
  while (!input.empty()) {
    var op = input.getOperator();
    var second = input.getValue();
    result = calculator.calculate(result, second, op);
  }
  document.querySelector('#input').value = result;
  output.print(result);
  console.log(result);
}
