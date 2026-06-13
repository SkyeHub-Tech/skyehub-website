export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28 border-t border-gray-100">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="watermark-text text-gray-100 font-black select-none"
          style={{
            fontSize: "clamp(80px, 18vw, 220px)",
            letterSpacing: "-0.04em",
            color: "#F9F9F9",
            WebkitTextStroke: "1px #E5E7EB",
          }}>
          skyehub
        </span>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight mb-6">
          Ready to stabilize<br />your infrastructure?
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Whether you&apos;re building a greenfield platform or need to rescue a growing team, to
          replace a mission-critical system, Skyehub provides the specialised execution you&apos;ve
          been looking for. Let&apos;s scope your tech stack.
        </p>

        {/* Email form */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <input
            type="email"
            placeholder="kola@skyehub.dev"
            className="border border-gray-200 rounded-full px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100 w-64"
          />
          <button className="bg-brand-blue text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Send →
          </button>
        </div>
      </div>

      {/* Footer bar */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-center justify-between border-t border-gray-100">
        <p className="text-xs text-gray-400">© 2026 SKYEHUB AI</p>
        <p className="text-xs text-gray-400 tracking-widest uppercase">Built by the Edge</p>
      </div>
    </section>
  );
}
