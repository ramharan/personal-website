import { defineConfig } from "@playwright/test";
const port = Number(process.env.PORTFOLIO_TEST_PORT || 43127);
export default defineConfig({
  testDir: "./tests",
  use: { baseURL: `http://127.0.0.1:${port}` },
  webServer: {
    command: `PORT=${port} npm start`,
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: false,
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 1000 } } },
    {
      name: "mobile",
      use: {
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
});
