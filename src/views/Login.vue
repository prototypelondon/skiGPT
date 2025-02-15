<template>
  <div class="flex items-center justify-center min-h-screen bg-black text-white">
    <div class="text-center">
      <h1 class="text-3xl font-extrabold mb-4">Login to SkiGPT.ai</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" class="text-black rounded-xl p-4 w-full max-w-md mb-4" placeholder="Email">
        <input v-model="password" type="password" class="text-black rounded-xl p-4 w-full max-w-md mb-4" placeholder="Password">
        <button type="submit" class="bg-white text-black rounded-xl p-4 w-full max-w-md mb-4">Login</button>
        <button @click="signInWithGoogle" class="bg-white text-black rounded-xl p-4 w-full max-w-md mb-4">Sign in with Google</button>
        <button @click="signInWithApple" class="bg-white text-black rounded-xl p-4 w-full max-w-md">Sign in with Apple</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Implement login functionality here
    },
    signInWithGoogle() {
      // Implement Google Sign-In functionality here
    },
    signInWithApple() {
      // Implement Apple Sign-In functionality here
    },
  },
};
</script>