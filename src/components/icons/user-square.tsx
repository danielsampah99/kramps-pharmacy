import type { SVGProps } from "react";

export const UserSquareIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg role="img" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<path
			fillRule="evenodd"
			d="M3 12c0-7.411 1.588-9 9-9s9 1.588 9 9c0 4.31-.537 6.651-2.445 7.856l-.316-.978c-.335-1.208-.946-2.01-1.977-2.495-1.009-.474-2.398-.633-4.262-.633-1.866 0-3.255.172-4.264.66-1.03.497-1.64 1.31-1.975 2.517l-.31.932C3.537 18.656 3 16.314 3 12m5.75-2a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
			clipRule="evenodd"
			opacity={0.1}
			fill="currentColor"
		/>
		<path d="M3 12c0-7.411 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9c-7.411 0-9-1.588-9-9Z" />
		<path d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
		<path d="M6 19c.638-2.307 2.28-3 6-3s5.362.642 6 2.95" />
	</svg>
);
