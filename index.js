// console.log("Hello node js");

// const calc = require("./calc");

// console.log(calc);

// console.log(calc.add(1, 2));
// console.log(calc.sub(10, 2));

const randomColor = require("randomcolor");
//노드 모듈에 있으면 경로 명시할 필요가 없다.

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);
