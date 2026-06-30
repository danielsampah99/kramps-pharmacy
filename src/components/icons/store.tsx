import type { SVGProps } from "react";

export const StoreIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" {...props}>
		<path
			d="m5 10.5 1 .5 2-.5 2 .5 2-.5 2 .5 2-.5 2 .5 1-.5V21h-3a2 2 0 0 1-2-2v-3h-4v5H5zM5 3 3 8h18l-2-5z"
			opacity={0.1}
			fill="currentColor"
		/>
		<path d="M3 21h18M5 21V11M19 21V11M10 21v-3a2 2 0 1 1 4 0v3M8 8v1a2 2 0 1 1-4 0V8M12 8v1a2 2 0 1 1-4 0V8M20 8v1a2 2 0 1 1-4 0V8M16 8v1a2 2 0 1 1-4 0V8M5.317 3h13.366c.192 0 .364.116.435.294l1.696 4.242A.34.34 0 0 1 20.5 8h-17a.34.34 0 0 1-.314-.464l1.696-4.242A.47.47 0 0 1 5.317 3Z" />
	</svg>
);
