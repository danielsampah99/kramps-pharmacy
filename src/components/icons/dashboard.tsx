import type { SVGProps } from "react";

export const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		role="img"
		className="transition-colors"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		<g bufferred-rendering="static">
			<path
				d="M19 13.6a2.347 2.347 0 00-2.314-2.314H13.6a2.347 2.347 0 00-2.314 2.314v3.086A2.347 2.347 0 0013.6 19h3.086A2.35 2.35 0 0019 16.686V13.6z"
				fillOpacity={0.4}
			/>
			<path d="M8.714 13.6A2.347 2.347 0 006.4 11.286H3.314A2.347 2.347 0 001 13.6v3.086A2.35 2.35 0 003.314 19H6.4a2.347 2.347 0 002.314-2.314V13.6zM19 3.314A2.35 2.35 0 0016.686 1H13.6a2.347 2.347 0 00-2.314 2.314V6.4A2.347 2.347 0 0013.6 8.714h3.086A2.347 2.347 0 0019 6.4V3.314zm-10.286 0A2.347 2.347 0 006.4 1H3.314A2.35 2.35 0 001 3.314V6.4a2.347 2.347 0 002.314 2.314H6.4A2.347 2.347 0 008.714 6.4V3.314z" />
		</g>
	</svg>
);
