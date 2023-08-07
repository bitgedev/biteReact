// import "./App.css";
import MyHeader from "./MyHeader";
import React from "react";
function App() {
  let name = "bit";

  //인라인 스타일
  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const number = 5;

  return (
    <div style={style.App}>
      {/* <div className="App"> */}
      <MyHeader />
      <header className="App-header">
        <h2 style={style.h2}>안녕 리액트 {name}</h2>
      </header>
      <b id="bold_text" style={style.bold_text}>
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
    </div>
  );
}

export default App;
