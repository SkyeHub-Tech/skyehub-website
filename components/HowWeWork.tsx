const steps = [
  {
    icon: (
      <img src="/systemAudit.svg" alt="system-audit" />
    ),
    title: "System Audit",
    description:
      "A full diagnostic of your working environment. Every hidden dependency mapped, every bottleneck documented, every risk surfaced before we write a line of code.",
  },
  {
    icon: (
     <img src="/infrastructure.svg" alt="infrastructure" />
    ),
    title: "Infrastructure",
    description:
      "We architect your cloud infrastructure for reliability. Automated CI/CD pipelines, scalable APIs and data layers that can handle your next 10× of growth without grinding to a halt.",
  },
  {
    icon: (
      <img src="/scaleUp.svg" alt="scale-up" />
    ),
    title: "Continuous Scale",
    description:
      "Once live, we don't disappear. Monitoring, performance tuning, feature iteration — we stay on to ensure your system's performance, uptime, and ability to scale stays ahead of your fastest-growing day.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-gray-950 py-20 relative overflow-hidden" id="work">
      {/* Background dimension watermark
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-gray-800 font-black text-[12vw] tracking-tight select-none opacity-30">
          1440 × 635
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl text-center font-black tracking-tight text-white mb-16">
          How we engineer the stack.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              {/* Icon circle */}
              <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white mx-auto">
                {step.icon}
              </div>
              <h3 className="text-white font-bold text-lg text-center">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
