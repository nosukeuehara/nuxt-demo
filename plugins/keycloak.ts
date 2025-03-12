import Keycloak from "keycloak-js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const keycloak = new Keycloak({
    url: config.public.KEYCLOAK_URL,
    realm: config.public.KEYCLOAK_REALM,
    clientId: config.public.KEYCLOAK_CLIENT_ID,
  });

  return {
    provide: {
      keycloak,
    },
  };
});
