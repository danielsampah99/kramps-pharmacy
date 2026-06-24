import { Link, createFileRoute } from "@tanstack/react-router";
import { useMutation } from "convex/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../convex/_generated/api";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	// const {
	// 	data: { viewer, numbers },
	// } = useSuspenseQuery(
	// 	convexQuery(api.myFunctions.listNumbers, { count: 10 }),
	// );

	// const addNumber = useMutation(api.myFunctions.addNumber);

	return (
		<main className="p-8 flex flex-col gap-16">
			<h1 className="text-4xl font-bold text-center uppercase">
				hOME PAGE
			</h1>
		
		</main>
	);
}
