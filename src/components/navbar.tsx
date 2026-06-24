import { Logo } from "./logo";
import { Link } from "@tanstack/react-router";
import { DashboardIcon } from "./icons/dashboard";
import { cn } from "@cloudflare/kumo";
import { Button } from "@cloudflare/kumo/primitives/button";

import { Popover } from "@cloudflare/kumo/components/popover";
import { UserIcon } from "./icons/user";
import { SettingsIcon } from "./icons/settings";
import { SignOutIcon } from "./icons/signout";

export const Navbar = () => (
	<nav className="bg-white flex justify-between text-gray-800 w-full h-16 px-4 shadow-sm drop-shadow-logo md:px-6 lg:px-8 border-b border-solid border-gray-200">
		<div className="flex items-center">
			<Link
				to="/"
				className="bg-transparent h-9 py-1 rounded-xl px-3 w-fit"
			>
				<Logo className="h-full stroke-brand text-brand" />
			</Link>
		</div>

		<div className="flex items-center text-base font-medium font-sans">
			<Link
				to="/dashboard"
				className="group inline-flex mx-1 items-center gap-x-2.5 hover:bg-kumo-brand/20 rounded-xl px-3 py-2 bg-transparent transition-colors"
			>
				<DashboardIcon className="size-4 text-brand group-hover:text-kumo-brand-hover" />
				Dashboard
			</Link>

			<Popover>
				<Popover.Trigger
					openOnHover={true}
					delay={0}
					className={cn(
						"group inline-flex mx-1 cursor-pointer items-center gap-x-2.5 hover:bg-kumo-brand/20 rounded-xl px-3 py-2 bg-transparent transition-colors",
					)}
				>
					<UserIcon className="size-4 text-brand group-hover:text-kumo-brand-hover group-focus-within:text-kumo-brand-hover transition-colors" />
					Account
				</Popover.Trigger>
				<Popover.Content
					align="end"
					className="shadow-md p-2 bg-white text-sm flex flex-col border border-gray-500/10 border-solid bg-clip-padding shadow-brand/50"
				>
					<div className="px-3 max-w-44 mb-2">
						<Popover.Title className="font-normal">
							Signed in as
						</Popover.Title>
						<Popover.Description className="truncate font-semibold">
							danielsampah99@gmail.com
						</Popover.Description>
					</div>

					<hr className="h-px mb-1 bg-gray-200 border-0" />

					<Link
						to=".."
						className="flex items-center gap-x-2.5 whitespace-nowrap rounded-md min-w-44 px-3 py-2 hover:bg-kumo-brand-hover/30 transition-colors"
					>
						<SettingsIcon className="size-4 text-brand" />
						Settings
					</Link>

					<Button

						className="flex items-center cursor-pointer gap-x-2.5 whitespace-nowrap rounded-md min-w-44 px-3 py-2 hover:bg-kumo-brand-hover/30 transition-colors"
					>
						<SignOutIcon className="size-4 text-brand" />
						Sign out
					</Button>
				</Popover.Content>
			</Popover>
		</div>
	</nav>
);

