<script lang="ts">
	import { externalLink, PageSection } from "$lib";
	import { Button, IconButton } from "fluent-svelte";
</script>

<PageSection type="footer" id="page-footer">
	<div class="column">
		<a class="logo" href="/" sveltekit:prefetch>
			<img alt="Tukaan logo" src="/branding/logo.png">
			Tukaan
		</a>
		<p>Copyright © 2021 - {new Date().getFullYear()} The Tukaan team</p>
	</div>
	<div class="column">
		<p>Pages</p>
		<Button variant="hyperlink" sveltekit:prefetch href="/">
			Home
		</Button>
		<Button variant="hyperlink" sveltekit:prefetch href="/docs">
			Documentation
		</Button>
	</div>
	<div class="column">
		<p>Contribute to Tukaan</p>

		<Button variant="hyperlink" {...externalLink}
				href="https://github.com/tukaan/tukaan/"
		>
			GitHub repo
		</Button>

		<Button variant="hyperlink" {...externalLink}
		        href="https://github.com/tukaan/tukaan/discussions/new?category=feedback"
		>
			Give feedback
		</Button>
	</div>
	<div class="column">
		<p>Contribute to this site</p>
		<Button variant="hyperlink" {...externalLink}
		        href="https://github.com/tukaan/tukaan.github.io/"
		>
			GitHub repo
		</Button>

		<Button variant="hyperlink" {...externalLink}
		        href="https://github.com/tukaan/tukaan.github.io/issues/new"
		>
			Found a bug?
		</Button>
	</div>
</PageSection>

<style lang="scss">
	@use "./Footer";
</style>
