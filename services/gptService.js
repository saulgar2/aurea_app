import Constants from 'expo-constants';

const apiKey = Constants.expoConfig.extra.openaiApiKey;

export async function askGpt(userText, ageGroup, history) {
  const messages = history.map((m) => ({ role: m.from === 'bot' ? 'assistant' : 'user', content: m.text }));
  messages.push({ role: 'user', content: userText });
  const systemPrompt = `Eres AUREA, un asistente emocional empático para la edad ${ageGroup}. No das consejos médicos ni diagnósticos, solo escuchas y validas emociones.`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'system', content: systemPrompt }, ...messages],
      max_tokens: 150
    })
  });
  const data = await response.json();
  return data.choices[0].message.content.trim();
}
