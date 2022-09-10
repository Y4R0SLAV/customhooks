import { useState, useEffect } from 'react'

export const useHover = ( ref: React.RefObject<HTMLDivElement>) => {
  const [isHovering, setHovering] = useState(false) 
  
  const on = () => setHovering(true)
  const off = () => setHovering(false)

  useEffect(() => {
    if (!ref.current)  {
      return;
    }
    const node = ref.current
    node.addEventListener('mouseenter', on)
    node.addEventListener('mousemove', on)
    node.addEventListener('mouseleave', off)

    return function() {
      if (ref.current !== null) {
        ref.current.removeEventListener('mouseenter', on)
        ref.current.removeEventListener('mousemove', on)
        ref.current.removeEventListener('mouseleave', off)
      }
    }
  }, [])

  return isHovering
}