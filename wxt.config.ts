import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  manifest: {
    action: {
      default_title: 'Helllo Title',
    },
    web_accessible_resources: [
      {
        matches: ['*://*.google.com/*'],
        resources: ['icon/*.png'],
      },
    ],
    content_scripts: [
      {
        matches: ["*://*/*"],
        js: ["floater.js"]
      }
    ]
  },
});
