<script context="module" lang="ts">
	import type { ErrorLoad } from "@sveltejs/kit";

	export const load: ErrorLoad = ({ error, status }) => {
		return {
			props: {
				status: status,
				error: error
			}
		};
	};
</script>

<script lang="ts">
	import { Metadata } from "$lib";

	export let status: number;
	export let error: Error;
</script>

<svelte:head>
	<Metadata title="Error"/>
</svelte:head>

<section class="error-page">
	<h1>{status}</h1>
	<p>{error}</p>
</section>

<style lang="scss">
	@use "src/styles/pages/error";
</style>
