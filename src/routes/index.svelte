<script context="module">
	export const prerender = true;
</script>

<script>
	import { generateJSDocOrError } from '$lib/util';
	let inputValue = `{
    "sampleString": "some string",
    "sampleNumber": 1,
    "sampleBoolean": false,
    "sampleObject": {
        "key": "value"
    },
    "sampleArray": ["asdf"]
}`;
	$: jsdoc = generateJSDocOrError(inputValue);
	let copyText = 'Copy';
</script>

<svelte:head>
	<title>JSDoc Type Generator</title>
</svelte:head>

<h1 class="welcome">
		JSDoc Type Generator
</h1>
<h2 style="font-size: larger; text-align: center;">
	This tool will generate JSDoc types for valid JSON inserted into the textarea.
</h2>
<section>

	<label for="jsonInput">Enter/Paste JSON here:</label>
	<textarea bind:value={inputValue} name="jsonInput" id="" cols="50" rows="10" />
	{#if jsdoc === -1}
		<p>Invalid JSON input</p>
	{:else if jsdoc === null}
		
	<!-- else content here -->
	{:else}
		<div style="position: relative; margin-top: 1em;">
			<button on:click={async () => {
				
				await navigator.clipboard.writeText(jsdoc);
				copyText = 'Copied';
				setTimeout(() => {
					copyText = 'Copy';
				}, 1500)
			}} style="position: absolute; right: 0; top: 0">{copyText}</button>
			<pre style="margin: 0;;">
				<code>
					{jsdoc}
				</code>
			</pre>
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		margin-top: 0;
	}

</style>
