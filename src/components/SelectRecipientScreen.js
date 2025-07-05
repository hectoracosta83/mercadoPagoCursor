import React, { useState } from 'react';
import './SelectRecipientScreen.css';

const SelectRecipientScreen = ({ onSelectRecipient, onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const recipients = [
    {
      id: 1,
      name: 'Acosta Hector Federico',
      initials: 'AF',
      bank: 'Banco Santander',
      type: 'VOS',
      iconColor: '#e74c3c',
      icon: '🏦'
    },
    {
      id: 2,
      name: 'Dinigri Walter',
      initials: 'DW',
      bank: 'BBVA',
      type: 'Ferretería Tattoo',
      iconColor: '#3498db',
      icon: '🏪'
    },
    {
      id: 3,
      name: 'Kiara Natalia Acosta Giraudo',
      initials: 'KG',
      bank: 'MercadoPago',
      type: '',
      iconColor: '#009ee3',
      icon: '🤝'
    },
    {
      id: 4,
      name: 'Saldivia Matias',
      initials: 'SM',
      bank: 'Banco Galicia',
      type: 'Ferretería Esquina',
      iconColor: '#e74c3c',
      icon: '🏪'
    },
    {
      id: 5,
      name: 'Rocio.salomon',
      initials: 'R',
      bank: 'MercadoPago',
      type: '',
      iconColor: '#27ae60',
      icon: '🤝'
    },
    {
      id: 6,
      name: 'Ernesto Esteban Salomon',
      initials: 'ES',
      bank: 'Banco Nación',
      type: '',
      iconColor: '#f39c12',
      icon: '⛪'
    },
    {
      id: 7,
      name: 'Cocos Capital Sa',
      initials: 'CS',
      bank: 'Banco Macro',
      type: '',
      iconColor: '#e74c3c',
      icon: '🏢'
    },
    {
      id: 8,
      name: 'Mauro Ruben Ariel Polvora',
      initials: 'MP',
      bank: 'MercadoPago',
      type: '',
      iconColor: '#009ee3',
      icon: '🤝'
    },
    {
      id: 9,
      name: 'Maria Laura Giraudo',
      initials: 'MG',
      bank: 'Banco Nación',
      type: 'NX',
      iconColor: '#ff6b35',
      icon: '🏦'
    }
  ];

  const filteredRecipients = recipients.filter(recipient =>
    recipient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipient.bank.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRecipientSelect = (recipient) => {
    onSelectRecipient(recipient);
  };

  return (
    <div className="select-recipient-screen">
      <div className="header">
        <button className="header-back" onClick={onBack}>
          ←
        </button>
        <h1>¿A quién le querés transferir?</h1>
        <button className="header-action">
          ❓
        </button>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Alias, CBU/CVU, celular o nombre"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="recipients-section">
        <h2>Recientes</h2>
        
        <div className="recipients-list">
          {filteredRecipients.map(recipient => (
            <div 
              key={recipient.id}
              className="recipient-item"
              onClick={() => handleRecipientSelect(recipient)}
            >
              <div className="recipient-avatar">
                <div 
                  className="avatar-circle"
                  style={{ backgroundColor: recipient.iconColor }}
                >
                  {recipient.icon}
                </div>
                <div className="avatar-initials">
                  {recipient.initials}
                </div>
              </div>
              
              <div className="recipient-info">
                <div className="recipient-name">
                  {recipient.name}
                  {recipient.type && (
                    <span className="recipient-type">{recipient.type}</span>
                  )}
                </div>
                <div className="recipient-bank">
                  {recipient.bank}
                </div>
              </div>
              
              <div className="recipient-action">
                <button className="action-dots">⋮</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectRecipientScreen;