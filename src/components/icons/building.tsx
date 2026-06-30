import type { SVGProps } from "react";

export const BuildingIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
		<path
			d="M12 3H9c-1.886 0-2.828 0-3.414.586S5 5.114 5 7v13.75c0 .138.112.25.25.25h13.5a.25.25 0 0 0 .25-.25V7c0-1.886 0-2.828-.586-3.414S16.886 3 15 3z"
			opacity={0.1}
			fill="currentColor"
		/>
		<path d="M3 21h18" />
		<path d="M19 21V7c0-1.886 0-2.828-.586-3.414S16.886 3 15 3H9c-1.886 0-2.828 0-3.414.586S5 5.114 5 7v14" />
		<path d="M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" />
	</svg>
);
