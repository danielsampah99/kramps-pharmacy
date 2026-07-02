import { Link, LinkOptions } from "@tanstack/react-router";
import { Image } from "@unpic/react";

type EmptyCustomersProps = {
	to: LinkOptions["to"];
	linkText: string;
	title: string;
	description: string;
};

export const EmptyCustomers = ({ ...props }: EmptyCustomersProps) => (
	<div className="w-full text-center py-20 space-y-4 max-w-sm mx-auto">
		<Image
			src="/assets/no-active-customers.png"
			alt=""
			className="mx-auto h-auto w-full"
			layout="constrained"
			width={192}
			height={192}
		/>

		<div className="space-y-1">
			<h2 className="font-medium text-emerald-900 text-base ">
				{props.title}
			</h2>
			<p className="text-gray-500 text-sm">{props.description}</p>
		</div>

		<Link to={props.to} className="btn btn-primary">
			{props.linkText}
		</Link>
	</div>
);
