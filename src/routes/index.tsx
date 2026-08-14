import { createFileRoute } from "@tanstack/react-router";
import { LandingScreen } from "#/features";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return <LandingScreen />;
}
