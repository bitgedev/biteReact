import React, { useState } from "react";

const Counter = () => {
  //0에서 출발
  //1씩 증가, 1씩감소하는 count상태

  //count는 상태의 값, setCount는 count를 변화시키는 상태변화함수
  //useState의 0은 초기값(0에서 출발)
  //count의 state가 바뀔 때 마다, counter가 return을 다시 한다.(rerender)
  console.log("counter 호출!");
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
