import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const onClick = () => {
        //@ts-ignore
        window.location = 'intent:https://m.naver.com#Intent;end';
    }
  return (
    <div className="App">
      <button onClick={onClick}>
        외부 링크 열기
      </button>
    </div>
  );
}

export default App;
