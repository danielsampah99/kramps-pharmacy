import { Sidebar as KSidebar } from "@cloudflare/kumo/components/sidebar";
import { Button } from "@cloudflare/kumo/primitives/button";
import {
	BuildingIcon,
	ClipboardCheckIcon,
	CogIcon,
	DatabaseIcon,
	IdIcon,
	InboxInIcon,
	LockIcon,
	ChartIcon,
	BagIcon,
	CartIcon,
	StoreIcon,
	TimerIcon,
	UserAddIcon,
	UserSquareIcon,
	UserXIcon,
} from "~/components/icons";
import { Link, Outlet, type LinkProps } from "@tanstack/react-router";
import type { FC, SVGProps } from "react";

type IconType = FC<SVGProps<SVGSVGElement>>;

type SidebarRouteProps = {
	id: number;
	name: string;
	icon: IconType;
	href: LinkProps["to"];
};

const SidebarRouteItem = ({ href: to, icon: Icon, name }: SidebarRouteProps) => (
	<Link
		to={to}
		className="group mt-0.5 flex w-14 shrink-0 flex-col items-center justify-items-center gap-0.5 rounded-lg px-1 py-1 text-white/60 transition-colors hover:text-white lg:w-auto lg:shrink lg:flex-row lg:justify-items-start lg:gap-2.5 lg:px-2.5 lg:py-2 lg:text-emerald-900 lg:hover:bg-transparent lg:hover:text-emerald-600"
		activeOptions={{
			exact: true,
		}}
		activeProps={{
			className:
				"transition-colors text-white bg-emerald-600/90 lg:hover:bg-emerald-500/20 lg:hover:text-emerald-700 lg:bg-emerald-500/20 lg:text-emerald-700 hover:bg-emerald-600/90 hover:text-emerald-700",
		}}
	>
		<span className="flex size-5 shrink-0 items-center justify-center lg:size-6 lg:rounded-md lg:bg-linear-to-b lg:from-white/75 lg:to-emerald-100/75 lg:shadow-sm lg:ring-1 lg:shadow-emerald-800/10 lg:ring-emerald-800/10">
			<Icon className="size-3.5 fill-transparent stroke-brand stroke-2" />
		</span>
		<span className="w-full truncate text-center text-btn font-btn capitalize lg:w-auto lg:text-left">{name}</span>
	</Link>
);

const dailyOperationsRoutes: Array<SidebarRouteProps> = [
	{ id: 1, name: "Sales", icon: BagIcon, href: "/" },
	{ id: 2, name: "Prescriptions", icon: ClipboardCheckIcon, href: "/" },
];

// oxfmt-ignore
const customerRoutes: Array<SidebarRouteProps> = [
	{ id: 1, name: "New Customer", icon: UserAddIcon, href: "/customers/new" },
	{ id: 2, name: "Active Customers", icon: UserSquareIcon, href: "/customers" },
	{ id: 3, name: "Blacklisted Customers", icon: UserXIcon, href: "/customers/blacklist" },
];

const inventoryRoutes: Array<SidebarRouteProps> = [
	{ id: 1, name: "Inventory", icon: DatabaseIcon, href: "/inventory" },
	{ id: 2, name: "Expiry Tracker", icon: TimerIcon, href: "/" },
	{ id: 3, name: "Purchase Orders", icon: InboxInIcon, href: "/" },
	{ id: 4, name: "Suppliers", icon: BuildingIcon, href: "/" },
	{ id: 5, name: "Reports", icon: ChartIcon, href: "/" },
];

const adminRoutes: Array<SidebarRouteProps> = [
	{ id: 1, name: "Staff", icon: IdIcon, href: "/staff" },
	{ id: 2, name: "Permissions", icon: LockIcon, href: "/" },
	{ id: 3, name: "Settings", icon: CogIcon, href: "/" },
];

export const Sidebar = () => (
	<KSidebar.Provider defaultOpen={true}>
		<KSidebar className="lg:w-72! lg:max-w-72!">
			<KSidebar.Content className="py-0!">
				<KSidebar.Group className="px-0 py-0!">
					<label className="m-0! mb-1! border-none text-btn font-btn text-gray-700 [&_div]:pl-0!">Branch</label>
					<div className="inline-flex w-full cursor-pointer items-center justify-between rounded-btn border border-solid border-btn-border bg-white bg-clip-padding px-3 py-2 font-btn whitespace-nowrap inset-shadow-btn-border transition-all duration-200 hover:border-btn-active hover:bg-emerald-50 hover:text-btn-text hover:inset-shadow-btn-active">
						<div className="inline-flex flex-1 items-center justify-normal gap-2 font-medium">
							<StoreIcon className="size-4.5 fill-logo stroke-brand stroke-[1.5]" />
							<span>Head Office</span>
						</div>
						<kbd className="inline-flex w-fit items-center rounded-sm bg-emerald-100 px-1.5 py-0.5 font-mono text-sm font-semibold text-emerald-400">
							⌘K
						</kbd>
					</div>
				</KSidebar.Group>

				<Button className="btn btn-brand mt-4 inline-flex w-full gap-2 font-medium hover:text-white! focus:text-white">
					<CartIcon className="size-4.5 fill-brand/10 stroke-logo" />
					Point of Sale
				</Button>

				<KSidebar.Group className="mt-4 font-medium backdrop-blur-md lg:bg-transparent lg:px-0 lg:text-emerald-900">
					{dailyOperationsRoutes.map((route) => (
						<SidebarRouteItem key={route.id} {...route} />
					))}

					<Separator />

					{customerRoutes.map((route) => (
						<SidebarRouteItem key={route.id} {...route} />
					))}

					<Separator />

					{inventoryRoutes.map((route) => (
						<SidebarRouteItem key={route.id} {...route} />
					))}

					<Separator />

					{adminRoutes.map((route) => (
						<SidebarRouteItem key={route.id} {...route} />
					))}
				</KSidebar.Group>
			</KSidebar.Content>
		</KSidebar>
		<main className="w-full min-w-0 flex-1 grow p-0">
			<Outlet />
		</main>
	</KSidebar.Provider>
);

export const Separator = () => (
	<hr className="my-3 hidden h-px w-full border-0 bg-linear-to-r from-emerald-800/5 via-emerald-800/20 to-emerald-800/5 lg:block" />
);
