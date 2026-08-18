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
			<a href="#main" className="cs-skip-link">
				Skip to content
			</a>
			<Header />
			<main id="main" tabIndex={-1}>
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
