<template>
  <div class="flex items-center justify-center min-h-screen bg-black text-white">
    <div class="text-center">
      <h1 class="text-3xl font-extrabold mb-4">Welcome to SkiGPT.ai</h1>
      <div class="flex items-center justify-center">
        <input v-model="inputText" type="text" class="text-black rounded-xl p-4 w-full max-w-md" placeholder="Type your prompt here...">
        <button @click="startListening" class="ml-4 bg-white text-black rounded-xl p-4">🎙️</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useSpeechRecognition } from '@vueuse/core';

export default {
  setup() {
    const inputText = ref('');
    const { isListening, result, start, stop } = useSpeechRecognition({
      onResult: (event) => {
        inputText.value = event.results[0][0].transcript;
      },
    });

    const startListening = () => {
      if (isListening.value) {
        stop();
      } else {
        start();
      }
    };

    return {
      inputText,
      startListening,
    };
  },
};
</script>