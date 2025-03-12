export default defineNuxtRouteMiddleware((to) => {
  const { $keycloak } = useNuxtApp();

  if (!$keycloak) return;

  if (to.path === "/login") return;

  if (!$keycloak.authenticated) {
    return navigateTo("/login");
  }
});
