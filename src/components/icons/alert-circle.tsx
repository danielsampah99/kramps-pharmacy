import type { SVGProps } from "react";

export const AlertCircleIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" opacity={0.1} fill="currentColor" />
		<path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
		<path d="M12 8v5M12 16v-.011" />
	</svg>
);
