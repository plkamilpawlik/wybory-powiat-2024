import { defineConfig } from "astro/config";

// plugins
import astroIcon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [astroIcon({ include: ["mdi"] }), tailwind()],
});
