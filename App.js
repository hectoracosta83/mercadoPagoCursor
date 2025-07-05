import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DepositScreen from './screens/DepositScreen';
import RecipientSelectionScreen from './screens/RecipientSelectionScreen';
import AmountEntryScreen from './screens/AmountEntryScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import ReceiptScreen from './screens/ReceiptScreen';
import QRScannerScreen from './screens/QRScannerScreen';

const Stack = createStackNavigator();

export default function App() {
  const [balance, setBalance] = useState(0);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} balance={balance} />}
        </Stack.Screen>
        <Stack.Screen name="Deposit">
          {props => (
            <DepositScreen
              {...props}
              balance={balance}
              setBalance={setBalance}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Recipients" component={RecipientSelectionScreen} />
        <Stack.Screen name="AmountEntry" component={AmountEntryScreen} />
        <Stack.Screen name="Confirm">
          {props => (
            <ConfirmationScreen
              {...props}
              balance={balance}
              setBalance={setBalance}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Receipt" component={ReceiptScreen} />
        <Stack.Screen name="QRScanner" component={QRScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}