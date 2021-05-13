<script>
	import logo from './svelte-logo.svg';
</script>

<header>
	<div class="corner">
		Built with: 
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" title="SvelteKit" />
		</a>
	</div>


	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 10em;
		display: inline;
		margin: 1em;
	}

	.corner a {
		vertical-align: middle;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
