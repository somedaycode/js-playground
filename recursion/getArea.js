function getArea(n, x, y, z) {
  if (n === 'circle') {
    const result = x ** 2 * 3.14;
    if (arguments.length === 2) {
      return result;
    }
    if (x > y) {
      return 0;
    }
    return result + getArea('circle', x + 1, y);
  }
  if (n === 'rect') {
    return x * y;
  }
  if (n === 'trapezoid') {
    return ((x + z) / 2) * y;
  }
}

console.log(getArea('circle', 10));
console.log(getArea('rect', 10, 15));
console.log(getArea('trapezoid', 2, 3, 4));
console.log(getArea('circle', 1, 3));
