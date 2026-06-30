import type { SVGProps } from "react";

export const TimerIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
		<path
			d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
			opacity={0.1}
			fill="currentColor"
		/>
		<path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
		<path d="M12 7v5M21 4l-1-1" />
	</svg>
);
