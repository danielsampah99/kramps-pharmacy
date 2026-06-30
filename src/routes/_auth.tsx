import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Unauthenticated } from "convex/react";

export const Route = createFileRoute("/_auth")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Unauthenticated>
			<Outlet />
		</Unauthenticated>
	);
}
