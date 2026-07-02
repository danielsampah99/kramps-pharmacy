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
import { tableDevtoolsPlugin } from "@tanstack/react-table-devtools";
import appCss from "~/styles/app.css?url";
import { Toasty } from "@cloudflare/kumo";
import { TooltipProvider } from "~/components/tooltip";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";

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

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

function RootComponent() {
	return (
		<RootDocument>
			<Toasty>
				<ConvexAuthProvider client={convex}>
					<TooltipProvider delay={0}>
						<Outlet />
					</TooltipProvider>
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
							tableDevtoolsPlugin(),
						]}
					/>
				</ConvexAuthProvider>
			</Toasty>
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head>
				<HeadContent />
			</head>
			<body className="selection:bg-emerald-600 selection:text-white">
				<Toasty>{children}</Toasty>
				<Scripts />
			</body>
		</html>
	);
}
