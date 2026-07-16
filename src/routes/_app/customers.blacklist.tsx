import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { EmptyCustomers } from "~/components/customers-table";
import { api } from "~convex/_generated/api";

export const Route = createFileRoute("/_app/customers/blacklist")({
	component: RouteComponent,
});

function RouteComponent() {
	const blacklisted = useQuery(api.customers.listBlacklistedCustomers);

	if (blacklisted === undefined) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div className="card overflow-x-scroll p-0">
				{blacklisted.length === 0 ? (
					<EmptyCustomers
						description="Blacklist a customer to get started"
						title="No Blaclisted Customers"
						linkText="Blacklist a customer"
						to="/customers"
					/>
				) : (
					<pre>{JSON.stringify(blacklisted, null, 3)}</pre>
				)}
			</div>
		</div>
	);
}
