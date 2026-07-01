import { Button } from "@cloudflare/kumo/primitives/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "~convex/_generated/api";
import { useState } from "react";
import { Id } from "~convex/_generated/dataModel";
import { cn, useKumoToastManager } from "@cloudflare/kumo";
import { useForm } from "@tanstack/react-form";
import { Input, Label, TextArea } from "./input";
import { format, formatDistanceToNow } from "date-fns";
import { FunctionArgs, FunctionReturnType } from "convex/server";
import { EditIcon, PlusSquareIcon, TrashIcon } from "./icons";
import { Image } from "@unpic/react";

export const DosageForms = () => {
	const dosageForms = useQuery(api.dosageForms.listDosageForms);

	const [showForm, setShowForm] = useState(false);

	return (
		<div>
			<div className="card p-0!">
				<div className="p-5 flex items-center justify-between border-b border-solid border-gray-200">
					<h2 className="text-emerald-900 text-[15px] font-btn">
						Dosage Forms
					</h2>

					<Button
						type="button"
						disabled={showForm}
						onClick={() => setShowForm(true)}
						className="cursor-pointer"
					>
						<PlusSquareIcon
							aria-hidden="false"
							className="size-5 stroke-brand fill-transprent stroke-2"
						/>
					</Button>
				</div>
				{showForm && (
					<DosageForm
						defaultValues={addDosageDefaultValues}
						dosageFormId={null}
						onCloseDosageForm={() => setShowForm(false)}
					/>
				)}
				<div className="p-5">
					{dosageForms === undefined ? (
						<div>Loading...</div>
					) : dosageForms.length === 0 ? (
						<EmtpyDosages />
					) : (
						<ul className=" space-y-2.5">
							{dosageForms.map((df) => (
								<DosageFormItem key={df._id} dosageForm={df} />
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

const DosageFormItem = ({
	dosageForm: df,
}: {
	dosageForm: FunctionReturnType<typeof api.dosageForms.listDosageForms>[0];
}) => {
	const [editing, setEditing] = useState(false);

	const deleteDosage = useMutation(api.dosageForms.deleteDosageForm);

	const audit =
		df.addedBy && df.updatedBy
			? `Last updated ${format(new Date(df._creationTime), "PPPppp")} by ${df.updatedBy.name}`
			: df.addedBy
				? `Added by: ${df.addedBy.name}`
				: undefined;

	if (editing) {
		return (
			<DosageForm
				defaultValues={{
					description: df.description,
					dosageFormId: df._id,
					name: df.name,
				}}
				dosageFormId={df._id}
				onCloseDosageForm={() => setEditing(false)}
			/>
		);
	}

	return (
		<li className="group flex flex-col overflow-hidden">
			<div className="flex items-center justify-between ">
				<h5 className="capitalize text-gray-900 font-[325] text-btn cursor-default">
					{df.name}&nbsp;{" "}
					<span
						title={audit}
						className="text-xs lowercase font-light text-gray-500"
					>
						{formatDistanceToNow(new Date(df._creationTime), {
							addSuffix: true,
							includeSeconds: true,
						})}
					</span>
				</h5>
				<div className="hidden group-hover:flex items-center gap-x-1.5">
					<Button
						type="button"
						onClick={() => setEditing(true)}
						className="cursor-pointer"
					>
						<EditIcon className="size-4 stroke-brand fill-transparent stroke-2" />
					</Button>
					<Button
						type="button"
						onClick={async () => await deleteDosage({ id: df._id })}
						className="cursor-pointer"
					>
						<TrashIcon className="size-4 stroke-red-500 fill-transparent stroke-2" />
					</Button>
				</div>
			</div>
			<p
				className="text-sm font-light text-gray-500 truncate max-w-70"
				title={df.description ?? undefined}
			>
				{df.description ?? null}
			</p>
		</li>
	);
};

const addDosageDefaultValues: AddDosageFormValues = {
	name: "",
	description: "",
};

type AddDosageFormValues = FunctionArgs<typeof api.dosageForms.addDosageForm>;
type UpdateDosageFormValues = FunctionArgs<
	typeof api.dosageForms.updateDosageForm
>;

type DosageFormProps = {
	onCloseDosageForm: VoidFunction;
	dosageFormId: Id<"dosage_forms"> | null;
	defaultValues: UpdateDosageFormValues | AddDosageFormValues;
};

const DosageForm = ({ ...props }: DosageFormProps) => {
	const addDosage = useMutation(api.dosageForms.addDosageForm);
	const updateDosage = useMutation(api.dosageForms.updateDosageForm);

	const toast = useKumoToastManager();

	const form = useForm({
		defaultValues: props.defaultValues,
		onSubmit: async ({ value }) => {
			if (props.dosageFormId !== null) {
				await updateDosage({
					...(value as UpdateDosageFormValues),
					dosageFormId: props.dosageFormId,
				});
				props.onCloseDosageForm();
				toast.add({ title: "Dosage form updated successfully" });
			} else {
				await addDosage({ ...(value as AddDosageFormValues) });
				props.onCloseDosageForm();
				toast.add({ title: "Dosage form added successfully" });
			}
		},
	});

	return (
		<form
			className={cn(
				"space-y-4 py-4 border-solid border-gray-200 border-y",
				!props.dosageFormId && "px-2 lg:px-4",
			)}
			onSubmit={(event) => {
				event.preventDefault();
				event.stopPropagation();
				form.handleSubmit();
			}}
		>
			<form.Field name="name">
				{(field) => (
					<div className="mb-4">
						<Label htmlFor={field.name}>Name</Label>
						<Input
							id={field.name}
							name={field.name}
							value={field.state.value}
							onValueChange={field.handleChange}
							onBlur={field.handleBlur}
							aria-label="Name"
							placeholder="Eg: injection, syrup, pill"
						/>
					</div>
				)}
			</form.Field>

			<form.Field name="description">
				{(field) => (
					<div className="mb-4">
						<Label htmlFor={field.name}>Description</Label>
						<TextArea
							id={field.name}
							rows={3}
							name={field.name}
							value={field.state.value ?? undefined}
							onChange={(event) =>
								field.handleChange(event.currentTarget.value)
							}
							onBlur={field.handleBlur}
							className={cn(
								"w-full!",
								!props.dosageFormId
									? "field-sizing-fixed"
									: "field-sizing-content",
							)}
							aria-label="Description"
						/>
					</div>
				)}
			</form.Field>

			<div className="flex items-center justify-end gap-2">
				<Button
					onClick={() => props.onCloseDosageForm()}
					type="button"
					className="btn btn-secondary"
				>
					Cancel
				</Button>

				<Button type="submit" className="btn btn-primary">
					{!props.dosageFormId
						? "Add dosage form"
						: "Update dosage form"}
				</Button>
			</div>
		</form>
	);
};

const EmtpyDosages = () => (
	<div className="flex flex-col items-center justify-center gap-4 pb-6">
		<div className="min-w-0 w-full">
			<Image
				src="/no-dosage-forms.png"
				alt="Illustration for the empty state"
				layout="fullWidth"
			/>
		</div>

		<div className="text-emerald-900 font-normal text-sm text-center ">
			<h4>No Dosage Forms</h4>
			<p className="font-light text-gray-500 max-w-80 text-xs">
				No dosage forms added. Add one using the plus button above
			</p>
		</div>
	</div>
);
