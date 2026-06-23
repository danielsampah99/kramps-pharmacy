import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { FormDevtoolsPanel } from "@tanstack/react-form-devtools";
import appCss from "~/styles/app.css?url";
import { Navbar } from "~/components/navbar";
import { Sidebar } from "~/components/sidebar";

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Kramps Pharmacy",
			},
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
			{ rel: "icon", href: "/favicon.ico" },
		],
	}),
	notFoundComponent: () => <div>Route not found</div>,
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Navbar />

			<section className="w-full min-h-[calc(100lvh-64px)] bg-linear-to-r/oklch from-logo/70 via-white to-brand/30">
				<Sidebar />
				<main>
					<Outlet />
				</main>
			</section>
			<TanStackDevtools
				plugins={[
					{
						name: "Query Devtools",
						render: <ReactQueryDevtoolsPanel />,
					},
					{
						name: "Router Devtools",
						render: <TanStackRouterDevtoolsPanel />,
					},
					{
						name: "Form Devtools",
						render: <FormDevtoolsPanel />,
					},
				]}
			/>
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
