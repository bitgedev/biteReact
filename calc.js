// 계산 기능하는 파일
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
// console.log(add(1, 2));

//계산 모듈을 만드는 파일이다.
//exports를 통해 객체단위로 내보낸다.
module.exports = {
  moduleName: "calc module",
  add: add,
  sub: sub,
};
