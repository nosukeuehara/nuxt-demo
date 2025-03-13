// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      KEYCLOAK_URL: "http://localhost:8080",
      KEYCLOAK_REALM: "myrealm",
      KEYCLOAK_CLIENT_ID: "myclient",
    },
  },
  plugins: [
    { src: '@/plugins/keycloak.ts', mode: 'client' },
  ],
})
