const HIGHLIGHTS = [
	"Today's care rhythm",
	"AI-generated insight",
	"Connection status",
	"Care team activity",
	"Upcoming moments",
];

const MOMENTS = [
	{ label: "Morning check-in", time: "9:00" },
	{ label: "Medication reminder", time: "12:30" },
	{ label: "Family video call", time: "18:00" },
];

export const ExperienceShowcase = () => {
	return (
		<section
			id="experience"
			className="relative scroll-mt-24 px-5 py-[88px] sm:py-32"
		>
			<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
				<div>
					<p className="cs-label">Inside CareSphere</p>
					<h2 className="mt-4 text-[30px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#F5F5F7] sm:text-[36px]">
						A new interface
						<br />
						for care.
					</h2>
					<p className="mt-5 max-w-md text-[15px] leading-[1.6] text-[#A6A8B5]">
						Everything important, understood at a glance — without ever feeling
						like a dashboard.
					</p>

					<ul className="mt-8 space-y-3">
						{HIGHLIGHTS.map((item) => (
							<li
								key={item}
								className="flex items-center gap-3 text-[14px] text-[#A6A8B5]"
							>
								<span className="cs-node h-1.5 w-1.5 rounded-full bg-[#8EE7D7] shadow-[0_0_8px_rgba(142,231,215,0.8)]" />
								{item}
							</li>
						))}
					</ul>
				</div>

				<div className="cs-glass relative overflow-hidden rounded-[28px] p-5 sm:p-6">
					<div
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(124,108,255,0.12),transparent_70%)]"
						aria-hidden="true"
					/>

					<div className="relative flex items-center justify-between">
						<div>
							<p className="text-[13px] font-semibold text-[#F5F5F7]">
								Today&apos;s care rhythm
							</p>
							<p className="mt-0.5 text-[11px] text-[#686B7A]">
								Thursday · updated just now
							</p>
						</div>
						<span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(142,231,215,0.30)] bg-[rgba(142,231,215,0.08)] px-2.5 py-1">
							<span className="cs-node h-1.5 w-1.5 rounded-full bg-[#8EE7D7] shadow-[0_0_8px_rgba(142,231,215,0.9)]" />
							<span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8EE7D7]">
								Connected
							</span>
						</span>
					</div>

					<div className="relative mt-5 rounded-2xl border border-[rgba(124,108,255,0.30)] bg-[rgba(124,108,255,0.08)] p-4">
						<p className="cs-label text-[#7C6CFF]">AI insight</p>
						<p className="mt-2 text-[13px] leading-[1.5] text-[#F5F5F7]">
							&ldquo;Mom&apos;s energy peaks mid-morning. The care rhythm has
							been gently shifted to match.&rdquo;
						</p>
					</div>

					<div className="relative mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
						<span className="flex -space-x-1.5" aria-hidden="true">
							<span className="h-6 w-6 rounded-full border border-[#05060A] bg-[#7C6CFF] opacity-80" />
							<span className="h-6 w-6 rounded-full border border-[#05060A] bg-[#8EE7D7] opacity-80" />
							<span className="h-6 w-6 rounded-full border border-[#05060A] bg-[#FFB98A] opacity-80" />
						</span>
						<div>
							<p className="text-[13px] font-medium text-[#F5F5F7]">
								Care team online
							</p>
							<p className="text-[11px] text-[#686B7A]">
								Family, caregiver &amp; nurse connected
							</p>
						</div>
					</div>

					<div className="relative mt-4 space-y-3">
						{MOMENTS.map((moment) => (
							<div
								key={moment.label}
								className="flex items-center justify-between rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3"
							>
								<span className="flex items-center gap-3 text-[13px] text-[#A6A8B5]">
									<span className="cs-node h-1.5 w-1.5 rounded-full bg-[#7C6CFF] shadow-[0_0_8px_rgba(124,108,255,0.8)]" />
									{moment.label}
								</span>
								<span className="text-[11px] tabular-nums text-[#686B7A]">
									{moment.time}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
