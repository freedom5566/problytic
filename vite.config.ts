import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [tailwindcss(), sveltekit(), mockDevServerPlugin()],
		server: {
			host: '0.0.0.0',
			port: 5173,
			proxy: {
				'^/api': 'http://0.0.0.0:5174'
			}
		},
		define: {
			__BASE_URL__: JSON.stringify(env.VITE_BASE_URL)
		}
	};
});
