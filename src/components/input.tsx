import { cn, Input as KInput, InputProps as KInputProps, Label as KLabel, LabelProps as KLabelProps, Textarea as KTextarea } from "@cloudflare/kumo";
import { ComponentProps } from "react";

// import { Field as KField } from "@cloudflare/kumo/primitives";

export const Input = ({ className, ...props }: KInputProps) => <KInput className={cn("input-text mt-1! w-full p-2.5!", className)} {...props} />;

export const Label = ({ className, ...props }: KLabelProps) => (
	<KLabel className={cn("mb-1 block font-btn text-emerald-950/50", className)} {...props} />
);

export const TextArea = ({ className, ...props }: ComponentProps<"textarea">) => (
	<KTextarea className={cn("input-text-area mt-1! w-full rounded-lg p-2.5!", className)} {...props} />
);
