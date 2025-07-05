import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import ListItem from '../components/ListItem';
import { COLORS } from '../theme';

const recipients = [
  { id: '1', alias: 'ACOSTA.HF', name: 'Acosta Hector Federico', bank: 'Banco Santander Rio' },
  { id: '2', alias: 'DINIGER.W', name: 'Diniger Walter', bank: 'BBVA' },
  { id: '3', alias: 'KIARA.ACOSTA', name: 'Kiara Natalia Acosta Giraudo', bank: 'Brubank' },
  { id: '4', alias: 'SALDIVIA.M', name: 'Saldivia Matias', bank: 'Banco Galicia' },
  { id: '5', alias: 'ROCIO.S', name: 'Rocio Salomon', bank: 'Mercado Pago' },
];

export default function RecipientSelectionScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('AmountEntry', { recipient: item })}
    >
      <ListItem name={item.name} subtitle={item.bank} />
    </TouchableOpacity>
  );

  const ItemSeparator = () => <View style={{ height: 1, backgroundColor: COLORS.divider }} />;

  return (
    <View style={styles.container}>
      <HeaderBar title="¿A quién le querés transferir?" navigation={navigation} />
      <FlatList
        data={recipients}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
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
  // item styles removed – ListItem handles styling
});