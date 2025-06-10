import Voice from 'react-native-voice';

export function listen() {
  return new Promise((resolve) => {
    Voice.onSpeechResults = (e) => {
      resolve(e.value[0]);
      Voice.destroy().then(Voice.removeAllListeners);
    };
    Voice.start('es-ES');
  });
}
