<script context="module">
	export const prerender = true;
</script>

<script>
	import { version } from '../../package.json';
	import ogImageUrl from '$lib/images/jsdoc-gen.jpg';
	import { generateJSDocOrError } from '$lib/util';

	const pageTitle = `JSDoc Type Generator v${version}`;
	const pageUrl = 'https://rafistrauss.github.io/jsdoc-generator/';
	const pageDescription =
		'Automatically generate JSDoc Types from arbitrary JSON objects; infers the shape of JSON to generate JSDoc Types and lets you copy them easily';

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
	<title>{pageTitle}</title>
	<link rel="canonical" href={pageUrl} />
	<meta name="description" content={pageDescription} />
	<meta name="author" content="Rafi Strauss" />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:secure_url" content={ogImageUrl} />
	<meta property="og:image:type" content={'image/jpg'} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:type" content="website" />

	<meta name="twitter:image:src" content={ogImageUrl} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:card" content="summary_large_image" />

	<meta name="thumbnail" content={ogImageUrl} />

	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "WebApplication",
			"name": "JSDoc Type Generator",
			"url": "https://rafistrauss.github.io/jsdoc-generator/",
			"description": "Automatically generate JSDoc Types from arbitrary JSON objects; infers the shape of JSON to generate JSDoc Types and lets you copy them easily",
			"applicationCategory": "UtilitiesApplication",
			"genre": "software",
			"about": {
				"@type": "Thing",
				"description": "jsdoc"
			},
			"browserRequirements": "Requires JavaScript. Requires HTML5.",
			"softwareVersion": "1.0.0",
			"operatingSystem": "All"
		}
	</script>
</svelte:head>

<h1 class="welcome">JSDoc Type Generator</h1>
<h2 style="font-size: larger; text-align: center;">
	This tool will generate JSDoc types for valid JSON inserted into the textarea.
</h2>
<section>
	<label for="jsonInput">Enter/Paste JSON here:</label>
	<textarea bind:value={inputValue} name="jsonInput" id="jsonInput" cols="50" rows="10" />
	{#if jsdoc === -1}
		<p>Invalid JSON input</p>
	{:else if jsdoc === null}
		<!-- else content here -->
	{:else}
		<div style="position: relative; margin-top: 1em;">
			<button
				on:click={async () => {
					await navigator.clipboard.writeText(jsdoc);
					copyText = 'Copied';
					setTimeout(() => {
						copyText = 'Copy';
					}, 1500);
				}}
				style="position: absolute; right: 0; top: 0"
			>
				{copyText}
			</button>
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
