import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { artists2024 } from "./src/lib/notes/2024/artists.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			fallback: "404.html"
		}),
		prerender: {
			entries: [
				"/", // todo:
				"/2024", // todo:
				"/2024/notes", // todo:
				...artists2024.map((_s, i) => `/2024/${i}`)
			]
		}
	},

	extensions: [".svelte", ".svx"]
};

export default config;
