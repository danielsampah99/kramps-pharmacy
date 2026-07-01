import { createFileRoute } from "@tanstack/react-router";
import { DosageForms } from "~/components/dosage-forms";
import { Inventory } from "~/components/inventory-card";

export const Route = createFileRoute("/_app/inventory")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col lg:flex-row gap-6 lg:items-start">
			<Inventory />
			<aside className="space-y-6 xl:w-96">
				<DosageForms />
			</aside>
		</div>
	);
}
