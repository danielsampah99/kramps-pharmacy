import type { SVGProps } from "react";

export const UserIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
		<g buffered-rendering="static">
			<path
				d="M10 12.66l.015-.001a5.577 5.577 0 003.266-1.06.94.94 0 01.662-.165c1.511.215 2.837 1.016 3.913 2.087 1.414 1.409 1.102 3.736 1.102 3.736 0 3.005-17.916 2.976-17.916 0 0 0-.312-2.327 1.102-3.736 1.076-1.071 2.402-1.872 3.913-2.087a.94.94 0 01.662.165 5.577 5.577 0 003.266 1.06l.015.001z"
				fillOpacity={0.5}
			/>
			<path d="M10 10a4.752 4.752 0 004.75-4.75A4.752 4.752 0 0010 .5a4.752 4.752 0 00-4.75 4.75A4.752 4.752 0 0010 10z" />
		</g>
	</svg>
);
