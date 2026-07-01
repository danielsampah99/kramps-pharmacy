import {
	cn,
	Input as KInput,
	InputProps as KInputProps,
	Label as KLabel,
	LabelProps as KLabelProps,
} from "@cloudflare/kumo";

// import { Field as KField } from "@cloudflare/kumo/primitives";

export const Input = ({ className, ...props }: KInputProps) => (
	<KInput
		className={cn("mt-1! w-full p-2.5! input-text", className)}
		{...props}
	/>
);

export const Label = ({ className, ...props }: KLabelProps) => (
	<KLabel className={cn("font-btn block mb-1 text-emerald-950/50", className)} {...props} />
);
