export const FinalCTA = () => {
	return (
		<section
			id="care-journey"
			className="relative scroll-mt-24 overflow-hidden px-5 py-[120px] text-center sm:py-40"
		>
			<div className="cs-cosmic-bg absolute inset-0" aria-hidden="true" />
			<div
				className="absolute left-1/2 top-1/2 aspect-square h-[70vw] max-h-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(124,108,255,0.35),rgba(58,43,114,0.20)_45%,transparent_72%)] blur-2xl"
				aria-hidden="true"
			/>
			<div
				className="cs-orbit-slow absolute left-1/2 top-1/2 aspect-square h-[46vw] max-h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(124,108,255,0.25)]"
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto max-w-xl">
				<h2 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#F5F5F7] sm:text-[40px]">
					Care is becoming connected.
				</h2>
				<p className="mx-auto mt-5 max-w-sm text-[15px] leading-[1.6] text-[#A6A8B5]">
					Meet the intelligence behind a more human way to care.
				</p>

				<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
					<a href="#hero" className="cs-btn-primary">
						Start your care journey
					</a>
					<a href="#how-it-works" className="cs-btn-secondary">
						Learn more
					</a>
				</div>
			</div>
		</section>
	);
};
