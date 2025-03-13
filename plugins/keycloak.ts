import Keycloak from "keycloak-js";

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();

  const keycloak = new Keycloak({
    url: config.public.KEYCLOAK_URL,
    realm: config.public.KEYCLOAK_REALM,
    clientId: config.public.KEYCLOAK_CLIENT_ID,
  });


  try {
    const authenticated = await keycloak.init({ onLoad: "check-sso" });

    if (authenticated) {
      console.log("Authenticated");
    } else {
      console.log("Authentication failed");
    }
  } catch (error) {
    console.log("Keycloak initialization failed:", error);
  }

  nuxtApp.provide("keycloak", keycloak);
});
