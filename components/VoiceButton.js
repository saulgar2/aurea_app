import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function VoiceButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Hablar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 50,
    marginTop: 20
  },
  text: { color: '#fff', fontWeight: 'bold' }
});
