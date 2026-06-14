export default function CoreServices() {
  return (
    <section className="bg-[#F9F9F9] py-20 border-t border-gray-100" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-black mb-12">
          Core Services.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border border-gray-200 bg-white rounded-2xl p-8 hover:border-blue-200 hover:shadow-sm transition-all">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              01 / GREENFIELD BUILDS
            </p>
            <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
              New products,<br />clean architecture.
            </h3>
            <p className="text-base font-normal text-grey leading-relaxed">
              We have built mobile applications from the ground up for clients across fintech, health tech, and enterprise. Every product starts with a clean technical foundation — without the technical debt that often comes from rapid iteration.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-blue-200 bg-[#00A6FB12] rounded-2xl p-8 hover:shadow-sm transition-all">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              02 / PROJECT TAKEOVERS
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
              Rescue legacy<br />systems.
            </h3>
            <p className="text-base font-normal text-grey leading-relaxed">
              We take the reins on struggling codebases. We diagnose what's broken, what's inefficient, and what can be salvaged — then rebuild transparently, without disrupting your production environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
