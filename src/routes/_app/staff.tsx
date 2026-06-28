import { useKumoToastManager } from "@cloudflare/kumo";
import { Button } from "@cloudflare/kumo/primitives/button";
import { createFileRoute } from "@tanstack/react-router";
import { useAction, useQuery } from "convex/react";
import { StaffTable } from "~/components/staff-table";
import type { User } from "~/components/staff-table";
import { api } from "~convex/_generated/api";

export const Route = createFileRoute("/_app/staff")({
	component: RouteComponent,
});

function RouteComponent() {
	const toast = useKumoToastManager();

	const addStaff = useAction(api.staff.addStaff);

	const staffMembers: Array<User> | undefined = useQuery(api.staff.listStaff);

	const handleAddStaff = async () => {
		const staff = await addStaff();

		toast.add({ title: staff.user.name, variant: "success" });
		console.dir(staff);
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="card overflow-x-scroll p-0!">
				<div className="flex items-center justify-between px-5 py-4">
					<div className="space-y-2">
						<h2 className="font-medium text-emerald-900 text-lg ">
							Staff Members
						</h2>
					</div>

					<div>
						<Button
							type="button"
							className="gap-2 btn btn-secondary cursor-pointer bg-emerald-100!"
							onClick={handleAddStaff}
						>
							Add member
						</Button>
					</div>
				</div>
				<StaffTable data={staffMembers ?? []} />
			</div>
		</div>
	);
}
