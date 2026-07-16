import type { SVGProps } from "react";

export const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<path
			d="M10 21h4c1.886 0 2.828 0 3.414-.586S18 18.886 18 17V7.428A.43.43 0 0 0 17.571 7H6.43A.43.43 0 0 0 6 7.429V17c0 1.886 0 2.828.586 3.414S8.114 21 10 21"
			opacity={0.1}
			fill="currentColor"
		/>
		<path d="M10 17v-6M14 17v-6M4 7h16" />
		<path d="M6 8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v9c0 1.886 0 2.828-.586 3.414S15.886 21 14 21h-4c-1.886 0-2.828 0-3.414-.586S6 18.886 6 17V8ZM16 7c0-1.886 0-2.828-.586-3.414M8 7c0-1.886 0-2.828.586-3.414S10.114 3 12 3s2.828 0 3.414.586m0 0Z" />
	</svg>
);
