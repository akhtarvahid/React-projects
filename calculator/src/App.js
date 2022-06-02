import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

function App() {
  const [input, setInput] = useState('');

  const inputValueHandler = (value) => {
    setInput(inpValue => value + inpValue);
  }
  return (
    <div className="App">
       <div className="calc-wrapper">
         <Input input={input} />
         <div className="row">
          <Button inputHandler={inputValueHandler}>7</Button>
          <Button inputHandler={inputValueHandler}>8</Button>
          <Button inputHandler={inputValueHandler}>9</Button>
          <Button inputHandler={inputValueHandler}>/</Button>
         </div>
         <div className="row">
          <Button inputHandler={inputValueHandler}>4</Button>
          <Button inputHandler={inputValueHandler}>5</Button>
          <Button inputHandler={inputValueHandler}>6</Button>
          <Button inputHandler={inputValueHandler}>X</Button>
         </div>
         <div className="row">
          <Button inputHandler={inputValueHandler}>1</Button>
          <Button inputHandler={inputValueHandler}>2</Button>
          <Button inputHandler={inputValueHandler}>3</Button>
          <Button inputHandler={inputValueHandler}>+</Button>
         </div>
         <div className="row">
          <Button inputHandler={inputValueHandler}>.</Button>
          <Button inputHandler={inputValueHandler}>0</Button>
          <Button inputHandler={inputValueHandler}>=</Button>
          <Button inputHandler={inputValueHandler}>-</Button>
         </div>
         <div className="row">
           <ClearButton handleClear={() => setInput('')}>
             Clear
           </ClearButton>
         </div>
       </div>
    </div>
  );
}

export default App;
