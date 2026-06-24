import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { devtools } from "@tanstack/devtools-vite";

export default defineConfig({
	server: {
		port: 3000,
	},
	optimizeDeps: {
		include: ["@scarlab-icons/react"],
	},
	ssr: {
		noExternal: ["@scarlab-icons/react"],
	},
	plugins: [
		tailwindcss(),
		devtools(),
		tsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tanstackStart(),
		viteReact(),
	],
});
