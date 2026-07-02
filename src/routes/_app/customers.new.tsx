import { Toast } from "@cloudflare/kumo";
import { Button } from "@cloudflare/kumo/primitives/button";
import { Radio } from "@cloudflare/kumo/primitives/radio";
import { RadioGroup } from "@cloudflare/kumo/primitives/radio-group";

import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation } from "convex/react";
import { FunctionArgs } from "convex/server";
import { InfoCircleIcon } from "~/components/icons";
import { Input, Label } from "~/components/input";
import { api } from "~convex/_generated/api";
import { Doc } from "~convex/_generated/dataModel";

export const Route = createFileRoute("/_app/customers/new")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="card p-0! overflow-hidden">
			<div className="p-5 flex items-center justify-between border-b border-gray-200 border-solid">
				<h3 className="text-emerald-900 font-btn text-base">
					Add a Customer
				</h3>
				<div className="flex items-center justify-start gap-2 font-light text-sm text-gray-500  [&>a]:hover:text-emerald-700">
					<Link to="/customers">Active</Link>
					<Link to="/customers/blacklist">Blacklisted</Link>
				</div>
			</div>
			<AddCustomerForm />
		</div>
	);
}

export type CustomerTypeMap = Record<CustomerType, string>;

type CustomerType = FunctionArgs<typeof api.customers.addCustomer>["type"];

const customerTypes: Array<{ id: number; name: string; value: CustomerType }> =
	[
		{ id: 1, name: "Individual", value: "individual" },
		{ id: 2, name: "Hospital", value: "hospital" },
		{ id: 3, name: "Pharmacy", value: "pharmacy" },
	];

const addCustomerDefaultValues: Pick<
	Doc<"customers">,
	| "name"
	| "email"
	| "phone"
	| "type"
	| "address"
	| "contactEmail"
	| "contactName"
	| "contactPhone"
> = {
	address: "",
	contactEmail: "",
	contactName: "",
	contactPhone: "",
	email: "",
	name: "",
	phone: "",
	type: "individual",
};

const AddCustomerForm = () => {
	const addCustomer = useMutation(api.customers.addCustomer);
	const toasts = Toast.useToastManager();

	const form = useForm({
		defaultValues: addCustomerDefaultValues,
		onSubmit: async ({ value }) => {
			await addCustomer({ ...value });
			toasts.add({ title: "Customer added succesfully" });
			form.reset();
		},
	});

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				event.stopPropagation();
				form.handleSubmit();
			}}
			className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 border-t border-gray-200/70 p-5"
		>
			<form.Field name="name">
				{(field) => (
					<div className="sm:col-span-1 space-y-1">
						<Label
							htmlFor={field.name}
							className="font-btn text-navy-900 text-sm"
						>
							Name
						</Label>
						<Input
							type="text"
							id={field.name}
							name={field.name}
							placeholder="Full name"
							value={field.state.value}
							onValueChange={field.handleChange}
							onBlur={field.handleBlur}
						/>
					</div>
				)}
			</form.Field>

			<form.Field name="address">
				{(field) => (
					<div className="sm:col-span-1 space-y-1">
						<Label
							htmlFor={field.name}
							className="font-btn text-navy-900 text-sm"
						>
							Address
						</Label>
						<Input
							type="text"
							autoComplete="address-level1"
							id={field.name}
							name={field.name}
							placeholder="Something meaningful for you to recognize"
							value={field.state.value ?? ""}
							onValueChange={field.handleChange}
							onBlur={field.handleBlur}
						/>
					</div>
				)}
			</form.Field>

			<form.Field name="phone">
				{(field) => (
					<div className="sm:col-span-1 space-y-1">
						<Label
							htmlFor={field.name}
							className="font-btn text-navy-900 text-sm"
						>
							Phone Number
						</Label>
						<Input
							type="text"
							autoComplete="tel-local"
							id={field.name}
							name={field.name}
							placeholder="Something meaningful for you to recognize"
							value={field.state.value ?? ""}
							onValueChange={field.handleChange}
							onBlur={field.handleBlur}
						/>
					</div>
				)}
			</form.Field>

			<form.Field name="email">
				{(field) => (
					<div className="sm:col-span-1 space-y-1">
						<Label
							htmlFor={field.name}
							className="font-btn text-navy-900 text-sm"
						>
							Email Address
						</Label>
						<Input
							type="text"
							autoComplete="work email"
							id={field.name}
							name={field.name}
							placeholder="Something meaningful for you to recognize"
							value={field.state.value ?? ""}
							onValueChange={field.handleChange}
							onBlur={field.handleBlur}
						/>
					</div>
				)}
			</form.Field>

			<div className="space-y-1.5 sm:col-span-2">
				<h5 className="text-emerald-900 font-btn text-btn">
					Contact Person
				</h5>

				<div className="card flex gap-1.5 items-start card-note mb-5">
					<InfoCircleIcon className="size-6 shrink-0 fill-green-700 stroke-transparent" />
					<div className="flex-1">
						If the customer is an <strong>individual</strong>, you
						don't need to fill out the contact person details below.
						For
						<strong> hospitals</strong> or other types of customers,
						please provide the relevant contact information in the
						form fields.
					</div>
				</div>
			</div>

			<form.Field name="contactName">
				{(field) => (
					<div className="sm:col-span-1 space-y-1">
						<Label
							htmlFor={field.name}
							className="font-btn text-navy-900 text-sm"
						>
							Contact Person&apos;s Name
						</Label>
						<Input
							type="text"
							autoComplete="given-name webauthn"
							className="autofill:bg-red-500"
							id={field.name}
							name={field.name}
							placeholder="Something meaningful for you to recognize"
							value={field.state.value ?? ""}
							onValueChange={field.handleChange}
							onBlur={field.handleBlur}
						/>
					</div>
				)}
			</form.Field>

			<form.Field name="contactPhone">
				{(field) => (
					<div className="sm:col-span-1 space-y-1">
						<Label
							htmlFor={field.name}
							className="font-btn text-navy-900 text-sm"
						>
							Contact Phone
						</Label>
						<Input
							type="text"
							autoComplete="home tel"
							id={field.name}
							name={field.name}
							placeholder="Something meaningful for you to recognize"
							value={field.state.value ?? ""}
							onValueChange={field.handleChange}
							onBlur={field.handleBlur}
						/>
					</div>
				)}
			</form.Field>

			<form.Field name="contactEmail">
				{(field) => (
					<div className="sm:col-span-1 space-y-1">
						<Label
							htmlFor={field.name}
							className="font-btn text-navy-900 text-sm"
						>
							Contact Email
						</Label>
						<Input
							type="text"
							autoComplete="email"
							id={field.name}
							name={field.name}
							placeholder="Something meaningful for you to recognize"
							value={field.state.value ?? ""}
							onValueChange={field.handleChange}
							onBlur={field.handleBlur}
						/>
					</div>
				)}
			</form.Field>

			<div className="sm:col-span-2">
				<h5 className="font-btn text-btn text-sm">Type of customer</h5>

				<form.Field name="type">
					{(field) => (
						<div className="card mt-1">
							<RadioGroup
								aria-labelledby={field.name}
								onValueChange={field.handleChange}
								value={field.state.value}
							>
								<div id={field.name} className="sr-only">
									Types of customers
								</div>
								{customerTypes.map((ct) => (
									<Label className="flex items-center gap-2 mt-1.5 text-sm font-btn text-btn text-emerald-900">
										<Radio.Root
											key={ct.id}
											value={ct.value}
											className="flex size-4 shrink-0 items-center justify-center border rounded-full p-0 border-emerald-500 bg-white text-white data-checked:bg-emerald-500 data-checked:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
										>
											<Radio.Indicator className="flex items-center justify-center data-unchecked:hidden before:size-1.75 before:rounded-full before:bg-current" />
										</Radio.Root>
										{ct.name}
									</Label>
								))}
							</RadioGroup>
						</div>
					)}
				</form.Field>
			</div>

			<div className="contents">
				<Button
					type="submit"
					className="gap-2 btn-lg btn-primary lg:max-w-60"
				>
					Add customer
				</Button>
			</div>
		</form>
	);
};
