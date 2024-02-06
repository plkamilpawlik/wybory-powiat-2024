import { defineConfig } from "astro/config";

// plugins
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
});
