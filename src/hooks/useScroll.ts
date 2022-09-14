import { useState, useEffect, useRef } from 'react'

export const useScroll = (parentRef: React.RefObject<Element>, 
                          childRef: React.RefObject<Element>, 
                          callback: () => void) => {

  const observer = useRef<IntersectionObserver | null>(null)
  
  useEffect(() => {
    const options: {} = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0
    }

    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        callback()
      }
    }, options)

    const node = childRef.current as Element
    observer.current.observe(node)

    return function() {
      observer.current?.unobserve(node)
    }

  }, [parentRef, childRef, callback])
}