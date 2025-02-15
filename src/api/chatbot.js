import axios from 'axios';

const API_KEY = process.env.VUE_APP_OPENAI_API_KEY;

export const sendPrompt = async (prompt) => {
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: prompt,
    max_tokens: 100,
  }, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });

  return response.data.choices[0].text;
};