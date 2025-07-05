import React from 'react';
import './ReceiptScreen.css';

const ReceiptScreen = ({ transfer, onBack }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('es-AR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const handleShare = () => {
    // Simular función de compartir
    alert('Compartiendo comprobante...');
  };

  const handleDownload = () => {
    // Simular función de descarga
    alert('Descargando comprobante...');
  };

  if (!transfer) {
    return <div>Error: No se encontró la transferencia</div>;
  }

  return (
    <div className="receipt-screen">
      <div className="header">
        <button className="header-back" onClick={onBack}>
          ←
        </button>
        <h1>Comprobante</h1>
        <div className="header-actions">
          <button className="header-action" onClick={handleShare}>
            🔗
          </button>
          <button className="header-action" onClick={handleDownload}>
            ⬇️
          </button>
        </div>
      </div>

      <div className="content">
        <div className="receipt-card">
          <div className="mp-logo">
            <div className="mp-icon">🤝</div>
            <div className="mp-text">
              <span className="mp-name">mercado</span>
              <span className="mp-name">pago</span>
            </div>
          </div>

          <div className="transfer-title">
            <h2>Comprobante de transferencia</h2>
            <div className="transfer-date">
              {formatDate(transfer.date)}
            </div>
          </div>

          <div className="amount-section">
            <div className="amount-display">
              {formatCurrency(transfer.amount)}
            </div>
            <div className="amount-label">
              Motivo: Varios
            </div>
          </div>

          <div className="transfer-participants">
            <div className="participant">
              <div className="participant-header">
                <span className="dot blue"></span>
                <span className="participant-label">De</span>
              </div>
              <div className="participant-info">
                <div className="participant-name">Hector Federico Acosta</div>
                <div className="participant-id">CUIT/CUIL: 20-30436891-9</div>
                <div className="participant-account">Mercado Pago</div>
                <div className="participant-cvu">CVU: 0000003100054358184505</div>
              </div>
            </div>

            <div className="participant">
              <div className="participant-header">
                <span className="dot blue"></span>
                <span className="participant-label">Para</span>
              </div>
              <div className="participant-info">
                <div className="participant-name">{transfer.recipient.name}</div>
                <div className="participant-id">CUIT/CUIL: 20-30436891-9</div>
                <div className="participant-account">{transfer.recipient.bank}</div>
                <div className="participant-cvu">CBU: 0720746680000353452786</div>
              </div>
            </div>
          </div>

          <div className="transfer-details">
            <div className="detail-item">
              <span className="detail-label">Número de operación de Mercado Pago</span>
              <span className="detail-value">{transfer.operationNumber}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Código de identificación</span>
              <span className="detail-value">{transfer.identificationCode}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptScreen;