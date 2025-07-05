import React from 'react';
import './HomeScreen.css';

const HomeScreen = ({ balance, onAddMoney, onTransfer, onScanQR }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="home-screen">
      {/* Balance Section */}
      <div className="balance-section">
        <div className="balance-amount">
          {formatCurrency(balance)}
        </div>
        <div className="balance-label">
          Dinero disponible
        </div>
      </div>

      {/* User Info Section */}
      <div className="user-info">
        <div className="user-name">Hector Federico Acosta</div>
        <div className="user-id">CUIT/CUIL: 20-30436891-9</div>
        <div className="mp-logo">
          <div className="mp-icon">🤝</div>
          <span className="mp-text">mercado pago</span>
        </div>
      </div>

      {/* Actions Section */}
      <div className="actions-section">
        <div className="action-buttons">
          <button 
            className="action-button"
            onClick={onScanQR}
          >
            <span className="icon-qr"></span>
            Escanear QR
          </button>
          
          <button 
            className="action-button primary"
            onClick={onAddMoney}
          >
            <span className="icon-money"></span>
            Ingresar dinero
          </button>
          
          <button 
            className="action-button secondary"
            onClick={onTransfer}
          >
            <span className="icon-transfer"></span>
            Transferir
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;