<template>
  <ClientOnly>
    hello
    <div v-if="$keycloak.authenticated">
      <button @click="logout">
        ログアウト
      </button>
    </div>

  </ClientOnly>
</template>

<script setup>
const { $keycloak } = useNuxtApp();


const logout = async () =>{
  await $keycloak.logout()
}
</script>