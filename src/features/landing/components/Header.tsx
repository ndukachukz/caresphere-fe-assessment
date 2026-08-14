import { useEffect, useState } from "react";

const NAV_LINKS = [
	{ label: "How it works", href: "#how-it-works" },
	{ label: "Ecosystem", href: "#ecosystem" },
	{ label: "Experience", href: "#experience" },
];

export const Header = () => {
	const [expanded, setExpanded] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		const onHashChange = () => setExpanded(false);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("hashchange", onHashChange);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("hashchange", onHashChange);
		};
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
				scrolled || expanded
					? "border-b border-white/10 bg-[rgba(10,12,20,0.55)] backdrop-blur-[20px]"
					: "border-b border-transparent bg-transparent"
			}`}
		>
			<div
				className={`mx-auto flex w-full max-w-6xl items-center justify-between px-5 transition-all duration-500 ${
					scrolled ? "py-3" : "py-4"
				}`}
			>
				<a
					href="#hero"
					aria-label="CareSphere home"
					className="flex items-center gap-2.5"
				>
					<span className="relative grid h-9 w-9 place-items-center rounded-full border border-[rgba(124,108,255,0.35)] bg-[rgba(124,108,255,0.12)]">
						<span className="cs-node h-2.5 w-2.5 rounded-full bg-[#7C6CFF] shadow-[0_0_12px_rgba(124,108,255,0.9)]" />
						<span
							aria-hidden="true"
							className="cs-orbit-slow absolute inset-0 rounded-full border border-[#8EE7D7]/40"
						/>
					</span>
					<span className="text-[15px] font-semibold tracking-tight text-[#F5F5F7]">
						CareSphere
					</span>
				</a>

				<nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
					{NAV_LINKS.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="text-[13px] font-medium text-[#A6A8B5] transition-colors duration-200 hover:text-[#F5F5F7]"
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="hidden md:block">
					<a href="#care-journey" className="cs-btn-primary cs-btn-sm">
						Start your care journey
					</a>
				</div>

				<button
					type="button"
					onClick={() => setExpanded((v) => !v)}
					aria-expanded={expanded}
					aria-controls="cs-mobile-menu"
					aria-label={
						expanded ? "Close navigation menu" : "Open navigation menu"
					}
					className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[rgba(255,255,255,0.045)] text-[#F5F5F7] backdrop-blur-md transition-colors duration-200 hover:border-white/25 md:hidden"
				>
					{!expanded ? (
						<svg
							className="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M4 8h16M4 16h16"
							/>
						</svg>
					) : (
						<svg
							className="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					)}
				</button>
			</div>

			{expanded && (
				<nav
					id="cs-mobile-menu"
					className="border-t border-white/10 bg-[rgba(10,12,20,0.55)] backdrop-blur-[20px] md:hidden"
					aria-label="Mobile"
				>
					<div className="flex flex-col gap-1 px-5 py-6">
						{NAV_LINKS.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="rounded-2xl px-4 py-3 text-[15px] text-[#A6A8B5] transition-colors duration-200 hover:bg-white/5 hover:text-[#F5F5F7]"
							>
								{link.label}
							</a>
						))}
						<a href="#care-journey" className="cs-btn-primary mt-4 w-full">
							Start your care journey
						</a>
					</div>
				</nav>
			)}
		</header>
	);
};
