<script setup>
const { $keycloak } = useNuxtApp();

const login = () => {
  $keycloak.login();
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <button @click="login" class="bg-blue-500 text-white px-4 py-2 rounded">
      Keycloak でログイン
    </button>
  </div>
</template>
