/// <reference types="cypress" />
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.{ts,js}",
    baseUrl: "http://localhost:8081",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
