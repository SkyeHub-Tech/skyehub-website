import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" id="home">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="relative min-h-[650px] flex items-center py-16">
          {/* Content */}
          <div className="relative z-20 lg:max-w-[836px]">
            <h1 className="text-[52px] md:text-[72px] leading-[0.95] tracking-[-3px] font-black text-black">
              From Scratch
              <br />
              to Scale.
            </h1>

            <p className="mt-6 text-2xl leading-[1.7] font-light text-black">
              We partner with forward-thinking enterprises and fast-growth
              startups to engineer high-performance mobile applications,
              resilient codebases, and deploy proprietary software ecosystems
              turning complex technical debt into stable, scalable competitive
              advantages.
            </p>

            <button className="mt-6 h-[42px] px-5 rounded-full bg-[#1DA1F2] text-white text-sm font-medium flex items-center gap-2">
              Build With Us
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Illustration */}
          <div className="hidden lg:block absolute right-[-60px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] z-10">
            <Image
              src="/hero-img.png"
              alt="Hero Illustration"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Mobile Illustration */}
          <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] h-[380px] z-10">
            <Image
              src="/hero-img.png"
              alt="Hero Illustration"
              fill
              priority
              className="object-contain opacity-45"
            />
          </div>
        </div>
      </div>
    </section>
  );
}