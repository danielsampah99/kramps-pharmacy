import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { CustomersTable, EmptyCustomers } from "~/components/customers-table";
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
		<div className="card overflow-x-scroll p-0!">
			{customers.length === 0 ? (
				<EmptyCustomers
					description="Create a new customer to get started"
					title="No Active Customers"
					linkText="Add new customer"
					to="/customers/new"
				/>
			) : (
				<>
					<div className="flex items-center justify-between border-b border-solid border-gray-200 px-5 py-4">
						<h2 className="text-base font-btn text-emerald-900">Members</h2>
						<Link to="/customers/new" className="btn btn-secondary">
							New Customer
						</Link>
					</div>
					<CustomersTable customers={customers} />
				</>
			)}
		</div>
	);
}
