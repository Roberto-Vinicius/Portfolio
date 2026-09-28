import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://robertoviniciusdev.netlify.app",
  output: "static",
  trailingSlash: "always",
  devToolbar: {
    enabled: false,
  },
});
