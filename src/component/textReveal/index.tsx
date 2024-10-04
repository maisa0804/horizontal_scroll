'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type'

const TextReveal = () => {

  const pRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {

    const text = new SplitType('p.our-text', { types: 'chars' })
    const chars = text.chars
    if (chars)
      chars.forEach(char => {
        char.classList.add('chars')
      })

    gsap.from(chars, {
      yPercent: 130,
      stagger: 0.1,
      ease: 'back.out',
      duration: 0.5
    })
  }, [])

  return (
    <p className='our-text leading-0.8' ref={pRef}>What's happening in Japan</p>
  )
}

export default TextReveal
