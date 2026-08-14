import { Ferrofluid } from "#/shared/components/ui";

const ORBIT_NODES = [
	{ label: "Person receiving care", top: "6%", left: "70%", delay: "0s" },
	{ label: "Family", top: "16%", left: "20%", delay: "0.8s" },
	{ label: "Caregiver", top: "50%", left: "4%", delay: "1.6s" },
	{ label: "AI", top: "58%", left: "88%", delay: "2.4s" },
	{ label: "Health signals", top: "90%", left: "44%", delay: "3.2s" },
];

export const Hero = () => {
	return (
		<section
			id="hero"
			className="relative flex min-h-svh items-center justify-center overflow-hidden pb-16 pt-28"
		>
			<div className="cs-cosmic-bg absolute inset-0" aria-hidden="true" />
			<div className="cs-glow-field absolute inset-0" aria-hidden="true" />

			<div
				className="absolute left-1/2 top-[42%] aspect-square w-[min(92vw,480px)] -translate-x-1/2 -translate-y-1/2"
				aria-hidden="true"
			>
				<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(124,108,255,0.28),rgba(58,43,114,0.18)_45%,transparent_70%)] blur-2xl" />

				<div className="absolute inset-4 overflow-hidden rounded-full border border-[rgba(124,108,255,0.30)]">
					<Ferrofluid
						speed={0.4}
						scale={1.5}
						turbulence={0.9}
						fluidity={0.1}
						rimWidth={0.2}
						sharpness={2.2}
						shimmer={1.4}
						glow={1.8}
						flowDirection="down"
						opacity={0.6}
					/>
				</div>

				<div className="absolute inset-4 rounded-full shadow-[inset_0_0_80px_rgba(5,6,10,0.55)]" />
				<div className="absolute inset-0 rounded-full border border-white/10" />
				<div className="cs-orbit-slow absolute -inset-6 rounded-full border border-white/10" />

				{ORBIT_NODES.map((node) => (
					<span
						key={node.label}
						className="cs-node absolute"
						style={{
							top: node.top,
							left: node.left,
							animationDelay: node.delay,
						}}
					>
						<span className="block h-2 w-2 rounded-full bg-[#8EE7D7] shadow-[0_0_14px_rgba(142,231,215,0.9)]" />
						<span className="sr-only">{node.label}</span>
					</span>
				))}
			</div>

			<div className="relative z-10 mx-auto w-full max-w-6xl px-5 text-center">
				<div className="cs-reveal inline-flex items-center gap-2.5 rounded-full border border-[rgba(124,108,255,0.30)] bg-[rgba(124,108,255,0.08)] px-4 py-1.5 backdrop-blur-md">
					<span className="cs-node h-1.5 w-1.5 rounded-full bg-[#8EE7D7] shadow-[0_0_10px_rgba(142,231,215,1)]" />
					<span className="cs-label text-[#A6A8B5]">
						AI active · Care team online
					</span>
				</div>

				<h1
					className="cs-reveal mx-auto mt-8 max-w-3xl text-[44px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#F5F5F7] sm:text-[56px]"
					style={{ animationDelay: "0.05s" }}
				>
					Care,
					<br />
					<span className="bg-gradient-to-r from-[#7C6CFF] via-[#8EE7D7] to-[#7C6CFF] bg-clip-text text-transparent">
						connected
					</span>
					<br />
					intelligently.
				</h1>

				<p
					className="cs-reveal mx-auto mt-6 max-w-md text-[15px] leading-[1.6] text-[#A6A8B5] sm:mt-8"
					style={{ animationDelay: "0.1s" }}
				>
					One intelligent layer around the person you love — connecting family,
					caregivers, routines, and AI into a single living picture of care.
				</p>

				<div
					className="cs-reveal mt-10 flex flex-wrap items-center justify-center gap-4"
					style={{ animationDelay: "0.15s" }}
				>
					<a href="#care-journey" className="cs-btn-primary">
						Explore CareSphere
					</a>
					<a href="#how-it-works" className="cs-btn-secondary">
						See how care works
					</a>
				</div>

				<p
					className="cs-reveal mt-6 text-[13px] text-[#686B7A]"
					style={{ animationDelay: "0.2s" }}
				>
					The future of care isn&apos;t more technology — it&apos;s technology
					that makes care feel more connected.
				</p>
			</div>
		</section>
	);
};
