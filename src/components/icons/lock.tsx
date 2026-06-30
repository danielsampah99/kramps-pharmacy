import type { SVGProps } from "react";

export const LockIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
		<path
			d="M15 9c1.886 0 2.828 0 3.414.586S19 11.114 19 13v4c0 1.886 0 2.828-.586 3.414S16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586S5 18.886 5 17v-4c0-1.886 0-2.828.586-3.414S7.114 9 9 9h6"
			opacity={0.1}
			fill="currentColor"
		/>
		<path d="M13 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
		<path d="M15 9c1.886 0 2.828 0 3.414.586S19 11.114 19 13v4c0 1.886 0 2.828-.586 3.414S16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586S5 18.886 5 17v-4c0-1.886 0-2.828.586-3.414S7.114 9 9 9h6Z" />
		<path d="M9 9V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
	</svg>
);
