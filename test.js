// ES5
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo);
var combined = Object.assign({}, objectOne, objectTwo);

var others = Object.assign({}, combined);
delete others.other;

// ES6
let combined = {
  ...objectOne,
  ...objectTwo,
};

let combined = {
  ...objectTwo,
  ...objectOne,
};

let { other, ...others } = combined;

console.log(combined);
console.log(others);
