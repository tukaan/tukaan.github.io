<script lang="ts">
	import { PageSection } from "$lib";
	import Copy from "@fluentui/svg-icons/icons/copy_24_regular.svg?raw";

	const copyInstallCommand = () => {
		navigator.clipboard.writeText("pip install tukaan");
	};

</script>

<PageSection id="hero-section">
	<div class="hero-left">
		<h1>The <em>new</em><br> experience</h1>
		<p>Tukaan is a modern, cross platform Python toolkit for creating desktop GUI applications</p>
	</div>
	<div class="hero-right">
		<div class="pypi-command-wrapper">
			<div class="pypi-command">
				<span>pip install tukaan</span>
				<button
					aria-label="Copy terminal command"
					class="copy-button"
					on:click={copyInstallCommand}
					title="Copy command"
				>
					{@html Copy}
				</button>
			</div>
		</div>
	</div>
</PageSection>

<style lang="scss">
	@use "HeroSection";
</style>
