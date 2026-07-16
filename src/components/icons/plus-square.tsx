import type { SVGProps } from "react";

export const PlusSquareIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<path d="M3 12c0-7.411 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9c-7.411 0-9-1.588-9-9" opacity={0.1} fill="currentColor" />
		<path d="M9 12h6M12 9v6" />
		<path d="M3 12c0-7.411 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9c-7.411 0-9-1.588-9-9Z" />
	</svg>
);
