'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import ImageBox from '../ImageBox/ImageBox'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: string[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  const [start, setStart] = useState(false)

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }

  useEffect(() => {
    addAnimation()
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 overflow-hidden [mask-image:linear-gradient(0deg,#fff 20% ,rgba(245, 246, 248, 1) 100%)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-6 lg:gap-5 md:gap-4 sm:gap-3 xs:!gap-2 w-max flex-nowrap py-6 lg:py-5 md:py-4 sm:py-3 xs:!py-2',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[175px] max-w-full relative rounded-2xl lg:rounded-xl md:!rounded-md lg:w-[150px] md:!w-[125px] sm:w-[100px] xs:!w-[75px] bg-gray-300 flex justify-center items-center p-4 shadow-lg lg:p-3 md:p-2 sm:!p-1"
            key={idx}
          >
            <ImageBox
              src={item}
              alt={'investor'}
              className="w-full h-auto flex justify-center items-center"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
