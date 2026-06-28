import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { devtools } from "@tanstack/devtools-vite";
import { fileURLToPath } from "url";

export default defineConfig({
	server: {
		port: 3000,
	},
	optimizeDeps: {
		include: ["@scarlab-icons/react"],
	},
	resolve: {
		tsconfigPaths: true,
		alias: {
			"~convex": fileURLToPath(new URL("./convex", import.meta.url))
		},
	},
	plugins: [
		tailwindcss(),
		devtools(),
		tanstackStart(),
		viteReact()
	],
});
