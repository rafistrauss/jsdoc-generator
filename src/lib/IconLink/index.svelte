<script>
	export let svg;
	export let link;
	export let label = 'none';
	export let color = 'orange';
</script>

<a href={link} target="_blank" class="iconLink" aria-label={label} style="--hover-color: {color}">
	{@html svg}
</a>

<style>
	.iconLink {
		width: 32px;
		transition: fill 0.3s ease;
		display: inline-flex;
	}

	.iconLink:hover {
		fill: var(--hover-color);
	}
</style>
