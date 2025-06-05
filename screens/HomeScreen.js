import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ageGroups = [
  { label: 'Niño', value: 'child' },
  { label: 'Adolescente', value: 'teen' },
  { label: 'Adulto', value: 'adult' },
  { label: 'Adulto mayor', value: 'senior' }
];

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState('');
  const [ageGroup, setAgeGroup] = useState(ageGroups[2].value);

  const startChat = () => {
    navigation.navigate('Chat', { name, ageGroup });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a AUREA</Text>
      <TextInput
        placeholder="¿Cómo quieres llamar al avatar?"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Text style={styles.subtitle}>Selecciona tu grupo de edad:</Text>
      {ageGroups.map((g) => (
        <View key={g.value} style={styles.radioRow}>
          <Button
            title={g.label}
            onPress={() => setAgeGroup(g.value)}
            color={ageGroup === g.value ? '#2196F3' : '#8e8e8e'}
          />
        </View>
      ))}
      <Button title="Empezar" onPress={startChat} disabled={!name} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  subtitle: { fontSize: 18, marginTop: 20 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5 },
  radioRow: { marginVertical: 5 }
});
