<script lang="ts">
	import { onMount } from "svelte";

	import { Footer, Navbar } from "$layout";
	import { docs } from "$data/docs";
	import { Python, GitHub } from "$data/images";

	import "fluent-svelte/theme.css";

	import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
	import Home from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";

	const navbarItems: NavbarItem[] = [
		{
			name: "Home",
			path: "/",
			icon: Home
		},
		{
			name: "Docs",
			path: "/docs",
			sidebarTree: docs,
			icon: Book
		},
	];

	const navbarButtons = [
		{
			label: "Tukaan on Pypi",
			href: "https://pypi.org/project/tukaan",
			icon: Python
		},
		{
			label: "Source code on GitHub",
			href: "https://github.com/tukaan/tukaan",
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
		name="description"
		content="A modern, cross platform Python toolkit for creating desktop GUI applications"
		
	>
	<meta
		name="og:description"
		content="A modern, cross platform Python toolkit for creating desktop GUI applications"
	>
</svelte:head>

<Navbar buttons={navbarButtons} items={navbarItems} />
<slot />
<Footer />

<style global lang="scss">
	@use "src/styles/global";
	@use "src/styles/markdown";
</style>
