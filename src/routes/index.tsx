import { Link, createFileRoute } from "@tanstack/react-router";
// import { useMutation } from "convex/react";
// import { useSuspenseQuery } from "@tanstack/react-query";
// import { convexQuery } from "@convex-dev/react-query";
// import { api } from "../../convex/_generated/api";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<main className="p-8 flex flex-col gap-16">
			<Link to="." className="text-4xl font-bold text-center uppercase">
				Hello, Daniel
			</Link>
		</main>
	);
}
