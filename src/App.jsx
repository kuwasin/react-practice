import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
