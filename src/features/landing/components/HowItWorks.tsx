import { ScrollStack, ScrollStackItem } from "#/shared/components/ui";

const STEPS = [
  {
    index: "01",
    title: "Connect",
    body: "CareSphere learns the care needs, routines, preferences, and goals of the person receiving care.",
    visual: (
      <svg
        viewBox="0 0 64 64"
        className="h-16 w-16"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="18" cy="32" r="5" fill="#7C6CFF" opacity="0.9" />
        <circle
          cx="46"
          cy="32"
          r="9"
          fill="none"
          stroke="#8EE7D7"
          strokeOpacity="0.6"
          strokeWidth="1"
        />
        <circle cx="46" cy="32" r="2.5" fill="#8EE7D7" />
        <line
          x1="24"
          y1="32"
          x2="36"
          y2="32"
          stroke="#7C6CFF"
          strokeOpacity="0.5"
          strokeDasharray="3 3"
        />
      </svg>
    ),
  },
  {
    index: "02",
    title: "Understand",
    body: "AI continuously organizes signals, routines, and interactions into a living picture of care.",
    visual: (
      <svg
        viewBox="0 0 64 64"
        className="h-16 w-16"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="48" r="2.5" fill="#7C6CFF" opacity="0.7" />
        <circle cx="24" cy="20" r="2.5" fill="#8EE7D7" opacity="0.7" />
        <circle cx="40" cy="46" r="2.5" fill="#7C6CFF" opacity="0.7" />
        <line
          x1="18"
          y1="45"
          x2="42"
          y2="32"
          stroke="#7C6CFF"
          strokeOpacity="0.4"
        />
        <line
          x1="25"
          y1="23"
          x2="40"
          y2="31"
          stroke="#8EE7D7"
          strokeOpacity="0.4"
        />
        <line
          x1="41"
          y1="43"
          x2="43"
          y2="32"
          stroke="#7C6CFF"
          strokeOpacity="0.4"
        />
        <circle
          cx="46"
          cy="31"
          r="7"
          fill="none"
          stroke="#8EE7D7"
          strokeOpacity="0.7"
          strokeWidth="1.2"
        />
        <circle cx="46" cy="31" r="2.5" fill="#F5F5F7" />
      </svg>
    ),
  },
  {
    index: "03",
    title: "Respond",
    body: "Families and caregivers receive the right information, support, and next step at the right moment.",
    visual: (
      <svg
        viewBox="0 0 64 64"
        className="h-16 w-16"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="22"
          cy="32"
          r="8"
          fill="none"
          stroke="#7C6CFF"
          strokeOpacity="0.8"
          strokeWidth="1.2"
        />
        <circle cx="22" cy="32" r="2.5" fill="#7C6CFF" />
        <line
          x1="31"
          y1="32"
          x2="42"
          y2="20"
          stroke="#8EE7D7"
          strokeOpacity="0.5"
        />
        <line
          x1="32"
          y1="33"
          x2="44"
          y2="38"
          stroke="#8EE7D7"
          strokeOpacity="0.5"
        />
        <line
          x1="31"
          y1="34"
          x2="42"
          y2="46"
          stroke="#8EE7D7"
          strokeOpacity="0.5"
        />
        <circle cx="44" cy="18" r="2" fill="#8EE7D7" />
        <circle cx="46" cy="38" r="2" fill="#8EE7D7" />
        <circle cx="43" cy="48" r="2" fill="#8EE7D7" />
      </svg>
    ),
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative px-5  sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="cs-label">How it works</p>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#F5F5F7] sm:text-[36px]">
            One ecosystem.
            <br />
            Three simple connections.
          </h2>
        </div>

        <ScrollStack
          itemDistance={72}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.88}
          useWindowScroll
        >
          {STEPS.map((step) => (
            <ScrollStackItem
              key={step.index}
              itemClassName="flex items-center gap-5 rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.045)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-300 hover:border-[rgba(124,108,255,0.30)] sm:gap-8 sm:p-8"
            >
              <div className="grid shrink-0 place-items-center rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)]">
                {step.visual}
              </div>
              <div>
                <p className="cs-label text-[#686B7A]">{step.index}</p>
                <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.01em] text-[#F5F5F7]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#A6A8B5]">
                  {step.body}
                </p>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};
