<template>
  <div class="min-h-screen bg-black text-white">
    <header class="p-4 bg-black text-white">
      <h1 class="text-3xl font-extrabold">User Profile</h1>
    </header>
    <nav class="p-4">
      <router-link to="details" class="block p-2">User Details</router-link>
      <router-link to="friends" class="block p-2">Friends</router-link>
      <router-link to="locations" class="block p-2">Locations</router-link>
      <router-link to="settings" class="block p-2">Settings</router-link>
    </nav>
    <main class="p-4">
      <router-view></router-view>
    </main>
  </div>
</template>