<script lang="ts">
	import { onMount } from "svelte";

	import { Footer, Navbar } from "$layout";
	import { docs } from "$data/docs";
	import { GitHub } from "$data/svg";

	import "fluent-svelte/theme.css";

	import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";

	const navbarItems: NavbarItem[] = [
		{
			name: "Home",
			path: "/"
		},
		{
			name: "Docs",
			path: "/docs",
			sidebarTree: docs,
		},
	];

	const navbarButtons = [
		{
			label: "Pypi",
			href: `https://pypi.org/project/tukaan`,
			icon: Code
		},
		{
			label: "GitHub",
			href: `https://github.com/tukaan/tukaan`,
			icon: GitHub
		}
	];

	let theme: "light" | "dark" = "light";

	onMount(() => {
		theme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";

		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
			theme = e.matches ? "dark" : "light";
		});
	});

</script>

<svelte:head>
	<meta
		content="A modern, cross platform Python toolkit for creating desktop GUI applications"
		name="description"
	>
	<meta
		content="A modern, cross platform Python toolkit for creating desktop GUI applications"
		name="og:description"
	>
</svelte:head>

<Navbar buttons={navbarButtons} items={navbarItems} />
<slot />
<Footer />

<style global lang="scss">
	@use "src/styles/global";
	@use "src/styles/markdown";
</style>
