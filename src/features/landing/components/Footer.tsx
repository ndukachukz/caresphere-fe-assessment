const FOOTER_LINKS = [
	{ label: "How it works", href: "#how-it-works" },
	{ label: "Ecosystem", href: "#ecosystem" },
	{ label: "Experience", href: "#experience" },
];

export const Footer = () => {
	return (
		<footer className="border-t border-white/10 px-5 py-10">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
				<div className="flex items-center gap-2.5">
					<span className="relative grid h-7 w-7 place-items-center rounded-full border border-[rgba(124,108,255,0.35)] bg-[rgba(124,108,255,0.12)]">
						<span className="cs-node h-1.5 w-1.5 rounded-full bg-[#7C6CFF] shadow-[0_0_8px_rgba(124,108,255,0.9)]" />
					</span>
					<span className="text-[14px] font-semibold tracking-tight text-[#F5F5F7]">
						CareSphere
					</span>
				</div>

				<p className="text-[12px] text-[#8E91A0]">
					A living constellation of care.
				</p>

				<nav className="flex items-center gap-5" aria-label="Footer">
					{FOOTER_LINKS.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="text-[12px] text-[#A6A8B5] transition-colors duration-200 hover:text-[#F5F5F7]"
						>
							{link.label}
						</a>
					))}
				</nav>
			</div>
		</footer>
	);
};
