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
		<div className="card p-0! overflow-x-scroll">
			{customers.length === 0 ? (
				<EmptyCustomers
					description="Create a new customer to get started"
					title="No Active Customers"
					linkText="Add new customer"
					to="/customers/new"
				/>
			) : (
				<>
					<div className="flex items-center justify-between px-5 py-4 border-b border-solid border-gray-200">
						<h2 className="font-btn text-emerald-900 text-base ">
							Members
						</h2>
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
