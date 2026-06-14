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
      className='relative overflow-hidden bg-[#F7F7F7] py-32 scroll-mt-20'
    >
      {/* Watermark */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden'>
        <span
          className='font-black select-none'
          style={{
            fontSize: 'clamp(180px, 26vw, 420px)',
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

        <p className='mt-8 max-w-[640px] mx-auto text-[18px] leading-[1.6] text-[#9CA3AF]'>
          Whether you're building a greenfield platform or need an elite
          engineering team to rescue a mission-critical system, SKYEHUB provides
          the operational execution required to win. Let's secure your tech
          stack.
        </p>

        {/* Email CTA */}
        <div className='mt-12 flex justify-center'>
          <div className='flex items-center bg-white rounded-full border border-[#DADADA] p-[4px] shadow-sm'>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='flex-1 px-5 py-3 text-sm text-[#777] bg-transparent outline-none'
            />

            <button
              onClick={handleSendEmail}
              className='h-[44px] px-7 rounded-full bg-[#1DA1F2] text-white text-sm font-medium hover:bg-[#0d8de0] transition-all'
            >
              Send →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
