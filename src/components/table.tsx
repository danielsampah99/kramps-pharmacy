import type { ComponentProps } from "react";

import { cn } from "@cloudflare/kumo/utils";

export function Table({ className, ...props }: ComponentProps<"table">) {
	return (
		<div
			data-slot="table-container"
			className="table table-fixed w-full px-0"
		>
			<table
				data-slot="table"
				className={cn(
					"min-w-full divide-y divide-green-200 border-t border-emerald-200 caption-bottom text-sm",
					className,
				)}
				{...props}
			/>
		</div>
	);
}

export function TableHeader({ className, ...props }: ComponentProps<"thead">) {
	return (
		<thead
			data-slot="table-header"
			className={cn(" bg-emerald-50 h-14 text-emerald-900", className)}
			{...props}
		/>
	);
}

export function TableBody({ className, ...props }: ComponentProps<"tbody">) {
	return (
		<tbody
			data-slot="table-body"
			className={cn("[&_tr:last-child]:border-0", className)}
			{...props}
		/>
	);
}

export function TableFooter({ className, ...props }: ComponentProps<"tfoot">) {
	return (
		<tfoot
			data-slot="table-footer"
			className={cn("font-medium", className)}
			{...props}
		/>
	);
}

export function TableRow({ className, ...props }: ComponentProps<"tr">) {
	return (
		<tr
			data-slot="table-row"
			className={cn("border-b border-emerald-200 transition-colors", className)}
			{...props}
		/>
	);
}

export function TableHead({ className, ...props }: ComponentProps<"th">) {
	return (
		<th
			data-slot="table-head"
			scope="col"
			className={cn(
				"px-3 relative first:pl-6 last:pr-6 py-4 text-left align-middle font-medium whitespace-nowrap",
				className,
			)}
			{...props}
		/>
	);
}

export function TableCell({ className, ...props }: ComponentProps<"td">) {
	return (
		<td
			data-slot="table-cell"
			className={cn(
				"px-3 h-[67.5px] first:pl-6 last:pr-6 py-4 text-base text-gray-500 align-middle whitespace-nowrap",
				className,
			)}
			{...props}
		/>
	);
}

export function TableCaption({
	className,
	...props
}: ComponentProps<"caption">) {
	return (
		<caption
			data-slot="table-caption"
			className={cn("mt-4 text-sm text-emerald-400", className)}
			{...props}
		/>
	);
}
