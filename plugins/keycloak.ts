import Keycloak from "keycloak-js";

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();

  const keycloak = new Keycloak({
    url: config.public.KEYCLOAK_URL,
    realm: config.public.KEYCLOAK_REALM,
    clientId: config.public.KEYCLOAK_CLIENT_ID,
  });


  try {
    await keycloak.init({
      onLoad: "check-sso",
      pkceMethod: "S256",
      responseMode: "query",
      flow: "standard",
      checkLoginIframe: false,
      enableLogging: true,
      useNonce: true,
      scope: "openid email profile",
      redirectUri: "http://localhost:3000"
    }
    );
  } catch (error) {
    console.error("Keycloak initialization failed:", error);
  }

  nuxtApp.provide("keycloak", keycloak);
});
