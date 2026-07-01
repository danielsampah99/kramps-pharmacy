import { SearchIcon } from "./icons";
import { Input } from "./input";

export const Inventory = () => (
	<main className="card p-0 min-w-0 lg:flex-1">
		<form
			data-phx-id="m47-phx-GL4tQPiMwwLzbRdh"
			method="post"
			id="apps_filters"
			className="contents"
			phx-change="update_filters"
			phx-submit="update_filters"
		>
			<header className="px-4 py-4 border-b">
				<div className="flex flex-wrap items-stretch justify-between gap-4">
					<div className="flex flex-col">
						<h1 className="text-2xl font-semibold text-emerald-900">
							Inventory
						</h1>
						<div className="flex items-center gap-2 mt-auto">
							<span className="text-sm text-emerald-600 flex items-center gap-1.5">
								<span className="inline-flex items-center px-2 rounded-md bg-emerald-100 text-emerald-800 text-xs font-medium">
									1
								</span>
								products
							</span>
						</div>
					</div>

					<div className="flex flex-col gap-4 items-end">
						<div className="w-full sm:w-[320px]">
							<label htmlFor="search" className="sr-only">
								Search
							</label>
							<div className="relative w-full">
								<div className="absolute inset-y-0 left-0 ml-3 flex items-center pointer-events-none">
									<SearchIcon className="size-5 stroke-gray-400 fill-white stroke-[1.5px]" />
									
								</div>
								<Input
									className="block w-full  rounded-lg border-gray-300 pl-10! pr-8 focus:border-green-500 focus:ring-green-500 sm:text-sm"
									data-slash-to-focus=""
									id="apps_filters_name"
									name="apps_search[name]"
									phx-debounce="200"
									placeholder="Search products..."
									type="text"
								/>
								<div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-3 pointer-events-none">
									<kbd className="inline-flex items-center rounded border border-gray-200 px-1.5 font-sans text-xs text-gray-400">
										/
									</kbd>
								</div>
							</div>
						</div>

						<div>
							<div className="flex items-center">
								<input
									type="hidden"
									name="apps_search[statuses][]"
									value=""
								/>

								<div className="flex items-center gap-2">
									<div className="relative cursor-pointer hidden md:inline-flex">
										<Input
											id="statuses-deployed"
											name="apps_search[statuses][]"
											value="deployed"
											checked={true}
											type="checkbox"
											className="sr-only peer pointer-events-none"
										/>
										<div
											phx-click="toggle_status"
											phx-value-status="deployed"
											className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border transition-all bg-green-50 hover:bg-green-100 border-green-200 text-green-700"
										>
											<span
												data-phx-id="m49-phx-GL4tQPiMwwLzbRdh"
												className="hero-check-circle h-3.5 w-3.5 text-green-700"
											></span>
											<span>Expired</span>
											<span className="inline-flex items-center justify-center min-w-4.5 h-4 rounded-full text-[10px] font-semibold text-green-700 bg-white/60">
												0
											</span>

											<svg
												className="h-3.5 w-3.5 text-green-700"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
													clip-rule="evenodd"
												></path>
											</svg>
										</div>
									</div>

									<div className="relative cursor-pointer hidden md:inline-flex">
										<Input
											id="statuses-pending"
											name="apps_search[statuses][]"
											value="pending"
											checked={false}
											type="checkbox"
											className="sr-only peer pointer-events-none"
										/>
										<div
											phx-click="toggle_status"
											phx-value-status="pending"
											className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border transition-all bg-yellow-50 hover:bg-yellow-100 border-yellow-200 text-yellow-700"
										>
											<span
												data-phx-id="m50-phx-GL4tQPiMwwLzbRdh"
												className="hero-clock h-3.5 w-3.5 text-yellow-700"
											></span>
											<span>Out of stock</span>
											<span className="inline-flex items-center justify-center min-w-4.5 h-4 rounded-full text-[10px] font-semibold text-yellow-700 bg-white/60">
												0
											</span>

											<svg
												className="h-3.5 w-3.5 text-yellow-700"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
													clip-rule="evenodd"
												></path>
											</svg>
										</div>
									</div>

									<div className="relative cursor-pointer hidden md:inline-flex">
										<Input
											id="statuses-suspended"
											name="apps_search[statuses][]"
											value="suspended"
											checked={false}
											type="checkbox"
											className="sr-only peer pointer-events-none"
										/>
										<div
											phx-click="toggle_status"
											phx-value-status="suspended"
											className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border transition-all bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700"
										>
											<span
												data-phx-id="m51-phx-GL4tQPiMwwLzbRdh"
												className="hero-pause-circle h-3.5 w-3.5 text-gray-700"
											></span>
											<span>Suspended</span>
											<span className="inline-flex items-center justify-center min-w-4.5 h-4 rounded-full text-[10px] font-semibold text-gray-700 bg-white/60">
												1
											</span>

											<svg
												className="h-3.5 w-3.5 text-gray-700"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
													clip-rule="evenodd"
												></path>
											</svg>
										</div>
									</div>
								</div>
							</div>

							<div className="flex items-center gap-2 flex-wrap">
								<div className="relative cursor-pointer inline-flex md:hidden">
									<Input
										id="statuses-mobile-deployed"
										name="apps_search[statuses][]"
										value="deployed"
										checked={true}
										type="checkbox"
										className="sr-only peer pointer-events-none"
									/>
									<div
										phx-click="toggle_status"
										phx-value-status="deployed"
										className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border transition-all bg-green-50 hover:bg-green-100 border-green-200 text-green-700"
									>
										<span
											data-phx-id="m52-phx-GL4tQPiMwwLzbRdh"
											className="hero-check-circle h-3.5 w-3.5 text-green-700"
										></span>
										<span>Deployed</span>
										<span className="inline-flex items-center justify-center min-w-4.5 h-4 px-1 rounded-full text-[10px] font-semibold text-green-700 bg-white/60">
											0
										</span>

										<svg
											className="h-3.5 w-3.5 text-green-700"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div>
								</div>

								<div className="relative cursor-pointer inline-flex md:hidden">
									<Input
										id="statuses-mobile-pending"
										name="apps_search[statuses][]"
										value="pending"
										checked={false}
										type="checkbox"
										className="sr-only peer pointer-events-none"
									/>
									<div
										phx-click="toggle_status"
										phx-value-status="pending"
										className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border transition-all bg-yellow-50 hover:bg-yellow-100 border-yellow-200 text-yellow-700"
									>
										<span
											data-phx-id="m53-phx-GL4tQPiMwwLzbRdh"
											className="hero-clock h-3.5 w-3.5 text-yellow-700"
										></span>
										<span>Pending</span>
										<span className="inline-flex items-center justify-center min-w-4.5 h-4 px-1 rounded-full text-[10px] font-semibold text-yellow-700 bg-white/60">
											0
										</span>

										<svg
											className="h-3.5 w-3.5 text-yellow-700"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div>
								</div>

								<div className="relative cursor-pointer inline-flex md:hidden">
									<Input
										id="statuses-mobile-suspended"
										name="apps_search[statuses][]"
										value="suspended"
										checked={false}
										type="checkbox"
										className="sr-only peer pointer-events-none"
									/>
									<div
										phx-click="toggle_status"
										phx-value-status="suspended"
										className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border transition-all bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700"
									>
										<span
											data-phx-id="m54-phx-GL4tQPiMwwLzbRdh"
											className="hero-pause-circle h-3.5 w-3.5 text-gray-700"
										></span>
										<span>Suspended</span>
										<span className="inline-flex items-center justify-center min-w-4.5 h-4 px-1 rounded-full text-[10px] font-semibold text-gray-700 bg-white/60">
											1
										</span>

										<svg
											className="h-3.5 w-3.5 text-gray-700"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</form>

		<ul role="list" className="relative z-0">
			<div id="apps-list" phx-update="stream" className="">
				<li
					id="apps-7596872"
					className="relative pl-4 pr-6 py-2 hover:bg-gray-50 sm:py-2 sm:pl-6 lg:pl-8 xl:pl-6 border-b border-gray-200"
					role="region"
					aria-label="dotrace"
					data-phx-stream="0"
				>
					<div className="flex items-center justify-between gap-6">
						<div className="min-w-0 flex-1">
							<div className="flex items-center gap-3">
								<span
									data-phx-id="m77-phx-GL4tQPiMwwLzbRdh"
									className="inline-block p-1 mr-1 rounded-full border-4 border-white/75 align-text-top bg-slate-400 "
								></span>

								<div className="flex flex-col gap-0.5 min-h-10 justify-center">
									<h2 className="text-sm font-medium flex items-center gap-2">
										<a
											data-phx-id="m78-phx-GL4tQPiMwwLzbRdh"
											href="/apps/dotrace"
											data-phx-link="redirect"
											data-phx-link-state="push"
											className="flex items-center gap-2"
										>
											<span
												className="absolute inset-0"
												aria-hidden="true"
											></span>
											<span>dotrace</span>
										</a>
									</h2>
									<div
										data-phx-id="m79-phx-GL4tQPiMwwLzbRdh"
										className="flex items-center gap-2.5 text-xs text-gray-500"
									>
										<span className="inline-flex items-center gap-1">
											<span
												data-phx-id="m80-phx-GL4tQPiMwwLzbRdh"
												className="hero-cpu-chip h-3 w-3"
											></span>
											2 items
										</span>

										<span className="inline-flex items-center gap-1">
											<span
												data-phx-id="m81-phx-GL4tQPiMwwLzbRdh"
												className="hero-globe-alt h-3 w-3"
											></span>
											LHR
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="sm:hidden">
							<svg
								className="h-5 w-5 text-gray-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
						</div>

						<div className="hidden sm:flex flex-col shrink-0 items-end justify-center"></div>
					</div>
				</li>
			</div>

			<nav
				className="flex items-center justify-between px-4 py-3 sm:px-6"
				aria-label="Pagination"
			>
				<div className="flex flex-1 justify-center items-baseline gap-2">
					<p className="text-sm text-gray-700">
						<span>Displaying</span>
						<span className="font-medium">1</span>
						<span>out of</span>
						<span className="font-medium">1</span>
						<span>total.</span>
					</p>
				</div>
			</nav>
		</ul>
	</main>
);
