const saveLog = [];

function getArea(n, x, y, z) {
  if (n === 'circle') {
    const result = x ** 2 * 3.14;
    if (arguments.length === 2) {
      saveExecutionSequence(n, result);
      return result;
    }
    if (x > y) {
      saveExecutionSequence(n, result);
      return 0;
    }
    return result + getArea('circle', x + 1, y);
  }
  if (n === 'rect') {
    const result = x * y;
    saveExecutionSequence(n, result);
    return result;
  }
  if (n === 'trapezoid') {
    const result = ((x + z) / 2) * y;
    saveExecutionSequence(n, result);
    return result;
  }
}

function saveExecutionSequence(name, result) {
  saveLog.push(`${name}: ${result}`);
}

const printExecutionSequence = () => {
  return saveLog;
};

console.log(getArea('circle', 10));
console.log(getArea('rect', 10, 15));
console.log(getArea('trapezoid', 2, 3, 4));
console.log(getArea('circle', 1, 3));
console.log(printExecutionSequence());
