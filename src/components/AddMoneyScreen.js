import React, { useState } from 'react';
import './AddMoneyScreen.css';

const AddMoneyScreen = ({ onConfirm, onBack }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Solo permitir números y punto decimal
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
      setError('');
    }
  };

  const handleConfirm = () => {
    const numericAmount = parseFloat(amount);
    
    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
      setError('Ingresa un monto válido');
      return;
    }

    if (numericAmount > 1000000) {
      setError('El monto máximo es $1.000.000');
      return;
    }

    onConfirm(numericAmount);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleConfirm();
    }
  };

  return (
    <div className="add-money-screen">
      <div className="header">
        <button className="header-back" onClick={onBack}>
          ←
        </button>
        <h1>Ingresar dinero</h1>
        <div></div>
      </div>

      <div className="content">
        <div className="amount-section">
          <h2>¿Cuánto querés ingresar?</h2>
          
          <div className="amount-input-container">
            <span className="currency-symbol">$</span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              onKeyPress={handleKeyPress}
              placeholder="0"
              className="amount-input"
              autoFocus
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
        </div>

        <div className="quick-amounts">
          <h3>Montos rápidos</h3>
          <div className="quick-amount-buttons">
            <button 
              className="quick-amount-btn"
              onClick={() => setAmount('1000')}
            >
              $1.000
            </button>
            <button 
              className="quick-amount-btn"
              onClick={() => setAmount('2000')}
            >
              $2.000
            </button>
            <button 
              className="quick-amount-btn"
              onClick={() => setAmount('5000')}
            >
              $5.000
            </button>
            <button 
              className="quick-amount-btn"
              onClick={() => setAmount('10000')}
            >
              $10.000
            </button>
          </div>
        </div>

        <div className="actions">
          <button 
            className="btn-primary"
            onClick={handleConfirm}
            disabled={!amount || parseFloat(amount) <= 0}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMoneyScreen;