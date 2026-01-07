import { cloudflare } from "@cloudflare/vite-plugin";
import contentCollections from "@content-collections/vite";
import { redwood } from "rwsdk/vite";
import { defineConfig } from "@voidzero-dev/vite-plus";

export default defineConfig({
  plugins: [
    cloudflare({
      viteEnvironment: { name: "worker" },
    }),
    redwood(),
    contentCollections(),
  ],
});
