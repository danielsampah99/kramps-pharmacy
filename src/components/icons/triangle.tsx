import type { SVGProps } from "react";

export const TriangleIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<path
			d="m10.25 5.147-6.6 11.882c-.741 1.333.222 2.97 1.747 2.97H18.6c1.525 0 2.49-1.637 1.749-2.97L13.747 5.147c-.762-1.372-2.735-1.372-3.497 0"
			opacity={0.1}
			fill="currentColor"
		/>
		<path d="M12 10v3M12 16v-.011" />
		<path d="M10.252 5.147 3.651 17.029c-.74 1.333.223 2.97 1.748 2.97h13.202c1.525 0 2.49-1.637 1.749-2.97L13.749 5.147c-.762-1.372-2.735-1.372-3.497 0" />
	</svg>
);
