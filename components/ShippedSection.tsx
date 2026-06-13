"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const projects = [
  {
    category: "MOBILE APP",
    name: "Helix Health",
    description:
      "Designed and implemented a React Native mobile application for chronic illness tracking, integrating EHR APIs and real-time health analytics with offline-first architecture.",
    color: "bg-gray-900",
    accent: "bg-blue-600",
    visual: <HelixVisual />,
  },
  {
    category: "WEB APPLICATION",
    name: "Northwind Bank",
    description:
      "Delivered a customer-facing portal and internal dashboard for a challenger bank. The platform provides real-time transaction visibility and automated compliance reporting.",
    color: "bg-blue-600",
    accent: "bg-blue-400",
    visual: <BankVisual />,
  },
  {
    category: "YOUR PROJECT",
    name: "Lumen Analytics",
    description:
      "Custom analytics dashboard giving non-technical teams live access to their KPIs. Built in Next.js with a data pipeline that processes millions of events per day.",
    color: "bg-purple-700",
    accent: "bg-purple-400",
    visual: <LumenVisual />,
  },
  {
    category: "MOBILE APP",
    name: "TrackFlow",
    description:
      "End-to-end supply chain tracking application with barcode scanning, GPS logistics, and real-time fleet visibility. Deployed across 12 distribution centres.",
    color: "bg-emerald-700",
    accent: "bg-emerald-400",
    visual: <TrackVisual />,
  },
];

function HelixVisual() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-32 bg-gray-800 rounded-3xl border-2 border-gray-600 flex flex-col items-center pt-2 pb-2">
          <div className="w-6 h-1 bg-gray-600 rounded mb-2" />
          <div className="flex-1 w-full px-2 space-y-1">
            <div className="h-1.5 bg-blue-400 rounded w-full" />
            <div className="h-1.5 bg-gray-600 rounded w-4/5" />
            <div className="h-1.5 bg-gray-600 rounded w-3/5" />
            <div className="h-4 bg-blue-900 rounded mt-2" />
          </div>
        </div>
        <div className="absolute -right-8 top-4 w-16 h-24 bg-gray-700 rounded-2xl border border-gray-600 flex flex-col items-center pt-1.5 pb-1.5">
          <div className="w-4 h-0.5 bg-gray-500 rounded mb-1" />
          <div className="flex-1 w-full px-1.5 space-y-1">
            <div className="h-1 bg-blue-400 rounded" />
            <div className="h-1 bg-gray-500 rounded w-4/5" />
            <div className="h-3 bg-blue-800 rounded mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BankVisual() {
  return (
    <div className="w-full h-40 flex items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-blue-400/30 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-blue-400/40 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M4 20c0-8 8-16 12-4 4-12 12-4 12 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="16" cy="20" rx="12" ry="4" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        {/* orbit dots */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-50"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${deg}deg) translateX(44px) translateY(-50%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function LumenVisual() {
  return (
    <div className="w-full h-40 flex items-center justify-center gap-2 px-4">
      {[
        ["#9F7AEA", "#7C3AED"],
        ["#F59E0B", "#D97706"],
        ["#EF4444", "#DC2626"],
        ["#10B981", "#059669"],
        ["#3B82F6", "#2563EB"],
        ["#EC4899", "#DB2777"],
      ].map(([light, dark], i) => (
        <div
          key={i}
          className="flex-1 rounded-xl aspect-square flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${light}, ${dark})` }}
        >
          <div className="w-4 h-4 bg-white/20 rounded" />
        </div>
      ))}
    </div>
  );
}

function TrackVisual() {
  return (
    <div className="w-full h-40 flex items-center justify-center">
      <div className="relative w-28 h-28">
        <div className="absolute inset-0 border-2 border-emerald-400/40 rounded-full" />
        <div className="absolute inset-4 border-2 border-emerald-400/60 rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 16h16M16 8v16" stroke="#34D399" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="16" r="4" fill="#34D399" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ShippedSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header row */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
            What We&apos;ve Shipped.
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8L10 12" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.1 },
          }}
          className="shipped-swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className={`${project.color} rounded-2xl overflow-hidden h-full`}>
                {/* Visual area */}
                <div className="p-4">{project.visual}</div>
                {/* Text content */}
                <div className="bg-white/5 backdrop-blur-sm px-5 py-5">
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-2">{project.name}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
