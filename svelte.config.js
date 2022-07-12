import path from "path";
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import remarkGithub from "remark-github";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import mediaMinMax from "postcss-media-minmax";


/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte", ".md"],
	kit: {
	    adapter: adapter({
	      // default options are shown. On some platforms
	      // these options are set automatically — see below
	      pages: 'build',
	      assets: 'build',
	      fallback: null,
	      precompress: false
	    }),

	    prerender: {
	      // This can be false if you're using a fallback (i.e. SPA mode)
	      default: true
	    }
	},
	preprocess: [
		mdsvex({
			extension: ".md",

			smartypants: {
				dashes: "oldschool"
			},

			remarkPlugins: [remarkSlug, remarkGfm, remarkGithub]
		}),
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer, cssnano, mediaMinMax]
			}
		})
	],
};

// shut up webstorm
// noinspection JSUnusedGlobalSymbols
export default config;
