const BENEFITS = [
	{
		title: "Always connected",
		body: "Everyone stays aligned around the person who matters.",
	},
	{
		title: "AI that understands",
		body: "Technology organizes complexity without making care feel complicated.",
	},
	{
		title: "More human",
		body: "Less coordination. Less uncertainty. More meaningful moments.",
	},
];

export const CareEcosystem = () => {
	return (
		<section
			id="ecosystem"
			className="relative scroll-mt-24 overflow-hidden px-5 py-[88px] sm:py-32"
		>
			<div
				className="cs-glow-field absolute inset-0 opacity-70"
				aria-hidden="true"
			/>
			<div
				className="absolute left-1/2 top-1/2 aspect-square h-[80vw] max-h-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.22),rgba(58,43,114,0.12)_45%,transparent_70%)] blur-3xl"
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-6xl text-center">
				<p className="cs-label">Why CareSphere</p>
				<h2 className="mx-auto mt-4 max-w-xl text-[30px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#F5F5F7] sm:text-[36px]">
					Care that sees
					<br />
					the whole picture.
				</h2>
				<p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.6] text-[#A6A8B5]">
					Instead of treating care as disconnected tasks, CareSphere creates one
					intelligent layer connecting people, routines, caregivers, and family.
				</p>

				<div className="relative mx-auto mt-16 max-w-3xl">
					<div
						className="absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full border border-[rgba(124,108,255,0.30)] bg-[radial-gradient(circle_at_35%_30%,rgba(142,231,215,0.35),rgba(124,108,255,0.18)_50%,rgba(58,43,114,0.25))] shadow-[0_0_60px_rgba(124,108,255,0.35)] sm:top-1/2 sm:h-64 sm:w-64 sm:-translate-y-1/2"
						aria-hidden="true"
					/>
					<div className="cs-orbit-slow absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full border border-white/10 sm:top-1/2 sm:h-80 sm:w-80 sm:-translate-y-1/2" />

					<div className="relative z-10 grid gap-4 pt-56 sm:grid-cols-3 sm:gap-5 sm:pt-0">
						{BENEFITS.map((benefit) => (
							<article
								key={benefit.title}
								className="cs-glass rounded-[20px] p-6 text-left transition-colors duration-300 hover:border-[rgba(124,108,255,0.30)] sm:mt-24 sm:first:mt-0 sm:last:mt-48"
							>
								<span className="cs-node block h-2 w-2 rounded-full bg-[#7C6CFF] shadow-[0_0_12px_rgba(124,108,255,0.9)]" />
								<h3 className="mt-4 text-[17px] font-semibold tracking-[-0.01em] text-[#F5F5F7]">
									{benefit.title}
								</h3>
								<p className="mt-2 text-[14px] leading-[1.6] text-[#A6A8B5]">
									{benefit.body}
								</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
