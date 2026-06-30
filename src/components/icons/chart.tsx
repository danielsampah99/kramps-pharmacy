import type { SVGProps } from "react";

export const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
		<path
			d="M17 3c1.886 0 2.828 0 3.414.586S21 5.114 21 7v6c0 1.886 0 2.828-.586 3.414S18.886 17 17 17H7c-1.886 0-2.828 0-3.414-.586S3 14.886 3 13V7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10"
			opacity={0.1}
			fill="currentColor"
		/>
		<path d="M17 3c1.886 0 2.828 0 3.414.586S21 5.114 21 7v6c0 1.886 0 2.828-.586 3.414S18.886 17 17 17H7c-1.886 0-2.828 0-3.414-.586S3 14.886 3 13V7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10Z" />
		<path d="m9 21 2.625-3.5a.47.47 0 0 1 .75 0L15 21M12 9v4M16 7v6M8 10v3" />
	</svg>
);
