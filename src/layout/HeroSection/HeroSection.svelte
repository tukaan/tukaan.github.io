<script lang="ts">
	import { PageSection } from "$lib";
	import { Flyout, IconButton } from "fluent-svelte";
	import Copy from "@fluentui/svg-icons/icons/copy_24_regular.svg?raw";
	import Dismiss from "@fluentui/svg-icons/icons/dismiss_24_regular.svg?raw";

	const copyInstallCommand = () => {
		navigator.clipboard.writeText("pip install tukaan");
	};

	let open = false;

</script>


<PageSection id="hero-section">
	<div class="hero-left">
		<h1>The <em>new</em><br> experience</h1>
		<p>Tukaan is a cross platform Python toolkit for creating desktop GUI applications</p>
	</div>
	<div class="hero-right">
		<div class="pypi-command-wrapper">
			<div class="pypi-command">
				<span>pip install tukaan</span>
				<Flyout placement="bottom" alignment="end" bind:open>
					<IconButton
						on:click={copyInstallCommand}
						title="Copy install command"
						aria-label="Copy install command"
						style="margin-left: 2ch; cursor: pointer;"
					>
						{@html Copy}
					</IconButton>
					<div slot="flyout" style="display: flex; align-items: center; justify-content: space-between;">
						Command copied!
						<IconButton on:click={() => (open = false)}>{@html Dismiss}</IconButton>
					</div>
				</Flyout>
			</div>
		</div>
	</div>
</PageSection>

<style lang="scss">
	@use "HeroSection";
</style>
