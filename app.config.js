import 'dotenv/config';

export default {
  expo: {
    name: 'AUREA',
    slug: 'aurea',
    version: '1.0.0',
    android: {
      package: 'com.example.aurea'
    },
    ios: {
      bundleIdentifier: 'com.example.aurea'
    },
    extra: {
      openaiApiKey: process.env.OPENAI_API_KEY,
    },
  },
};
