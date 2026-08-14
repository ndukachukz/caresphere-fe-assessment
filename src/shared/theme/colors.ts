export const CARESPHERE_COLORS = {
	bg: "#05060A",
	bgAlt: "#0A0C14",
	cosmicTop: "#17122F",
	cosmicMid: "#0A1026",
	glow: "#3A2B72",
	accent: "#7C6CFF",
	accentAlt: "#8EE7D7",
	warm: "#FFB98A",
	text: "#F5F5F7",
	textSecondary: "#A6A8B5",
	textMuted: "#686B7A",
	border: "rgba(255,255,255,0.10)",
	borderGlow: "rgba(124,108,255,0.30)",
	glass: "rgba(255,255,255,0.045)",
} as const;

export const CARESPHERE_FLUID_COLORS: string[] = [
	CARESPHERE_COLORS.accent,
	CARESPHERE_COLORS.accentAlt,
	CARESPHERE_COLORS.glow,
	CARESPHERE_COLORS.warm,
];
