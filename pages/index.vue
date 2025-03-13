<script setup>
const { $keycloak } = useNuxtApp();

const login = async () => {
  await $keycloak.login()
};

const logout = async () => {
  await $keycloak.logout();
};

onBeforeMount(async () => {
  await navigateTo("/loginForm");
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
        Keycloak でログイン root
      </button>
    </div>
  </client-only>
</template>
