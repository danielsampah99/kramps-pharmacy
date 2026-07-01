import { cn } from "@cloudflare/kumo";
import { Dialog as KDialog } from "@cloudflare/kumo/primitives/dialog";
import { XIcon } from "./icons/x";

export const Dialog = KDialog.Root;

export const DialogTrigger = KDialog.Trigger;

export const DialogPortal = KDialog.Portal;

export const DialogPopup = ({ className, ...props }: KDialog.Popup.Props) => (
	<KDialog.Portal>
		<KDialog.Backdrop className="bg-emerald-950/50 z-10 fixed inset-0 min-h-dvh transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 backdrop-blur-sm" />
		<div className="fixed inset-0 overflow-y-auto z-20">
			<div className="flex min-h-dvh items-center justify-center">
				<div className="w-full max-w-2xl p-4 sm:p-6 lg:py-8">
					<div className="relative block sm:p-2.5 bg-white/20 rounded-3xl shadow-2xl shadow-emerald-700/20 ring-1 ring-inset ring-white/10 transition">
						<KDialog.Popup
							className={cn(
								"rounded-2xl bg-white p-5 sm:p-10 shadow-lg shadow-emerald-700/20 ring-1 ring-black/5",
								"transition-[scale,opacity] duration-100 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0",
								className,
							)}
							{...props}
						/>
					</div>
				</div>
			</div>
		</div>
	</KDialog.Portal>
);

export const DialogTitle = ({ className, ...props }: KDialog.Title.Props) => (
	<KDialog.Title
		className={cn(
			"mb-5 text-emerald-900/80! text-dialog-header font-btn font-stretch-98%",
			className,
		)}
		{...props}
	/>
);

export const DialogDescription = ({ ...props }: KDialog.Description.Props) => (
	<KDialog.Description
		{...props}
		className={cn(
			"text-emerald-600! font-[14.5px] font-text",
			props.className,
		)}
	/>
);

export const DialogX = ({ ...props }: KDialog.Close.Props) => (
	<KDialog.Close
		{...props}
		aria-label="Close"
		className={cn(
			"flex-none p-2 cursor-pointer opacity-50 rounded-lg hover:bg-emerald-100 hover:opacity-100 focus:outline-none transition",
			props.className,
		)}
	>
		<XIcon className="size-5" />
	</KDialog.Close>
);

export const DialogClose = KDialog.Close;
