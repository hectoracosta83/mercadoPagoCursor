import React from 'react';
import './ConfirmTransferScreen.css';

const ConfirmTransferScreen = ({ recipient, amount, balance, onConfirm, onBack }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const remainingBalance = balance - amount;

  return (
    <div className="confirm-transfer-screen">
      <div className="header">
        <button className="header-back" onClick={onBack}>
          ←
        </button>
        <h1>Confirmar transferencia</h1>
        <div></div>
      </div>

      <div className="content">
        <div className="recipient-info">
          <div className="recipient-avatar">
            <div 
              className="avatar-circle"
              style={{ backgroundColor: recipient.iconColor }}
            >
              👤
            </div>
          </div>
          <div className="recipient-details">
            <h2>{recipient.name}</h2>
            <p className="recipient-bank">{recipient.bank}</p>
          </div>
        </div>

        <div className="transfer-details">
          <div className="amount-section">
            <div className="total-label">Total</div>
            <div className="total-amount">{formatCurrency(amount)}</div>
          </div>
        </div>

        <div className="account-card">
          <div className="account-icon">
            <div className="mp-icon">🤝</div>
          </div>
          <div className="account-info">
            <div className="account-balance">
              {formatCurrency(balance)}
              <button className="balance-visibility">👁</button>
            </div>
          </div>
        </div>

        <div className="transfer-info">
          <div className="info-item">
            <span className="info-label">DINERO DISPONIBLE</span>
          </div>
          <div className="transfer-type">
            <span className="type-label">Sin comisión</span>
          </div>
        </div>

        <div className="actions">
          <button 
            className="transfer-btn"
            onClick={onConfirm}
            disabled={amount > balance}
          >
            Transferir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTransferScreen;