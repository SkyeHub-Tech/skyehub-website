const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="16" rx="2" stroke="#4361EE" strokeWidth="1.5" />
        <path d="M9 22h10M14 20v2" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 10h12M8 14h8" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "System Audit",
    description:
      "A full diagnostic of your working environment. Every hidden dependency mapped, every bottleneck documented, every risk surfaced before we write a line of code.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#4361EE" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" stroke="#4361EE" strokeWidth="1.5" />
        <path d="M14 4V8M14 20v4M4 14h4M20 14h4" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Infrastructure",
    description:
      "We architect your cloud infrastructure for reliability. Automated CI/CD pipelines, scalable APIs and data layers that can handle your next 10× of growth without grinding to a halt.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 20L14 8l8 12" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 16h10" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Continuous Scale",
    description:
      "Once live, we don't disappear. Monitoring, performance tuning, feature iteration — we stay on to ensure your system's performance, uptime, and ability to scale stays ahead of your fastest-growing day.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-gray-950 py-20 relative overflow-hidden">
      {/* Background dimension watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-gray-800 font-black text-[12vw] tracking-tight select-none opacity-30">
          1440 × 635
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-16">
          How we build your stack.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center bg-gray-900">
                {step.icon}
              </div>
              <h3 className="text-white font-bold text-lg">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
