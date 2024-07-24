// CalculatorButtons.js
import React from 'react';
const squareRootSymbol='\u221A';
const CalculatorButtons = ({
  handleNumberClick,
  handleOperationClick,
  handleCalculate,
  handleDelete,
  handleClear,
  handleSquareRoot,
  handlePercentage,
}) => {
  return (
    <div className='calculator'>
      
      <div className="button-row" >
        <button className="calculator-button" onClick={handleClear}>AC</button>
        <button className="calculator-button" onClick={handleDelete}>X</button>
        <button className="calculator-button" id='square-root' onClick={handleSquareRoot}>{squareRootSymbol}</button>
        <button className="calculator-button" onClick={() => handleOperationClick('/')}>/</button>
      </div>
      <div className="button-row">
        
        <button className="calculator-button" onClick={() => handleNumberClick('7')}>7</button>
        <button className="calculator-button" onClick={() => handleNumberClick('8')}>8</button>
        <button className="calculator-button" onClick={() => handleNumberClick('9')}>9</button>
        <button className="calculator-button" onClick={() => handleOperationClick('*')}>*</button>
      </div>
      <div className="button-row">
        <button className="calculator-button" onClick={() => handleNumberClick('4')}>4</button>
        <button className="calculator-button" onClick={() => handleNumberClick('5')}>5</button>
        <button className="calculator-button" onClick={() => handleNumberClick('6')}>6</button>
        <button className="calculator-button"onClick={() => handleOperationClick('-')}>-</button>
      </div>
      <div className="button-row">
        <button className="calculator-button" onClick={() => handleNumberClick('1')}>1</button>
        <button className="calculator-button" onClick={() => handleNumberClick('2')}>2</button>
        <button className="calculator-button" onClick={() => handleNumberClick('3')}>3</button>
        <button className="calculator-button" onClick={() => handleOperationClick('+')}>+</button>
      </div>
      <div className="button-row">
        <button className="calculator-button" onClick={() => handleNumberClick('0')}>0</button>
        <button className="calculator-button" onClick={() => handleNumberClick('.')}>.</button>
        <button className="calculator-button" onClick={handlePercentage}>%</button>
        <button className="calculator-button" onClick={handleCalculate}>=</button>
      </div>
   
    </div>
  );
};

export default CalculatorButtons;
