import { useKumoToastManager } from "@cloudflare/kumo";
import { createFileRoute } from "@tanstack/react-router";
import { useAction, useQuery } from "convex/react";
import { useState } from "react";
import {
	Dialog,
	DialogClose,
	DialogDescription,
	DialogPopup,
	DialogTitle,
	DialogTrigger,
	DialogX,
} from "~dialog";
import { StaffTable } from "~/components/staff-table";
import type { User } from "~/components/staff-table";
import { api } from "~convex/_generated/api";
import { Input, Label } from "~input";
import { useForm } from "@tanstack/react-form";
import { Button } from "@cloudflare/kumo/primitives/button";

export const Route = createFileRoute("/_app/staff")({
	component: RouteComponent,
});

function RouteComponent() {
	const [open, setOpen] = useState(false);

	const staffMembers: Array<User> | undefined = useQuery(api.staff.listStaff);

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
						<AddStaffDialog
							isDialogOpen={open}
							onOpenDialog={setOpen}
						/>
					</div>
				</div>
				<StaffTable data={staffMembers ?? []} />
			</div>
		</div>
	);
}

type AddStaffDialogProps = {
	isDialogOpen: boolean;
	onOpenDialog: (isOpen: boolean) => void;
};

const addStaffDefaultValues: typeof api.staff.addStaff._args = {
	email: "",
	fullName: "",
	isActive: false,
	password: "",
	phoneNumber: "",
};

const AddStaffDialog = ({
	isDialogOpen,
	onOpenDialog,
}: AddStaffDialogProps) => {
	const addStaff = useAction(api.staff.addStaff);
	const toast = useKumoToastManager();

	const form = useForm({
		defaultValues: addStaffDefaultValues,
		onSubmit: async ({ value }) => {
			console.log("adding staff member...", "value: ", value);
			const staff = await addStaff({ ...value });
			onOpenDialog(false);
			toast.add({ title: staff.user.name, variant: "success" });
		},
	});

	return (
		<Dialog open={isDialogOpen} onOpenChange={onOpenDialog}>
			<DialogTrigger className="gap-2 btn btn-secondary cursor-pointer bg-emerald-100!">
				Add member
			</DialogTrigger>
			<DialogPopup
				id="add-staff-dialog-popup"
				className="flex flex-col gap-6"
			>
				<div className="absolute top-5 right-5">
					<DialogX />
				</div>

				<div>
					<DialogTitle className="mb-2">
						Add a Staff Member
					</DialogTitle>
					<DialogDescription className="text-gray-500! max-w-xl">
						A staff member enters data such as patient name,
						prescribed medication and cost, to maintain pharmacy
						files, charge system, and inventory. They also assay
						medications to determine identity, purity, and strength.
						Instructs interns, other medical personnel and customers
						on matters pertaining to the pharmacy.
					</DialogDescription>

					<form
						className="space-y-4 mt-6"
						onSubmit={(event) => {
							event.preventDefault();
							event.stopPropagation();
							form.handleSubmit();
						}}
					>
						<form.Field name="fullName">
							{(field) => (
								<div className="mb-4">
									<Label htmlFor={field.name}>
										Full Name
									</Label>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onValueChange={field.handleChange}
										onBlur={field.handleBlur}
										aria-label="Full Name"
									/>
								</div>
							)}
						</form.Field>

						<form.Field name="email">
							{(field) => (
								<div className="mb-4">
									<Label htmlFor={field.name}>
										Email Address
									</Label>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onValueChange={field.handleChange}
										onBlur={field.handleBlur}
										type="email"
										placeholder="pharmacist@krampsmail.com"
										aria-label="Email Address"
									/>
								</div>
							)}
						</form.Field>

						<form.Field name="phoneNumber">
							{(field) => (
								<div className="mb-4">
									<Label htmlFor={field.name}>
										Phone Number
									</Label>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onValueChange={field.handleChange}
										onBlur={field.handleBlur}
										aria-label="Phone Number"
									/>
									<p className="text-xs text-emerald-500/80 mt-1">
										Phone number should use the
										international format and have no spaces.
									</p>
								</div>
							)}
						</form.Field>

						<form.Field name="password">
							{(field) => (
								<div className="mb-4">
									<Label htmlFor={field.name}>Password</Label>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onValueChange={field.handleChange}
										onBlur={field.handleBlur}
										aria-label="Password"
									/>
								</div>
							)}
						</form.Field>

						<div className="flex items-center justify-end gap-2">
							<DialogClose
								type="button"
								className="btn btn-secondary"
							>
								Cancel
							</DialogClose>

							<Button type="submit" className="btn btn-primary">
								Add member
							</Button>
						</div>
					</form>
				</div>
			</DialogPopup>
		</Dialog>
	);
};
