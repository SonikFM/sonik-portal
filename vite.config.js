import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		plugins: [react()],
		server: {
			host: true,
			strictPort: true,
			port: 8000,
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
		define: {
			__APP_ENV__: JSON.stringify(env.APP_ENV),
		},
	};
});
