import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		vite: {
			server: {
				fs: {
					allow: [".."]
				}
			}
		},
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: { base: '/jsdoc-generator' }
	}
};
