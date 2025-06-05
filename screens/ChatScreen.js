import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Avatar from '../components/Avatar';
import VoiceButton from '../components/VoiceButton';
import { speak } from '../services/ttsService';
import { listen } from '../services/sttService';
import { askGpt } from '../services/gptService';
import detectCrisis from '../utils/detectCrisis';

export default function ChatScreen({ route, navigation }) {
  const { name, ageGroup } = route.params;
  const [messages, setMessages] = useState([]);
  const [round, setRound] = useState(0);
  const MAX_ROUNDS = 5;

  useEffect(() => {
    speak(`Hola soy ${name}. ¿Cómo te sientes hoy?`, ageGroup);
  }, []);

  const handleSpeech = async () => {
    const userText = await listen();
    if (!userText) return;
    if (detectCrisis(userText)) {
      const crisisMsg =
        'Lamento escuchar eso. Por favor busca ayuda profesional o llama a emergencias.';
      setMessages((m) => [...m, { from: 'user', text: userText }, { from: 'bot', text: crisisMsg }]);
      speak(crisisMsg, ageGroup);
      return;
    }

    const botText = await askGpt(userText, ageGroup, messages);
    setMessages((m) => [...m, { from: 'user', text: userText }, { from: 'bot', text: botText }]);
    speak(botText, ageGroup);
    const newRound = round + 1;
    setRound(newRound);
    if (newRound >= MAX_ROUNDS || userText.toLowerCase().includes('ya me siento mejor')) {
      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Avatar />
      {messages.map((msg, idx) => (
        <Text key={idx} style={msg.from === 'bot' ? styles.bot : styles.user}>
          {msg.text}
        </Text>
      ))}
      <VoiceButton onPress={handleSpeech} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  bot: { alignSelf: 'flex-start', marginVertical: 5 },
  user: { alignSelf: 'flex-end', marginVertical: 5 }
});
