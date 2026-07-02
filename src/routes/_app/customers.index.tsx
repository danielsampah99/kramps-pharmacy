import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { EmptyCustomers } from "~/components/customers-table";
import { api } from "~convex/_generated/api";

export const Route = createFileRoute("/_app/customers/")({
	component: RouteComponent,
});

function RouteComponent() {
	const customers = useQuery(api.customers.listActiveCustomers);

	if (customers === undefined) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div className="card p-0 overflow-x-scroll">
				{customers.length === 0 ? (
					<EmptyCustomers
						description="Create a new customer to get started"
						title="No Active Customers"
						linkText="Add new customer"
						to="/customers/new"
					/>
				) : (
					<pre>{JSON.stringify(customers, null, 3)}</pre>
				)}
			</div>
		</div>
	);
}
