import {
	CareEcosystem,
	ExperienceShowcase,
	FinalCTA,
	Footer,
	Header,
	Hero,
	HowItWorks,
} from "./components";

export const LandingScreen = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<HowItWorks />
				<CareEcosystem />
				<ExperienceShowcase />
				<FinalCTA />
			</main>
			<Footer />
		</>
	);
};
