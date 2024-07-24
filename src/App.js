// App.js
import React, { useState } from 'react';
import CalculatorButtons from './CalculatorButtons';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setInput(input + number);
  };

  const handleOperationClick = (operation) => {
    setInput(input + operation);
  };

  const handleCalculate = () => {
    try {
      const calculationResult = eval(input);
      setResult(calculationResult);
      setInput('');
    } catch (error) {
      setResult('Error');
      setInput('');
    }
  };
  const handleSquareRoot = () => {
    const calculationResult = Math.sqrt(input);
    setResult(calculationResult.toFixed(10));
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="result-display">
          <div id="result-box">{input}{result}</div>
        </div>
        <CalculatorButtons
          handleNumberClick={handleNumberClick}
          handleOperationClick={handleOperationClick}
          handleCalculate={handleCalculate}
          handleDelete={handleDelete}
          handleClear={handleClear}
          handleSquareRoot={handleSquareRoot}
        />
      </div>
    </div>
  );
}

export default App;