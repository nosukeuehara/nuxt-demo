<script setup>
import { useNuxtApp } from '#app';

const { $keycloak } = useNuxtApp();

const login = async () => {
  await $keycloak.login()
};

const logout = async () => {
  await $keycloak.logout();
};

onBeforeMount(async () => {
  await navigateTo("/home");
});

</script>

<template>
  <client-only>
    <div v-if="$keycloak.authenticated">
      <button @click="logout">
        ログアウト
      </button>
    </div>
    <div v-else>
      <button @click="login">
        Keycloak でログイン
      </button>
    </div>
  </client-only>
</template>
