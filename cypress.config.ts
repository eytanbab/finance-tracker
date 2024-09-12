import { clerkSetup } from '@clerk/testing/cypress';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return clerkSetup({ config });
    },
    baseUrl: 'http://localhost:3000',
  },
});
