import { Button, Input, Label, useKumoToastManager } from "@cloudflare/kumo";
import { useAuthActions } from "@convex-dev/auth/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ConvexError } from "convex/values";
import { useState } from "react";
import type { ReactNode, SubmitEvent } from "react";

import { Logo } from "~/components/logo";
import { Image } from "@unpic/react";

export const Route = createFileRoute("/_auth/sign-in")({
	component: RouteComponent,
});

const INVALID_PASSWORD = "INVALID_PASSWORD";

type SignInPageProps = {
	provider?: string;
	handleSent?: (email: string) => void;
	handlePasswordReset?: () => void;
	customSignUp?: ReactNode;
	passwordRequirements?: string;
};

function RouteComponent({ provider, handleSent }: SignInPageProps) {
	const { signIn } = useAuthActions();
	const toast = useKumoToastManager();
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			setSubmitting(true);

			const formData = new FormData(event.currentTarget);

			await signIn(provider ?? "password", formData);

			handleSent?.(formData.get("email") as string);
		} catch (err) {
			console.error(err);
			let toastTitle;

			if (err instanceof ConvexError && err.data === INVALID_PASSWORD) {
				toastTitle =
					"Invalid password - check the requirements and try again.";
			} else {
				toastTitle = "Could not sign in";
			}
			toast.add({ title: toastTitle, variant: "error" });
			setSubmitting(false);
		}
	};

	return (
		<div className="relative size-full">
			<main className="size-full lg:h-lvh grid lg:grid-cols-3 text-gray-700">
				<section className="h-full flex lg:col-span-2 flex-col justify-center items-center p-6 lg:p-10">
					<Link
						to="/"
						className="text-navy flex mb-auto self-start justify-self-start -mt-1"
					>
						<Logo className="h-9 w-auto text-brand" />
					</Link>

					<div className="w-full max-w-md mt-16 pb-16 mb-auto">
						<h1 className="text-2xl md:text-3xl mb-8 text-emerald-800">
							Sign In to KRAMPS PHARMACY
						</h1>

						<form
							className="flex flex-col gap-6 mt-8"
							onSubmit={(event) => handleSubmit(event)}
						>
							<div>
								<Label htmlFor="email" className="block">
									Email
								</Label>
								<Input
									name="email"
									id="email"
									type="email"
									aria-label="Email"
									className="mt-1! w-full p-2.5! input-text"
									autoComplete="email"
								/>
							</div>
							<div>
								<div className="flex items-center justify-between">
									<Label htmlFor="password">Password</Label>
								</div>
								<Input
									type="password"
									name="password"
									id="password"
									aria-label="Password"
									autoComplete="current-password"
									className="w-full! mt-1! input-text p-2.5!"
								/>
							</div>

							<Button
								type="submit"
								disabled={submitting}
								className="mt-4 btn-xl btn-primary w-full bg-brand! text-white!"
							>
								{submitting ? "Signing in" : "Sign in"}
							</Button>
						</form>
					</div>
				</section>

				<aside className="relative hidden lg:block lg:w-md xl:w-lg h-full p-16">
					<Image
						src="/login-hero.svg"
						className="absolute inset-0 max-w-none size-full object-cover"
						alt="pharmacy illustration"
						layout="fullWidth"
					/>

					<blockquote className="relative z-20 text-2xl font-heading text-emerald-900">
						<p className="leading-tight">I am clinical</p>

						<p className="leading-tight">
							Pharmacist, what about you?
						</p>

						<p className="leading-tight">Am I cynical</p>

						<cite className="block not-italic text-xl mt-6">
							<span className="opacity-40">—</span>A haiku
							by&nbsp;
							<Link
								to="."
								target="_blank"
								className="underline underline-offset-2 decoration-1 transition-colors decoration-emerald-900/40 hover:text-emerald-700 hover:decoration-emerald-700"
							>
								fawd
							</Link>
						</cite>
					</blockquote>
				</aside>
			</main>
		</div>
	);
}
