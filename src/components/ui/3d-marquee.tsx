'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ThreeDMarqueeProps {
  images?: string[]
  className?: string
}

const defaultImages = [
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/becane.webp',
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/chdartmaker--1-.webp',
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/www-instituteofhealth-com-.webp',
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/wadeandleta-com-.webp',
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/felixpeault.webp',
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/1820productions.webp',
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/emilie.webp',
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/telhaclarke.webp',
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/jonasreymondin.webp',
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/www-anima-ai.webp',
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/dulcedo-com-.webp',
  'https://pyengguphcmeqlelpozr.supabase.co/storage/v1/object/public/images/15thplus.webp',
]

const ThreeDMarquee = ({
  images = defaultImages,
  className,
}: ThreeDMarqueeProps) => {
  // Shuffle and duplicate images to ensure the grid is tall enough and random
  const shuffledImages = React.useMemo(() => {
    // Use images once to avoid massive GPU lag and DOM node bloat on load
    const arr = [...images];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [images])
  
  const chunkSize = Math.ceil(shuffledImages.length / 3)
  const chunks = Array.from({ length: 3 }, (_, colIndex) => {
    const start = colIndex * chunkSize
    return shuffledImages.slice(start, start + chunkSize)
  })

  return (
    <div
      className={cn(
        'mx-auto block h-[35rem] w-full overflow-hidden rounded-md max-xl:h-[30rem] max-sm:h-[25rem]',
        className
      )}
    >
      <div className='flex w-full h-full items-center justify-center'>
        <div className='aspect-square w-[45rem] h-[45rem] shrink-0 scale-[1.35] max-xl:w-full max-xl:h-full max-xl:scale-110 max-sm:scale-[2.0]'>
          <div
            style={{ transform: 'rotateX(45deg) rotateY(0deg) rotateZ(45deg)' }}
            className='relative top-0 right-[-55%] grid w-full h-full origin-top-left grid-cols-3 gap-5 transform-3d max-xl:-top-[7.5rem] max-xl:right-[-45%] max-sm:top-[15%] max-sm:right-[-35%] max-sm:gap-2'
          >
            {chunks.map((subarray, colIndex) => (
              <motion.figure
                animate={{ y: colIndex % 2 === 0 ? ['-20%', '0%'] : ['0%', '-20%'] }}
                transition={{
                  duration: colIndex % 2 === 0 ? 25 : 30,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }}
                key={colIndex + 'marquee'}
                className='flex flex-col items-start gap-6 max-sm:gap-3'
              >
                {subarray.map((src, imageIndex) => (
                  <div className='relative' key={imageIndex + src}>
                    <img
                      className='aspect-[4/3] h-full w-full rounded-lg bg-neutral-100 object-cover select-none dark:bg-neutral-900'
                      key={imageIndex}
                      src={src}
                      draggable={false}
                      alt={`Image ${imageIndex + 1}`}
                    />
                  </div>
                ))}
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeDMarquee
