import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { devtools } from "@tanstack/devtools-vite";
import { nitro } from "nitro/vite";
// import { fileURLToPath } from "url";

export default defineConfig({
	server: {
		port: 3000,
	},
	optimizeDeps: {
		exclude: ["@scarlab-icons/react"],
	},
	resolve: {
		tsconfigPaths: true,
		// alias: {
		// 	"~convex": fileURLToPath(new URL("./convex", import.meta.url)),
		// 	"~dialog": fileURLToPath(
		// 		new URL("./src/components/dialog", import.meta.url),
		// 	),
		// 	"~input": fileURLToPath(
		// 		new URL("./src/components/input", import.meta.url),
		// 	),
		// 	"~primitives/*": fileURLToPath(
		// 		new URL("@cloudflare/kumo/primitives/*", import.meta.url),
		// 	),
		// },
	},
	plugins: [tailwindcss(), devtools(), tanstackStart(), viteReact(), nitro()],
});
