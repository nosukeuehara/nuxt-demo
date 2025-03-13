<script setup>
const { $keycloak } = useNuxtApp();

const login = async () => {
  await $keycloak.login()
};

onBeforeMount(async () => {
  await navigateTo("/home");
});


</script>

<template>
  <client-only>
    <div>
      <button @click="login">
        Keycloakでログイン
      </button>
    </div>
  </client-only>
</template>