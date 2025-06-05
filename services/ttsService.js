import * as Speech from 'expo-speech';

export function speak(text, ageGroup) {
  const options = { rate: 1.0, pitch: 1.0 };
  Speech.speak(text, options);
}
