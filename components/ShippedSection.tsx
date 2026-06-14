'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

const projects = [
  {
    category: 'MOBILE APP',
    name: 'Helix Health',
    description:
      'Designed and implemented a React Native mobile application for chronic illness tracking, integrating EHR APIs and real-time health analytics with offline-first architecture.',
    color: 'bg-gray-900',
    accent: 'bg-blue-600',
    visual: <img src='/phone.png' alt='phone' />
  },
  {
    category: 'WEB APPLICATION',
    name: 'Northwind Bank',
    description:
      'Delivered a customer-facing portal and internal dashboard for a challenger bank. The platform provides real-time transaction visibility and automated compliance reporting.',
    color: 'bg-blue-600',
    accent: 'bg-blue-400',
    visual: <img src='/cloud.png' alt='cloud' />
  },
  {
    category: 'YOUR PROJECT',
    name: 'Lumen Analytics',
    description:
      'Custom analytics dashboard giving non-technical teams live access to their KPIs. Built in Next.js with a data pipeline that processes millions of events per day.',
    color: 'bg-purple-700',
    accent: 'bg-purple-400',
    visual: <img src='/phone.png' alt='phone' />
  },
  {
    category: 'MOBILE APP',
    name: 'TrackFlow',
    description:
      'End-to-end supply chain tracking application with barcode scanning, GPS logistics, and real-time fleet visibility. Deployed across 12 distribution centres.',
    color: 'bg-emerald-700',
    accent: 'bg-emerald-400',
    visual: <img src='/cloud.png' alt='cloud' />
  }
]

export default function ShippedSection () {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className='bg-white py-20 border-t border-gray-100'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header row */}
        <div className='flex items-center justify-between mb-10'>
          <h2 className='text-3xl md:text-4xl font-black tracking-tight text-gray-900'>
            What We&apos;ve Shipped.
          </h2>
          <div className='flex gap-2'>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className='w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors'
              aria-label='Previous'
            >
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M10 4L6 8L10 12'
                  stroke='#374151'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className='w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors'
              aria-label='Next'
            >
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M6 4L10 8L6 12'
                  stroke='#374151'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
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
            1024: { slidesPerView: 3.1 }
          }}
          className='shipped-swiper'
          onSwiper={swiper => {
            swiperRef.current = swiper
          }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className={`bg-white rounded-2xl overflow-hidden h-full`}>
                {/* Visual area */}
                <div className='h-[213px]'>{project.visual}</div>
                {/* Text content */}
                <div className='bg-[#FBFBFB] border -mt-4 lg:mt-0 border-[#D9D9D9] px-5 py-5'>
                  <p className='text-xs font-semibold text-white/50 uppercase tracking-widest mb-1'>
                    {project.category}
                  </p>
                  <h3 className='text-black font-bold text-lg mb-2'>
                    {project.name}
                  </h3>
                  <p className='text-black text-xs leading-relaxed'>
                    {project.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
