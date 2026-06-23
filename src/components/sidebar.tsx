import { Sidebar as KSidebar } from "@cloudflare/kumo/components/sidebar";
import StoreIcon from '@scarlab-icons/react/ghost/store'

export const Sidebar = () => (
	<KSidebar.Provider defaultOpen={true}>
		<KSidebar className="w-full max-w-376 mx-auto flex flex-col gap-4 lg:gap-6 py-4 lg:py-6 px-4 sm:px-8 lg:pb-16 lg:overflow-visible">
			<KSidebar.Content>
				<KSidebar.Group>
					<KSidebar.GroupLabel>Branch</KSidebar.GroupLabel>
					<div className="btn inline-flex items-center justify-start shadow-sm px-3 shadow-brand/50 cursor-pointer border-emerald-200/50 border border-solid">
						<StoreIcon className="size-4" />
						<span>Head Office</span>
					</div>
				</KSidebar.Group>
			</KSidebar.Content>
		</KSidebar>
	</KSidebar.Provider>
);

// const fake = () => (<div data-phx-id="m11-phx-GLuM_qRwqXYsiITx" class="w-full max-w-[94rem] mx-auto flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6 py-4 lg:py-6 px-4 sm:px-8 pb-16 lg:pb-6 overflow-x-hidden lg:overflow-x-visible">
// 	<div class="space-y-4 lg:w-72 lg:relative lg:z-10">

// 		<div>
// 			<label class="block text-sm font-medium text-gray-700 mb-1">
// 			      Organization
// 			    </label>
// 			<button type="button" class="btn relative w-full justify-normal border-navy-300 px-3 shadow-sm shadow-violet-200/50 focus:outline-0" phx-click="[[&quot;dispatch&quot;,{&quot;to&quot;:&quot;#org-command-palette&quot;,&quot;event&quot;:&quot;palette:open&quot;}]]">
// 				<div class="flex items-center gap-2">

// 					<svg role="img" class="text-violet-500" style="pointer-events: none; width: 14px; height: 14px; " viewBox="0 0 20 20" fill="currentColor">
// 						<g bufferred-rendering="static">
// 							<path d="M10.032 6.499A3.525 3.525 0 006.532 10a3.525 3.525 0 003.5 3.501A3.526 3.526 0 0013.533 10a3.526 3.526 0 00-3.501-3.501z" fill-opacity="1"></path>
// 							<path d="M8.582 15.386a2.537 2.537 0 00-1.11 2.084 2.547 2.547 0 002.53 2.53 2.546 2.546 0 002.527-2.53 2.532 2.532 0 00-1.091-2.072c-.45.119-.921.184-1.407.185-.5-.001-.987-.07-1.449-.197zm8.89-7.916a2.538 2.538 0 00-2.057 1.069c.129.466.198.956.199 1.461a5.51 5.51 0 01-.199 1.461 2.538 2.538 0 002.057 1.069A2.546 2.546 0 0020.001 10a2.546 2.546 0 00-2.529-2.53zm-14.943 0A2.547 2.547 0 00-.001 10a2.547 2.547 0 002.53 2.53 2.541 2.541 0 002.103-1.136A5.532 5.532 0 014.451 10c.001-.481.064-.948.181-1.394A2.541 2.541 0 002.529 7.47zM10.002 0a2.547 2.547 0 00-2.53 2.53A2.538 2.538 0 008.58 4.614c.463-.127.95-.196 1.451-.197.486.001.958.066 1.408.185a2.536 2.536 0 001.09-2.072A2.546 2.546 0 0010.002 0z" fill-opacity=".45"></path>
// 						</g>
// 					</svg>
// 					<div class="inline-block truncate">Personal</div>
// 				</div>
// 				<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
// 					<kbd class="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-navy-100 text-[11px] font-mono text-navy-400">
// 						<span class="text-[13px]">⌘</span>
// 						K

// 					</kbd>
// 					<span data-phx-id="m12-phx-GLuM_qRwqXYsiITx" class="hero-magnifying-glass-mini sm:hidden w-4 h-4 text-navy-400"></span>
// 				</span>
// 			</button>
// 		</div>

// 		<div data-phx-id="c1-phx-GLuM_qRwqXYsiITx" data-phx-component="1" data-phx-view="phx-GLuM_qRwqXYsiITx" id="org-command-palette" phx-hook="OrgCommandPalette">

// 			<div id="org-palette-modal" class="relative z-[10000] hidden">
// 				<div id="org-palette-modal-bg" class="bg-navy-950/50 fixed inset-0 transition-opacity backdrop-blur-sm opacity-0 hidden" aria-hidden="true"></div>
// 				<div class="fixed inset-0 overflow-y-auto" role="dialog" aria-modal="true" tabindex="0">
// 					<div class="flex min-h-full items-start justify-center pt-[12vh] px-4">
// 						<div id="org-palette-modal-container" phx-click-away="[[&quot;dispatch&quot;,{&quot;to&quot;:&quot;#org-command-palette&quot;,&quot;event&quot;:&quot;palette:close&quot;}]]" class="relative w-full max-w-lg bg-white rounded-xl shadow-2xl shadow-navy-700/10 ring-1 ring-black/5 transition scale-95 opacity-0 hidden">
// 							<div id="org-palette-modal-content">

// 								<div class="relative">
// 									<span data-phx-id="m13-phx-GLuM_qRwqXYsiITx" class="hero-magnifying-glass-mini absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400 pointer-events-none"></span>

// 									<form phx-change="search" phx-submit="search" phx-target="1">
// 										<input id="org-palette-search" type="text" placeholder="Search organizations..." value="" name="value" autocomplete="off" phx-debounce="150" class="w-full pl-12 pr-20 py-4 text-base border-0 border-b border-navy-100 rounded-t-xl focus:ring-0 focus:border-navy-200 placeholder-navy-400">

// 										<kbd class="hidden sm:inline-flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-0.5 px-1.5 py-0.5 rounded bg-navy-100 text-[11px] font-mono text-navy-400 pointer-events-none">
// 											<span class="text-[13px]">⌘</span>
// 											K

// 										</kbd>
// 									</form>
// 								</div>

// 								<div id="org-palette-list" class="max-h-80 overflow-y-auto overscroll-contain" role="listbox">

// 									<a data-phx-id="m14-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com" data-phx-link="redirect" data-phx-link-state="push" id="org-palette-item-0" class="block px-4 py-3 transition-colors cursor-pointer border-l-2 bg-violet-50 border-violet-400 text-navy-900" role="option" aria-selected="true">
// 										<div class="flex items-center gap-2.5 min-w-0">

// 											<svg role="img" class="text-violet-500 shrink-0" style="pointer-events: none; width: 16px; height: 16px; " viewBox="0 0 20 20" fill="currentColor">
// 												<g bufferred-rendering="static">
// 													<path d="M10.032 6.499A3.525 3.525 0 006.532 10a3.525 3.525 0 003.5 3.501A3.526 3.526 0 0013.533 10a3.526 3.526 0 00-3.501-3.501z" fill-opacity="1"></path>
// 													<path d="M8.582 15.386a2.537 2.537 0 00-1.11 2.084 2.547 2.547 0 002.53 2.53 2.546 2.546 0 002.527-2.53 2.532 2.532 0 00-1.091-2.072c-.45.119-.921.184-1.407.185-.5-.001-.987-.07-1.449-.197zm8.89-7.916a2.538 2.538 0 00-2.057 1.069c.129.466.198.956.199 1.461a5.51 5.51 0 01-.199 1.461 2.538 2.538 0 002.057 1.069A2.546 2.546 0 0020.001 10a2.546 2.546 0 00-2.529-2.53zm-14.943 0A2.547 2.547 0 00-.001 10a2.547 2.547 0 002.53 2.53 2.541 2.541 0 002.103-1.136A5.532 5.532 0 014.451 10c.001-.481.064-.948.181-1.394A2.541 2.541 0 002.529 7.47zM10.002 0a2.547 2.547 0 00-2.53 2.53A2.538 2.538 0 008.58 4.614c.463-.127.95-.196 1.451-.197.486.001.958.066 1.408.185a2.536 2.536 0 001.09-2.072A2.546 2.546 0 0010.002 0z" fill-opacity=".45"></path>
// 												</g>
// 											</svg>
// 											<span class="font-medium text-navy-900 truncate">Personal</span>
// 											<span class="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-violet-600 bg-violet-100 px-1.5 py-0.5 rounded">
// 											                    Current
// 											                  </span>
// 										</div>
// 										<div class="ml-[26px] mt-1 flex items-center gap-1.5 flex-wrap">

// 											<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-sky-50 text-sky-700">
// 											    1 member
// 											  </span>
// 											<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-violet-50 text-violet-700">
// 											    1 app
// 											  </span>

// 											<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-navy-50 text-navy-600">
// 											    Pay As You Go
// 											  </span>

// 										</div>
// 									</a>

// 									<div class="border-t border-navy-100">
// 										<a data-phx-id="m15-phx-GLuM_qRwqXYsiITx" href="/organizations/new" data-phx-link="redirect" data-phx-link-state="push" id="org-palette-item-1" class="flex items-center gap-2.5 px-4 py-3 text-sm transition-colors cursor-pointer border-l-2 border-transparent text-navy-600 hover:bg-navy-50" aria-selected="false">
// 											<span data-phx-id="m16-phx-GLuM_qRwqXYsiITx" class="hero-plus-mini w-4 h-4 text-violet-500"></span>
// 											<span>Create new organization</span>
// 										</a>
// 									</div>
// 								</div>

// 								<div class="hidden sm:flex items-center gap-3 px-4 py-2.5 border-t border-navy-100 text-[11px] text-navy-400">
// 									<span class="flex items-center gap-1">
// 										<kbd class="px-1.5 py-0.5 bg-navy-100 rounded text-[10px] font-mono">↑</kbd>
// 										<kbd class="px-1.5 py-0.5 bg-navy-100 rounded text-[10px] font-mono">↓</kbd>

// 										                navigate

// 									</span>
// 									<span class="flex items-center gap-1">
// 										<kbd class="px-1.5 py-0.5 bg-navy-100 rounded text-[10px] font-mono">↵</kbd>

// 										                select

// 									</span>
// 									<span class="flex items-center gap-1">
// 										<kbd class="px-1.5 py-0.5 bg-navy-100 rounded text-[10px] font-mono">esc</kbd>

// 										                close

// 									</span>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>

// 		<button type="button" class="gap-2 btn gap-2 btn btn btn-purple btn-border-dark w-full" phx-click="[[&quot;show&quot;,{&quot;to&quot;:&quot;#gh-launch-modal&quot;}],[&quot;show&quot;,{&quot;to&quot;:&quot;#gh-launch-modal-bg&quot;,&quot;transition&quot;:[[&quot;transition-all&quot;,&quot;transform&quot;,&quot;ease-out&quot;,&quot;duration-300&quot;],[&quot;opacity-0&quot;],[&quot;opacity-100&quot;]]}],[&quot;show&quot;,{&quot;to&quot;:&quot;#gh-launch-modal-container&quot;,&quot;transition&quot;:[[&quot;transition-all&quot;,&quot;transform&quot;,&quot;ease-out&quot;,&quot;duration-300&quot;],[&quot;opacity-0&quot;,&quot;translate-y-4&quot;,&quot;sm:translate-y-0&quot;,&quot;sm:scale-95&quot;],[&quot;opacity-100&quot;,&quot;translate-y-0&quot;,&quot;sm:scale-100&quot;]]}],[&quot;add_class&quot;,{&quot;names&quot;:[&quot;overflow-hidden&quot;],&quot;to&quot;:&quot;body&quot;}],[&quot;focus_first&quot;,{&quot;to&quot;:&quot;#gh-launch-modal-content&quot;}]]">

// 			<svg role="img" class="mr-2" style="pointer-events: none; width: 16px; height: 16px; " viewBox="0 0 20 20" fill="currentColor">
// 				<g bufferred-rendering="static">

// 					<path d="M5.34 7.595L1.331 9.436a.564.564 0 000 1.023l4.009 1.842 1.841 4.008a.564.564 0 001.023 0l1.842-4.008 4.009-1.842a.564.564 0 000-1.023l-4.009-1.841-1.842-4.009a.562.562 0 00-1.023 0L5.34 7.595z" fill-opacity="1"></path>
// 					<path d="M14.476 3.168l-2.004.921a.28.28 0 000 .511l2.004.921.921 2.004a.282.282 0 00.511 0l.921-2.004 2.004-.921a.282.282 0 000-.511l-2.004-.921-.921-2.004a.28.28 0 00-.511 0l-.921 2.004zM14.476 14.479l-2.004.921a.282.282 0 000 .511l2.004.921.921 2.004a.282.282 0 00.511 0l.921-2.004 2.004-.921a.28.28 0 000-.511l-2.004-.921-.921-2.004a.28.28 0 00-.511 0l-.921 2.004z" fill-opacity=".45"></path>

// 				</g>
// 			</svg>
// 			 Launch an App

// 		</button>

// 		<nav class="bg-navy-950/95 backdrop-blur-md lg:backdrop-blur-none lg:bg-transparent fixed lg:static bottom-0 left-0 flex items-center gap-0.5 lg:block w-full max-w-full min-w-[11rem] px-1 sm:px-2 lg:px-0 overflow-x-auto lg:overflow-x-visible z-[9999] lg:z-10 pb-[env(safe-area-inset-bottom)] lg:pb-0 h-[calc(3rem+env(safe-area-inset-bottom))] lg:h-auto text-[10px] lg:text-sm text-white/80 lg:text-navy-900 font-medium">

// 			<a data-phx-id="m17-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">

// 					<svg role="img" class="text-violet-500" style="pointer-events: none; width: 14px; height: 14px; " viewBox="0 0 20 20" fill="currentColor">
// 						<g bufferred-rendering="static">

// 							<path d="M5.34 7.595L1.331 9.436a.564.564 0 000 1.023l4.009 1.842 1.841 4.008a.564.564 0 001.023 0l1.842-4.008 4.009-1.842a.564.564 0 000-1.023l-4.009-1.841-1.842-4.009a.562.562 0 00-1.023 0L5.34 7.595z" fill-opacity="1"></path>
// 							<path d="M14.476 3.168l-2.004.921a.28.28 0 000 .511l2.004.921.921 2.004a.282.282 0 00.511 0l.921-2.004 2.004-.921a.282.282 0 000-.511l-2.004-.921-.921-2.004a.28.28 0 00-.511 0l-.921 2.004zM14.476 14.479l-2.004.921a.282.282 0 000 .511l2.004.921.921 2.004a.282.282 0 00.511 0l.921-2.004 2.004-.921a.28.28 0 000-.511l-2.004-.921-.921-2.004a.28.28 0 00-.511 0l-.921 2.004z" fill-opacity=".45"></path>

// 						</g>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Apps
// 				        </span>

// 			</a>

// 			<a data-phx-id="m18-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/team" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m19-phx-GLuM_qRwqXYsiITx" role="img" class="text-violet-500" viewBox="0 0 24 24" style="pointer-events: none; width: 14px; height: 14px; ;" fill="currentColor">
// 						<circle cx="14" cy="7" fill-opacity=".45" r="4"></circle>
// 						<path d="M12 13C8.68629 13 6 15.6863 6 19C6 20.1046 6.89543 21 8 21H20C21.1046 21 22 20.1046 22 19V18C22 15.2386 19.7614 13 17 13H12Z" fill-opacity=".45"></path>
// 						<path d="M7 13C4.23858 13 2 15.2386 2 18V19C2 20.1046 2.89543 21 4 21H16C17.1046 21 18 20.1046 18 19V18C18 15.2386 15.7614 13 13 13H7Z"></path>
// 						<circle cx="10" cy="7" r="4"></circle>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Team
// 				        </span>

// 			</a>

// 			<hr class="hidden lg:block my-3 w-full h-px border-0 bg-gradient-to-r from-violet-800/5 via-violet-800/20 to-violet-800/5">

// 			<a data-phx-id="m20-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/activity" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m21-phx-GLuM_qRwqXYsiITx" role="img" class="text-violet-500" viewBox="0 0 20 20" style="pointer-events: none; width: 14px; height: 14px; ;" fill="currentColor">
// 						<g buffered-rendering="static">
// 							<path d="M4 18c-1.097 0-2-.903-2-2s.903-2 2-2h12c1.097 0 2 .903 2 2s-.903 2-2 2H4z" fill-opacity="1"></path>
// 							<path d="M6 12c-1.097 0-2-.903-2-2s.903-2 2-2h8c1.097 0 2 .903 2 2s-.903 2-2 2H6z" fill-opacity=".65"></path>
// 							<path d="M8 6c-1.097 0-2-.903-2-2s.903-2 2-2h4c1.097 0 2 .903 2 2s-.903 2-2 2H8z" fill-opacity=".45"></path>
// 						</g>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Activity
// 				        </span>

// 			</a>

// 			<a data-phx-id="m22-phx-GLuM_qRwqXYsiITx" href="https://fly-metrics.net/d/fly-app/fly-app?orgId=845571" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900" target="_blank">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m23-phx-GLuM_qRwqXYsiITx" role="img" class="text-violet-500" viewBox="0 0 20 20" style="pointer-events: none; width: 14px; height: 14px; ;" fill="currentColor">
// 						<g buffered-rendering="static" fill-rule="evenodd">
// 							<path d="M1 11.759v4.385a2.847 2.847 0 002.846 2.846h12.308A2.847 2.847 0 0019 16.144v-4.385h-4.038c-.421 0-.797-.262-.943-.657l-1.16-2.477-2.051 6.291c-.253.967-1.612 1.01-1.925.06L6.955 9.893l-.494 1.235a1.003 1.003 0 01-.933.631H1zM1 9.75h3.848l1.257-3.142c.348-.871 1.593-.831 1.886.057l1.739 4.518 1.997-6.099c.249-.952 1.58-1.013 1.915-.087l2.02 4.753H19V3.856a2.847 2.847 0 00-2.846-2.846H3.846A2.847 2.847 0 001 3.856V9.75z" fill-opacity=".45"></path>
// 							<path d="M1 9.75v2.009h4.528c.411 0 .781-.249.933-.631l.494-1.235 1.928 5.083c.313.95 1.672.907 1.925-.06l2.051-6.291 1.16 2.477c.146.395.522.657.943.657H19V9.75h-3.338l-2.02-4.753c-.335-.926-1.666-.865-1.915.087L9.73 11.183 7.991 6.665c-.293-.888-1.538-.928-1.886-.057L4.848 9.75H1z" fill-opacity="1"></path>
// 						</g>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Grafana
// 				        </span>

// 				<svg role="img" class="hidden lg:block text-violet-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" style="pointer-events: none; width: 16px; height: 16px; " viewBox="0 0 20 20" fill="currentColor">
// 					<g bufferred-rendering="static">
// 						<path d="M13.856 1.787H6.144a4.361 4.361 0 00-4.357 4.357v7.712a4.361 4.361 0 004.357 4.357h7.712a4.361 4.361 0 004.357-4.357V6.144a4.361 4.361 0 00-4.357-4.357z" fill-opacity=".2"></path>
// 						<path d="M13.441 5.764H8.963a.793.793 0 00-.796.795c0 .433.363.796.796.796h2.541L5.816 13.06a.794.794 0 000 1.124.81.81 0 00.57.242.813.813 0 00.571-.242l5.688-5.688v2.541c0 .45.364.796.796.796a.793.793 0 00.795-.796V6.559a.783.783 0 00-.795-.795z"></path>
// 					</g>
// 				</svg>

// 			</a>

// 			<hr class="hidden lg:block my-3 w-full h-px border-0 bg-gradient-to-r from-violet-800/5 via-violet-800/20 to-violet-800/5">

// 			<a data-phx-id="m24-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/managed_postgres" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900" data-postgres="1">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m25-phx-GLuM_qRwqXYsiITx" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.6 25.6" style="pointer-events: none; width: 14px; height: 14px; ;" class="h-6 w-6 text-violet-500" fill="currentColor">
// 						<g fill="none" stroke="none">

// 							<path d="M23.535 15.6c-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31 10.31 0 0 0-1.929-.201c-1.308-.02-2.3.343-3.054.914 0 0-9.278-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.02 2.02 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.52 1.593.484 2.815s-.06 2.06.18 2.716.48 2.13 2.53 1.7c1.713-.367 2.6-1.32 2.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023 1.085-1.793l.257.023c.777.035 1.794-.125 2.39-.402 1.285-.596 2.047-1.592.78-1.33z" fill="currentColor" fill-opacity=".55"></path>

// 							<g stroke="currentColor" fill="none">
// 								<path d="M12.814 16.467c-.08 2.846.02 5.712.298 6.4s.875 2.05 2.926 1.612c1.713-.367 2.337-1.078 2.607-2.647l.633-5.017M10.356 2.2S1.072-1.596 1.504 7.033c.092 1.836 2.63 13.9 5.66 10.25C8.27 15.95 9.27 14.907 9.27 14.907m6.1-13.4c-.32.1 5.164-2.005 8.282 1.978 1.1 1.407-.175 7.157-3.228 11.687"></path>
// 								<path d="M20.425 15.17s.2.98 3.1.382c1.267-.262.504.734-.78 1.33-1.054.49-3.418.615-3.457-.06-.1-1.745 1.244-1.215 1.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29 1.224-6.333.22-.045-1.56-5.7-7.16-5.782S7.99 8.196 7.99 8.196" stroke-linejoin="bevel"></path>
// 								<path d="M11.247 15.768c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z"></path>
// 								<path d="M11.196 15.753c-.08-.513.168-1.122.433-1.836.398-1.07 1.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166 1.74-.06 3.365c-.297 2.122 1.35 3.916 3.246 3.733"></path>
// 								<path d="M20.562 7.095c.05.92-.198 1.545-.23 2.524-.046 1.422.678 3.05-.413 4.68"></path>
// 							</g>

// 							<g fill="currentColor">
// 								<path d="M10.322 8.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z"></path>
// 								<path d="M19.486 7.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z"></path>
// 							</g>
// 						</g>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Managed Postgres
// 				        </span>

// 			</a>

// 			<a data-phx-id="m26-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/flynet" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m27-phx-GLuM_qRwqXYsiITx" viewBox="0 0 428 429" fill-rule="evenodd" role="img" style="pointer-events: none; width: 14px; height: 14px; ;" class="h-6 w-6 text-violet-500" aria-label="Phoenix.new Logo">
// 						<path d="M214.182 0c118.21 0 214.182 95.972 214.182 214.182s-95.972 214.182-214.182 214.182S0 332.392 0 214.182 95.972 0 214.182 0zm0 20.184c107.07 0 193.998 86.927 193.998 193.998 0 107.07-86.928 193.998-193.998 193.998-107.071 0-193.998-86.928-193.998-193.998 0-107.071 86.927-193.998 193.998-193.998zm6.88 42.755c-.876 1.536-2.359 1.328-2.391 1.335-20.467 4.171-134.504 23.594-126.939 139.823 2.734 42.014 35.449 70.669 52.96 78.805 18.456 8.576 65.198 20.229 96.05-17.115 15.526-18.794 14.649-54.023-.612-59.802-17.887-6.774-19.887 9.482-27.302 8.706-6.45-.675-10.776-13.494-5.937-24.058 3.377-7.374 16.59-14.027 28.579-13.484 34.96 1.582 60.423 35.87 48.407 85.019-5.574 22.796-27.891 55.725-71.249 64.517-43.284 8.778-88.306-5.769-124.158-58.084-.742-1.083-4.878 1.576 11.96 26.446 17.861 26.378 44.929 49.688 85.669 61.287 5.487 1.562 11.883 3.284 9.714 4.515-24.896 14.139-90.697-14.6-120.541-63.317-27.599-45.052-23.137-81.39-22.469-99.467 1.56-42.251 36.47-120.107 115.168-137.873 34.662-7.825 55.993-2.343 53.091 2.747zm36.52 286.976c0-1.628 1.233-2.144 1.259-2.157 14.406-7.603 99.993-81.622 42.978-171.135-20.61-32.357-53.694-37.438-71.784-37.438-18.091 0-66.638 9.145-66.638 57.488 0 37.326 33.22 50.175 47.377 49.614a3.179 3.179 0 013.572 2.475l.015.013c.048.229.071.462.064.696l-.049.46a3.157 3.157 0 01-.505 1.276c-6.315 10.399-64.627 18.13-82.191-31.969-7.095-20.237-10.896-54.175 13.964-82.977 28.618-33.156 91.117-57.958 145.358-17.821 86.088 63.705 62.268 176.634 3.48 219.18-19.471 14.091-36.9 17.69-36.9 12.295zm77.094-253.627c12.923 11.547 18.724 26.172 12.946 32.638-5.778 6.466-20.96 2.34-33.883-9.207-12.923-11.548-18.724-26.172-12.946-32.638 5.778-6.466 20.96-2.34 33.883 9.207z" fill="currentColor"></path>

// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          phoenix.new
// 				        </span>

// 			</a>

// 			<a data-phx-id="m28-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/redis" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white bg-violet-600/90 lg:bg-violet-500/10 lg:text-violet-700">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m29-phx-GLuM_qRwqXYsiITx" role="img" class="lg:text-violet-500" viewBox="0 0 20 20" style="pointer-events: none; width: 14px; height: 14px; ;" fill="currentColor">
// 						<path d="M3.616 16.384A7.223 7.223 0 1013.831 6.169l-1.277 1.277a5.42 5.42 0 010 7.662 5.42 5.42 0 01-7.662 0l-1.276 1.276zm2.553-2.553a3.613 3.613 0 005.108-5.108L10 10a1.806 1.806 0 01-2.554 2.554l-1.277 1.277z"></path>
// 						<path d="M16.384 3.616A7.223 7.223 0 106.169 13.831l1.277-1.277a5.418 5.418 0 017.661-7.661l1.277-1.277zm-2.553 2.553a3.613 3.613 0 00-5.108 5.108L10 10a1.806 1.806 0 012.554-2.554l1.277-1.277z" fill-opacity=".5"></path>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Upstash Redis
// 				        </span>

// 			</a>

// 			<a data-phx-id="m30-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/tigris" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">

// 					<svg role="img" class="text-violet-500" style="pointer-events: none; width: 14px; height: 14px; " viewBox="-0.5 -0.5 16.5 14.5" fill="currentColor">

// 						<path d="M5.927 6.043V2.825h3.052V.198H.09v2.627h2.661v3.204c0 3.277 1.392 7.101 6.226 7.101v-2.544c-2.469.014-3.051-1.885-3.051-4.543h.001z" fill-opacity=".85"></path>

// 						<path d="M13.451 4.07l-.321-.703a1.794 1.794 0 00-.909-.891l-.711-.3.701-.321c.401-.182.72-.506.894-.911l.306-.708.322.698c.181.401.507.719.913.891l.706.305-.7.32c-.401.182-.72.507-.895.911l-.306.709z" fill-opacity=".65"></path>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Tigris Object Storage
// 				        </span>

// 			</a>

// 			<a data-phx-id="m31-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/postgres" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m32-phx-GLuM_qRwqXYsiITx" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.6 25.6" style="pointer-events: none; width: 14px; height: 14px; ;" class="h-6 w-6 text-violet-500" fill="currentColor">
// 						<g fill="none" stroke="none">

// 							<path d="M23.535 15.6c-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31 10.31 0 0 0-1.929-.201c-1.308-.02-2.3.343-3.054.914 0 0-9.278-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.02 2.02 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.52 1.593.484 2.815s-.06 2.06.18 2.716.48 2.13 2.53 1.7c1.713-.367 2.6-1.32 2.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023 1.085-1.793l.257.023c.777.035 1.794-.125 2.39-.402 1.285-.596 2.047-1.592.78-1.33z" fill="currentColor" fill-opacity=".55"></path>

// 							<g stroke="currentColor" fill="none">
// 								<path d="M12.814 16.467c-.08 2.846.02 5.712.298 6.4s.875 2.05 2.926 1.612c1.713-.367 2.337-1.078 2.607-2.647l.633-5.017M10.356 2.2S1.072-1.596 1.504 7.033c.092 1.836 2.63 13.9 5.66 10.25C8.27 15.95 9.27 14.907 9.27 14.907m6.1-13.4c-.32.1 5.164-2.005 8.282 1.978 1.1 1.407-.175 7.157-3.228 11.687"></path>
// 								<path d="M20.425 15.17s.2.98 3.1.382c1.267-.262.504.734-.78 1.33-1.054.49-3.418.615-3.457-.06-.1-1.745 1.244-1.215 1.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29 1.224-6.333.22-.045-1.56-5.7-7.16-5.782S7.99 8.196 7.99 8.196" stroke-linejoin="bevel"></path>
// 								<path d="M11.247 15.768c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z"></path>
// 								<path d="M11.196 15.753c-.08-.513.168-1.122.433-1.836.398-1.07 1.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166 1.74-.06 3.365c-.297 2.122 1.35 3.916 3.246 3.733"></path>
// 								<path d="M20.562 7.095c.05.92-.198 1.545-.23 2.524-.046 1.422.678 3.05-.413 4.68"></path>
// 							</g>

// 							<g fill="currentColor">
// 								<path d="M10.322 8.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z"></path>
// 								<path d="M19.486 7.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z"></path>
// 							</g>
// 						</g>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Legacy Postgres
// 				        </span>

// 				<div data-phx-id="m33-phx-GLuM_qRwqXYsiITx" class="bubble-wrap inline-block hidden md:inline-block">

// 					<span data-phx-id="m34-phx-GLuM_qRwqXYsiITx" class="hero-information-circle-mini size-4 text-navy-400"></span>

// 					<div class="bubble-r tail max-w-xs">

// 					        Legacy Postgres clusters are unmanaged and require manual configuration

// 					  </div>
// 				</div>

// 			</a>

// 			<hr class="hidden lg:block my-3 w-full h-px border-0 bg-gradient-to-r from-violet-800/5 via-violet-800/20 to-violet-800/5">

// 			<a data-phx-id="m35-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/status" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">

// 					<svg role="img" class="text-violet-500" style="pointer-events: none; width: 14px; height: 14px; " viewBox="0 0 20 20" fill="currentColor">
// 						<g buffered-rendering="static">
// 							<path d="M16.437 10.588a2.354 2.354 0 00-2.352-2.354h-8.17a2.354 2.354 0 00-2.352 2.354v7.059A2.353 2.353 0 005.915 20h8.17a2.353 2.353 0 002.352-2.353v-7.059zm-1.809-5.987h-1.332a.465.465 0 100 .93h1.332a.465.465 0 100-.93zm-9.235.93h1.333a.465.465 0 000-.93H5.393a.465.465 0 000 .93zm7.542-4.054l-.942.942a.465.465 0 10.658.658l.942-.943a.465.465 0 10-.658-.657zm-6.507.657l.942.943a.465.465 0 00.658-.658l-.942-.942a.465.465 0 10-.658.657zM9.529.465v1.332a.465.465 0 00.931 0V.465a.466.466 0 00-.931 0z" fill-opacity=".5"></path>
// 							<path d="M7.25 15.033a.464.464 0 00-.463.529c.229 1.641 1.591 2.894 3.224 2.894 1.623 0 2.978-1.237 3.22-2.864a.463.463 0 00-.458-.533l-5.523-.026zm-3.687 1.271v-4.373a2.187 2.187 0 000 4.373zm12.874-4.373v4.373a2.187 2.187 0 000-4.373zm-3.896-1.225a1.388 1.388 0 10.001 2.773 1.388 1.388 0 00-.001-2.773zm-5.165 2.772l.071.002a1.387 1.387 0 10-.071-.002zm2.635-10.015a1.62 1.62 0 10.002 3.24 1.62 1.62 0 00-.002-3.24z"></path>
// 						</g>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Status
// 				        </span>

// 			</a>

// 			<a data-phx-id="m36-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/support" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">

// 					<svg role="img" class="text-violet-500" style="pointer-events: none; width: 14px; height: 14px; " viewBox="0 0 20 20" fill="currentColor" fill-rule="evenodd">
// 						<g bufferred-rendering="static">
// 							<path d="M3.267 12.067A3.269 3.269 0 010 8.8V3.267A3.269 3.269 0 013.267 0h10.581a3.269 3.269 0 013.267 3.267V8.8a3.269 3.269 0 01-3.267 3.267h-5.42l-3.313 2.651s-1.441 1.233-1.441-.218v-2.433h-.407z"></path>
// 							<path d="M18.615 8.458V8.8a4.77 4.77 0 01-4.767 4.767H8.954L6.72 15.354a2.54 2.54 0 002.517 2.206h4.213l2.575 2.06s1.12.958 1.12-.169V17.56h.316A2.54 2.54 0 0020 15.021V10.72a2.54 2.54 0 00-1.385-2.262z" fill-opacity=".5"></path>
// 						</g>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Support
// 				        </span>

// 			</a>

// 			<a data-phx-id="m37-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/compliance" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m38-phx-GLuM_qRwqXYsiITx" role="img" class="text-violet-500" viewBox="0 0 24 24" style="pointer-events: none; width: 14px; height: 14px; ;" fill="currentColor">
// 						<path d="M3 9C3 7.34315 4.34315 6 6 6H12.7574C13.553 6 14.3161 6.31607 14.8787 6.87868L16.1213 8.12132C16.6839 8.68393 17 9.44699 17 10.2426V19C17 20.6569 15.6569 22 14 22H6C4.34315 22 3 20.6569 3 19V9Z" fill-opacity=".45"></path>
// 						<path d="M7 5C7 3.34315 8.34315 2 10 2H15.7574C16.553 2 17.3161 2.31607 17.8787 2.87868L20.1213 5.12132C20.6839 5.68393 21 6.44699 21 7.24264V15C21 16.6569 19.6569 18 18 18H10C8.34315 18 7 16.6569 7 15V5Z" fill-opacity="1"></path>
// 						<path d="M16 5V2C16.6403 2 17.2544 2.25435 17.7071 2.70711L20.2929 5.29289C20.7456 5.74565 21 6.35971 21 7H18C16.8954 7 16 6.10457 16 5Z" fill-opacity=".35"></path>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Compliance
// 				        </span>

// 			</a>

// 			<a data-phx-id="m39-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/tokens" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m40-phx-GLuM_qRwqXYsiITx" role="img" class="text-violet-500" viewBox="0 0 20 20" style="pointer-events: none; width: 14px; height: 14px; ;" fill="currentColor" fill-rule="evenodd">
// 						<g buffered-rendering="static">

// 							<path d="M19 10a9 9 0 11-18 0 9 9 0 0118 0z" fill-opacity=".5"></path>
// 							<path d="M12.435 7.913a2.435 2.435 0 00-4.87 0c0 .965.562 1.796 1.375 2.19l-.679 4.419h3.478l-.68-4.419a2.433 2.433 0 001.376-2.19z" fill-opacity="1"></path>

// 						</g>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Tokens
// 				        </span>

// 			</a>

// 			<hr class="hidden lg:block my-3 w-full h-px border-0 bg-gradient-to-r from-violet-800/5 via-violet-800/20 to-violet-800/5">

// 			<a data-phx-id="m41-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/usage" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m42-phx-GLuM_qRwqXYsiITx" role="img" class="text-violet-500" viewBox="0 0 20 20" style="pointer-events: none; width: 14px; height: 14px; ;" fill="currentColor">
// 						<g buffered-rendering="static">
// 							<path d="M18 4c0-1.097-.903-2-2-2s-2 .903-2 2v12c0 1.097.903 2 2 2s2-.903 2-2V4z" fill-opacity="1"></path>
// 							<path d="M6 14c0-1.097-.903-2-2-2s-2 .903-2 2v2c0 1.097.903 2 2 2s2-.903 2-2v-2z" fill-opacity=".45"></path>
// 							<path d="M12 8c0-1.097-.903-2-2-2s-2 .903-2 2v8c0 1.097.903 2 2 2s2-.903 2-2V8z" fill-opacity=".65"></path>
// 						</g>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Usage
// 				        </span>

// 			</a>

// 			<a data-phx-id="m43-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/billing" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m44-phx-GLuM_qRwqXYsiITx" role="img" class="text-violet-500" viewBox="0 0 24 24" style="pointer-events: none; width: 14px; height: 14px; ;" fill="currentColor">
// 						<g id="card">
// 							<rect fill="none" height="24" width="24"></rect>
// 							<path d="M21,19H3c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h18c1.1,0,2,0.9,2,2v11C23,18.1,22.1,19,21,19z" opacity="0.45"></path>
// 							<rect height="3" width="22" x="1" y="7"></rect>
// 							<path d="M19,16h-8c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v0C20,15.6,19.6,16,19,16z" opacity="0.45"></path>
// 						</g>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Billing
// 				        </span>

// 			</a>

// 			<a data-phx-id="m45-phx-GLuM_qRwqXYsiITx" href="/dashboard/danielsampah99-gmail-com/settings" data-phx-link="redirect" data-phx-link-state="push" class="group w-14 lg:w-auto shrink-0 lg:shrink flex flex-col lg:flex-row gap-0.5 lg:gap-2.5 items-center justify-items-center lg:justify-items-start px-1 py-1 lg:px-2.5 lg:py-2 rounded-lg transition-colors text-white/60 hover:text-white lg:hover:bg-transparent lg:hover:text-violet-600 lg:text-navy-900">
// 				<span class="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center shrink-0 [&amp;&gt;svg]:!w-3.5 [&amp;&gt;svg]:!h-3.5 lg:[&amp;&gt;svg]:!w-3.5 lg:[&amp;&gt;svg]:!h-3.5 lg:bg-gradient-to-b lg:from-white/75 lg:to-violet-100/75 lg:rounded-md lg:shadow-sm lg:shadow-violet-800/10 lg:ring-1 lg:ring-violet-800/10">
// 					<svg data-phx-id="m46-phx-GLuM_qRwqXYsiITx" role="img" class="text-violet-500" viewBox="0 0 20 20" style="pointer-events: none; width: 14px; height: 14px; ;" fill="currentColor">
// 						<g buffered-rendering="static">
// 							<path d="M5.48 17.979h9.04A3.317 3.317 0 0018 14.682a3.317 3.317 0 00-3.48-3.297H5.48A3.317 3.317 0 002 14.682a3.317 3.317 0 003.302 3.301l.178-.004zm0-9.381h9.04A3.318 3.318 0 0018 5.301a3.318 3.318 0 00-3.48-3.297H5.48A3.318 3.318 0 002 5.301a3.318 3.318 0 003.302 3.302l.178-.005z" fill-opacity=".45"></path>
// 							<path d="M14.696 11.413h.019A3.3 3.3 0 0118 14.698a3.3 3.3 0 01-3.285 3.285 3.3 3.3 0 01-3.285-3.285v-.019a3.281 3.281 0 013.266-3.266zM5.343 1.992a3.3 3.3 0 013.228 3.285 3.301 3.301 0 01-3.286 3.285A3.3 3.3 0 012 5.277a3.301 3.301 0 013.285-3.286l.058.001z" fill-opacity="1"></path>
// 						</g>
// 					</svg>
// 				</span>
// 				<span class="w-full lg:w-auto text-center lg:text-left truncate">
// 				          Settings
// 				        </span>

// 			</a>

// 		</nav>

// 		<div class="sm:px-6 lg:px-0 ">
// 		</div>

// 	</div>

// </div>)
