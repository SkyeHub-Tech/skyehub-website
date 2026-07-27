'use client'

import { useState } from 'react'

export default function CtaSection () {
  const [email, setEmail] = useState('')

  const handleSendEmail = () => {
    const email = 'hello@skyehub.tech'
    const subject = encodeURIComponent(
      'Infrastructure & Engineering Consultation'
    )

    const body = encodeURIComponent(
      `Hi Skyehub,

      I'd like to discuss a project with your team.

      Regards`
    )

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <section
      id='contact'
      className='relative bg-white py-42 scroll-mt-32 border-none!'
    >
      {/* Watermark */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden'>
        <span
          className='font-black select-none max-w-full text-center truncate md:overflow-visible px-4 md:px-0'
          style={{
            fontSize: 'clamp(80px, 22vw, 420px)',
            lineHeight: 1,
            color: '#EFEFEF',
            letterSpacing: '-0.08em'
          }}
        >
          skyehub
        </span>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-6 text-center'>
        <h2 className='text-[42px] md:text-[64px] leading-[0.95] font-black tracking-[-3px] text-black'>
          Ready to stabilize
          <br />
          your infrastructure?
        </h2>

        <p className='mt-8 max-w-160 mx-auto text-[18px] leading-[1.6] text-[#9CA3AF]'>
          Whether you&apos;re building a greenfield platform or need an elite
          engineering team to rescue a mission-critical system, SKYEHUB provides
          the operational execution required to win. Let&apos;s secure your tech
          stack.
        </p>

        {/* Email CTA */}
        <div className='mt-12 flex justify-center'>
          <div className='flex items-center bg-white rounded-full border border-[#DADADA] p-[4px] shadow-sm'>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='hello@skyehub.tech'
              className='flex-1 px-5 py-3 text-sm text-[#777] bg-transparent outline-none'
            />

            <button
              onClick={handleSendEmail}
              className='h-[44px] px-7 rounded-full bg-[#1DA1F2] text-white text-sm font-medium hover:bg-[#0d8de0] transition-all'
            >
              Send <span className="hidden sm:inline">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
