import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

// export default defineConfig({
// 	plugins: [tailwindcss(), sveltekit()],
// 	server: {
//     	host: '0.0.0.0',
//     	port: 5173
//   }
// });

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [tailwindcss(), sveltekit()],
		server: {
			host: '0.0.0.0',
			port: 5173
		},
		define: {
			__BASE_URL__: JSON.stringify(env.VITE_BASE_URL)
		}
	};
});
