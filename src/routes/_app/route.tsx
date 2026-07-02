import { createFileRoute } from "@tanstack/react-router";
// import { Authenticated } from "convex/react";
import { Navbar } from "~/components/navbar";
import { Sidebar } from "~/components/sidebar";

export const Route = createFileRoute("/_app")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			{/*<Authenticated>*/}
				<Navbar />
				<section className="w-full flex min-h-[calc(100lvh-64px)] bg-linear-to-r/oklch from-logo/70 via-white to-brand/30 flex-col lg:flex-row gap-4 lg:gap-6 py-4 lg:py-6 px-4 sm:px-8 lg:pb-8 lg:overflow-visible">
					<Sidebar />
				</section>
			{/*</Authenticated>*/}
		</>
	);
}
