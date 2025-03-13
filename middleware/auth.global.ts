export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $keycloak } = await useNuxtApp();
  if (!$keycloak) return;

  if (to.path === "/") return;

  if (!$keycloak.authenticated) {
    console.error('未認証');
    return navigateTo("/");
  }
});
