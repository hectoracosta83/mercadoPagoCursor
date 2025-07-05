import React, { useState } from 'react';
import './EnterAmountScreen.css';

const EnterAmountScreen = ({ balance, onConfirm, onBack }) => {
  const [amount, setAmount] = useState('100');
  const [motive, setMotive] = useState('Varios');

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const handleNumberPress = (number) => {
    if (amount === '0' && number !== '.') {
      setAmount(number);
    } else if (amount.length < 10) {
      setAmount(amount + number);
    }
  };

  const handleDelete = () => {
    if (amount.length > 1) {
      setAmount(amount.slice(0, -1));
    } else {
      setAmount('0');
    }
  };

  const handleClear = () => {
    setAmount('0');
  };

  const handleContinue = () => {
    const numericAmount = parseFloat(amount);
    if (numericAmount > 0 && numericAmount <= balance) {
      onConfirm(numericAmount);
    }
  };

  const formatDisplayAmount = (value) => {
    if (value === '0') return '0';
    return value;
  };

  const numericAmount = parseFloat(amount);
  const canContinue = numericAmount > 0 && numericAmount <= balance;

  return (
    <div className="enter-amount-screen">
      <div className="header">
        <button className="header-back" onClick={onBack}>
          ←
        </button>
        <h1>Ingresá el monto</h1>
        <div></div>
      </div>

      <div className="content">
        <div className="amount-display">
          <div className="amount-value">
            $<span className="amount-number">{formatDisplayAmount(amount)}</span>
          </div>
          <div className="balance-available">
            {formatCurrency(balance)} disponible.
          </div>
        </div>

        <div className="motive-section">
          <label htmlFor="motive">Motivo</label>
          <select 
            id="motive"
            value={motive}
            onChange={(e) => setMotive(e.target.value)}
            className="motive-select"
          >
            <option value="Varios">Varios</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Servicios">Servicios</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Transporte">Transporte</option>
            <option value="Salud">Salud</option>
            <option value="Educación">Educación</option>
            <option value="Ropa">Ropa</option>
            <option value="Hogar">Hogar</option>
            <option value="Regalos">Regalos</option>
          </select>
        </div>

        <div className="continue-section">
          <button 
            className={`continue-btn ${canContinue ? 'enabled' : 'disabled'}`}
            onClick={handleContinue}
            disabled={!canContinue}
          >
            Continuar
          </button>
        </div>

        <div className="numeric-keypad">
          <div className="keypad-row">
            <button className="keypad-btn" onClick={() => handleNumberPress('1')}>1</button>
            <button className="keypad-btn" onClick={() => handleNumberPress('2')}>2</button>
            <button className="keypad-btn" onClick={() => handleNumberPress('3')}>3</button>
            <button className="keypad-btn keypad-action" onClick={handleDelete}>—</button>
          </div>
          <div className="keypad-row">
            <button className="keypad-btn" onClick={() => handleNumberPress('4')}>4</button>
            <button className="keypad-btn" onClick={() => handleNumberPress('5')}>5</button>
            <button className="keypad-btn" onClick={() => handleNumberPress('6')}>6</button>
            <button className="keypad-btn keypad-action" onClick={handleClear}>⌫</button>
          </div>
          <div className="keypad-row">
            <button className="keypad-btn" onClick={() => handleNumberPress('7')}>7</button>
            <button className="keypad-btn" onClick={() => handleNumberPress('8')}>8</button>
            <button className="keypad-btn" onClick={() => handleNumberPress('9')}>9</button>
            <button className="keypad-btn keypad-action" onClick={handleClear}>✕</button>
          </div>
          <div className="keypad-row">
            <button className="keypad-btn keypad-comma" onClick={() => handleNumberPress(',')}>,</button>
            <button className="keypad-btn" onClick={() => handleNumberPress('0')}>0</button>
            <button className="keypad-btn keypad-dot" onClick={() => handleNumberPress('.')}>.</button>
            <button className="keypad-btn keypad-action" onClick={handleContinue}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterAmountScreen;