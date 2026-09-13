'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

const projects = [
  {
    category: 'FINTECH PLATFORM',
    name: 'Credence',
    description:
      'An application that connects traders with financiers for their businesses, streamlining trade financing and deal management.',
    color: 'bg-emerald-900',
    accent: 'bg-emerald-500',
    links: [
      { label: 'Merchant App', url: 'https://merchant.credence54.com' },
      { label: 'Financier App', url: 'https://financier.credence54.com' }
    ],
    visual: (
      <div className='w-full h-full bg-[#1a3830] flex items-center justify-center p-0 relative overflow-hidden group'>
        <img
          src='/credence_mockup.png'
          alt='Credence Trade Finance Platform'
          className='w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none' />
      </div>
    )
  },
  {
    category: 'MOBILE APPLICATION',
    name: 'Handees',
    description:
      'Delivered a mobile app designed to seamlessly connect users with skilled, vetted artisans in their areas for all everyday service needs.',
    color: 'bg-blue-600',
    accent: 'bg-blue-400',
    visual: (
      <div className='w-full h-full bg-gray-950 flex items-end justify-center px-4 pt-8'>
        <img src='/handees-mockup-cropped.png' alt='Handees' className='w-full h-full object-contain object-bottom' />
      </div>
    )
  },
  {
    category: 'YOUR PROJECT',
    name: 'Lumen Analytics',
    description:
      'Custom analytics dashboard giving non-technical teams live access to their KPIs. Built in Next.js with a data pipeline that processes millions of events per day.',
    color: 'bg-purple-700',
    accent: 'bg-purple-400',
    visual: <img src='/phone.png' alt='phone' className='w-full h-full object-cover block' />
  },
  {
    category: 'MOBILE APP',
    name: 'TrackFlow',
    description:
      'End-to-end supply chain tracking application with barcode scanning, GPS logistics, and real-time fleet visibility. Deployed across 12 distribution centres.',
    color: 'bg-emerald-700',
    accent: 'bg-emerald-400',
    visual: <img src='/cloud.png' alt='cloud' className='w-full h-full object-cover block' />
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
          className='shipped-swiper [&_.swiper-wrapper]:items-stretch'
          onSwiper={swiper => {
            swiperRef.current = swiper
          }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className={`bg-white rounded-2xl overflow-hidden h-full flex flex-col`}>
                {/* Visual area */}
                <div className='h-[213px] w-full shrink-0'>{project.visual}</div>
                {/* Text content */}
                <div className='bg-[#FBFBFB] border-x border-b border-[#D9D9D9] px-5 py-5 flex-grow'>
                  <p className='text-xs font-bold text-primary uppercase tracking-widest mb-1'>
                    {project.category}
                  </p>
                  <h3 className='text-black font-bold text-lg mb-2'>
                    {project.name}
                  </h3>
                  <p className='text-black text-xs leading-relaxed'>
                    {project.description}
                  </p>
                  {'links' in project && project.links && (
                    <div className='flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200/60'>
                      {project.links.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
                          href={link.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50/80 hover:bg-emerald-100 hover:text-emerald-900 border border-emerald-300/60 rounded-lg px-2.5 py-1 transition-all shadow-xs'
                        >
                          <span>{link.label}</span>
                          <svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                            <path d='M7 17L17 7M17 7H7M17 7V17' />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
