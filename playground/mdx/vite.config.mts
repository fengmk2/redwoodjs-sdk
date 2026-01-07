import { defineConfig } from "@voidzero-dev/vite-plus";
import { redwood } from "rwsdk/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [
    cloudflare({
      viteEnvironment: { name: "worker" },
    }),
    redwood(),
    mdx(),
  ],
});
