export default function detectCrisis(text) {
  const phrases = [
    'quiero morirme',
    'ya no quiero vivir'
  ];
  return phrases.some(p => text.toLowerCase().includes(p));
}
