import path from "path";
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	base: "https://rdbende.github.io/test-svelte-ci-deploy/",
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$static: path.resolve("./static"),
			$data: path.resolve("./src/data"),
			$layout: path.resolve("./src/layout")
		}
	}
};

export default config;
