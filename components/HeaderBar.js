import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderBar({
  title,
  navigation,
  canGoBack = true,
  rightIcons = [], // array of { name, onPress }
}) {
  return (
    <View style={styles.container}>
      {canGoBack ? (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      {rightIcons.length > 0 ? (
        <View style={styles.rightGroup}>
          {rightIcons.map((icon, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.iconBtn}
              onPress={icon.onPress}
            >
              <Ionicons name={icon.name} size={22} color="#000" />
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
}

const BAR_YELLOW = '#FFE600';

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: BAR_YELLOW,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  backButton: {
    padding: 8,
  },
  iconBtn: {
    padding: 8,
  },
  rightGroup: {
    flexDirection: 'row',
  },
  placeholder: {
    width: 44,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    paddingHorizontal: 4,
  },
});