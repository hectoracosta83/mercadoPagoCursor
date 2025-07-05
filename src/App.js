import React, { useState, useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import AddMoneyScreen from './components/AddMoneyScreen';
import SelectRecipientScreen from './components/SelectRecipientScreen';
import EnterAmountScreen from './components/EnterAmountScreen';
import ConfirmTransferScreen from './components/ConfirmTransferScreen';
import ReceiptScreen from './components/ReceiptScreen';

const SCREENS = {
  HOME: 'home',
  ADD_MONEY: 'add_money',
  SELECT_RECIPIENT: 'select_recipient',
  ENTER_AMOUNT: 'enter_amount',
  CONFIRM_TRANSFER: 'confirm_transfer',
  RECEIPT: 'receipt'
};

function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.HOME);
  const [balance, setBalance] = useState(1106900.63);
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [transferAmount, setTransferAmount] = useState(0);
  const [lastTransfer, setLastTransfer] = useState(null);

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const savedBalance = localStorage.getItem('balance');
    if (savedBalance) {
      setBalance(parseFloat(savedBalance));
    }
  }, []);

  // Guardar balance en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('balance', balance.toString());
  }, [balance]);

  const navigateToScreen = (screen) => {
    setCurrentScreen(screen);
  };

  const handleAddMoney = (amount) => {
    setBalance(prevBalance => prevBalance + amount);
    setCurrentScreen(SCREENS.HOME);
  };

  const handleSelectRecipient = (recipient) => {
    setSelectedRecipient(recipient);
    setCurrentScreen(SCREENS.ENTER_AMOUNT);
  };

  const handleEnterAmount = (amount) => {
    setTransferAmount(amount);
    setCurrentScreen(SCREENS.CONFIRM_TRANSFER);
  };

  const handleConfirmTransfer = () => {
    if (balance >= transferAmount) {
      const newBalance = balance - transferAmount;
      setBalance(newBalance);
      
      const transfer = {
        id: Date.now(),
        recipient: selectedRecipient,
        amount: transferAmount,
        date: new Date(),
        operationNumber: Math.floor(Math.random() * 1000000000000) + 100000000000,
        identificationCode: Math.random().toString(36).substring(2, 11).toUpperCase() + Math.random().toString(36).substring(2, 11).toUpperCase()
      };
      
      setLastTransfer(transfer);
      setCurrentScreen(SCREENS.RECEIPT);
    }
  };

  const handleBackToHome = () => {
    setCurrentScreen(SCREENS.HOME);
    setSelectedRecipient(null);
    setTransferAmount(0);
    setLastTransfer(null);
  };

  const handleScanQR = () => {
    // Simular apertura de cámara
    alert('Abriendo cámara para escanear QR...');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case SCREENS.HOME:
        return (
          <HomeScreen 
            balance={balance}
            onAddMoney={() => navigateToScreen(SCREENS.ADD_MONEY)}
            onTransfer={() => navigateToScreen(SCREENS.SELECT_RECIPIENT)}
            onScanQR={handleScanQR}
          />
        );
      case SCREENS.ADD_MONEY:
        return (
          <AddMoneyScreen 
            onConfirm={handleAddMoney}
            onBack={() => navigateToScreen(SCREENS.HOME)}
          />
        );
      case SCREENS.SELECT_RECIPIENT:
        return (
          <SelectRecipientScreen 
            onSelectRecipient={handleSelectRecipient}
            onBack={() => navigateToScreen(SCREENS.HOME)}
          />
        );
      case SCREENS.ENTER_AMOUNT:
        return (
          <EnterAmountScreen 
            balance={balance}
            onConfirm={handleEnterAmount}
            onBack={() => navigateToScreen(SCREENS.SELECT_RECIPIENT)}
          />
        );
      case SCREENS.CONFIRM_TRANSFER:
        return (
          <ConfirmTransferScreen 
            recipient={selectedRecipient}
            amount={transferAmount}
            balance={balance}
            onConfirm={handleConfirmTransfer}
            onBack={() => navigateToScreen(SCREENS.ENTER_AMOUNT)}
          />
        );
      case SCREENS.RECEIPT:
        return (
          <ReceiptScreen 
            transfer={lastTransfer}
            onBack={handleBackToHome}
          />
        );
      default:
        return (
          <HomeScreen 
            balance={balance}
            onAddMoney={() => navigateToScreen(SCREENS.ADD_MONEY)}
            onTransfer={() => navigateToScreen(SCREENS.SELECT_RECIPIENT)}
            onScanQR={handleScanQR}
          />
        );
    }
  };

  return (
    <div className="container">
      {renderScreen()}
    </div>
  );
}

export default App;