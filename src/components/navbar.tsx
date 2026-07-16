import { Logo } from "./logo";
import { Link, useNavigate } from "@tanstack/react-router";
import { DashboardIcon } from "./icons/dashboard";
import { cn } from "@cloudflare/kumo";
import { Button } from "@cloudflare/kumo/primitives/button";

import { Popover } from "@cloudflare/kumo/components/popover";
import { UserIcon } from "./icons/user";
import { SettingsIcon } from "./icons/settings";
import { SignOutIcon } from "./icons/signout";
import { useAuthActions } from "@convex-dev/auth/react";
import { useCurrentUser } from "~/hooks/use-current-user";

export const Navbar = () => {
	const { signOut } = useAuthActions();
	const navigate = useNavigate();

	const { user } = useCurrentUser();

	const handleSignOut = () => {
		void signOut();

		void navigate({ to: "/sign-in" });
	};

	return (
		<nav className="flex h-16 w-full justify-between border-b border-solid border-gray-200 bg-white px-4 text-gray-800 shadow-sm drop-shadow-logo md:px-6 lg:px-8">
			<div className="flex items-center">
				<Link to="/" className="h-9 w-fit rounded-xl bg-transparent px-3 py-1">
					<Logo className="h-full stroke-brand text-brand" />
				</Link>
			</div>

			<div className="flex items-center font-sans text-base font-medium">
				<Link
					to="/dashboard"
					className="group mx-1 inline-flex items-center gap-x-2.5 rounded-xl bg-transparent px-3 py-2 transition-colors hover:bg-kumo-brand/20"
				>
					<DashboardIcon className="size-4 text-brand group-hover:text-kumo-brand-hover" />
					Dashboard
				</Link>

				<Popover>
					<Popover.Trigger
						openOnHover={true}
						delay={0}
						className={cn(
							"group mx-1 inline-flex cursor-pointer items-center gap-x-2.5 rounded-xl bg-transparent px-3 py-2 transition-colors hover:bg-kumo-brand/20",
						)}
					>
						<UserIcon className="size-4 text-brand transition-colors group-focus-within:text-kumo-brand-hover group-hover:text-kumo-brand-hover" />
						Account
					</Popover.Trigger>
					<Popover.Content
						align="end"
						className="flex flex-col border border-solid border-gray-500/10 bg-white bg-clip-padding p-2 text-sm shadow-md shadow-brand/50"
					>
						<div className="mb-2 max-w-44 px-3">
							<Popover.Title className="font-normal">Signed in as</Popover.Title>
							<Popover.Description className="truncate text-[0.8rem] font-[575] text-emerald-900 lg:text-sm">
								{user.email}
							</Popover.Description>
						</div>

						<hr className="mb-1 h-px border-0 bg-gray-200" />

						<Link
							to=".."
							className="flex min-w-44 items-center gap-x-2.5 rounded-md px-3 py-2 whitespace-nowrap transition-colors hover:bg-kumo-brand-hover/30"
						>
							<SettingsIcon className="size-4 fill-brand stroke-logo" />
							Settings
						</Link>

						<Button
							type="button"
							onClick={handleSignOut}
							className="flex min-w-44 cursor-pointer items-center gap-x-2.5 rounded-md px-3 py-2 whitespace-nowrap transition-colors hover:bg-kumo-brand-hover/30"
						>
							<SignOutIcon className="size-4 text-brand" />
							Sign out
						</Button>
					</Popover.Content>
				</Popover>
			</div>
		</nav>
	);
};
