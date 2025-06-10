import 'dotenv/config';

export default {
  expo: {
    name: 'AUREA',
    slug: 'aurea',
    version: '1.0.0',
    extra: {
      openaiApiKey: process.env.OPENAI_API_KEY,
    },
  },
};
