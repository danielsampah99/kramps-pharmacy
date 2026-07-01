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

const SidebarRouteItem = ({
	href: to,
	icon: Icon,
	name,
}: SidebarRouteProps) => (
	<Link
		to={to}
		className="mt-0.5 group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center
		justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60
		hover:text-white lg:hover:bg-transparent lg:hover:text-emerald-600 lg:text-emerald-900"
		activeProps={{
			className:
				"transition-colors text-white bg-emerald-600/90 lg:bg-emerald-500/20 lg:text-emerald-700 hover:bg-emerald-600/90 hover:text-emerald-700",
		}}
	>
		<span className="size-5 lg:size-6 flex items-center justify-center shrink-0 lg:bg-linear-to-b lg:from-white/75 lg:to-emerald-100/75 lg:rounded-md lg:shadow-sm lg:shadow-emerald-800/10 lg:ring-1 lg:ring-emerald-800/10">
			<Icon className="size-3.5 stroke-brand fill-transparent stroke-2" />
		</span>
		<span className="capitalize text-center font-btn text-btn lg:text-left truncate w-full lg:w-auto">
			{name}
		</span>
	</Link>
);

const dailyOperationsRoutes: Array<SidebarRouteProps> = [
	{ id: 1, name: "Sales", icon: BagIcon, href: "/" },
	{ id: 2, name: "Prescriptions", icon: ClipboardCheckIcon, href: "/" },
];

const customerRoutes: Array<SidebarRouteProps> = [
	{ id: 1, name: "New Customer", icon: UserAddIcon, href: "/" },
	{ id: 2, name: "Active Customers", icon: UserSquareIcon, href: "/" },
	{ id: 3, name: "Blacklisted Customers", icon: UserXIcon, href: "/" },
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
					<label className="border-none m-0! [&_div]:pl-0! text-btn font-btn text-gray-700 mb-1!">
						Branch
					</label>
					<div
						className="inline-flex items-center w-full justify-between px-3 bg-white rounded-btn py-2 font-btn bg-clip-padding
						whitespace-nowrap transition-all duration-200 border-btn-border cursor-pointer  border border-solid
						hover:text-btn-text hover:border-btn-active hover:bg-emerald-50 inset-shadow-btn-border hover:inset-shadow-btn-active"
					>
						<div className="inline-flex gap-2 font-medium items-center justify-normal flex-1">
							<StoreIcon className="size-4.5 stroke-brand fill-logo stroke-[1.5]" />
							<span>Head Office</span>
						</div>
						<kbd className="px-1.5 py-0.5 bg-emerald-100 w-fit text-sm inline-flex items-center font-mono rounded-sm  text-emerald-400 font-semibold">
							⌘K
						</kbd>
					</div>
				</KSidebar.Group>

				<Button className="btn btn-brand mt-4 w-full inline-flex gap-2 font-medium hover:text-white! focus:text-white">
					<CartIcon className="size-4.5 stroke-logo fill-brand/10" />
					Point of Sale
				</Button>

				<KSidebar.Group className="backdrop-blur-md mt-4 lg:bg-transparent font-medium lg:text-emerald-900 lg:px-0">
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
		<main className="flex-1 w-full grow p-0 min-w-0">
			<Outlet />
		</main>
	</KSidebar.Provider>
);

export const Separator = () => (
	<hr className="hidden lg:block my-3 w-full h-px border-0 bg-linear-to-r from-emerald-800/5 via-emerald-800/20 to-emerald-800/5" />
);
