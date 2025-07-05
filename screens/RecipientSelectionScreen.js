import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';

const recipients = [
  { id: '1', name: 'Acosta Hector Federico', bank: 'Banco Santander Rio' },
  { id: '2', name: 'Diniger Walter', bank: 'BBVA' },
  { id: '3', name: 'Kiara Natalia Acosta Giraudo', bank: 'Brubank' },
  { id: '4', name: 'Saldivia Matias', bank: 'Banco Galicia' },
  { id: '5', name: 'Rocio Salomon', bank: 'Mercado Pago' },
];

export default function RecipientSelectionScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('AmountEntry', { recipient: item })}
    >
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.bank}>{item.bank}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderBar title="¿A quién le querés transferir?" navigation={navigation} />
      <FlatList
        data={recipients}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  bank: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});