import { useConvexAuth } from "@convex-dev/auth/react";
import { useQuery } from "convex/react";
import { api } from "~convex/_generated/api";

export const useCurrentUser = () => {
	const { isAuthenticated, isLoading } = useConvexAuth();

	const user = useQuery(api.auth.currentUser);

	return {
		isLoading: isLoading || (isAuthenticated && user === null),
		isAuthenticated: isAuthenticated && user !== null,
		user: { ...user },
	};
};
