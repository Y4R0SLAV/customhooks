import { useRef } from "react"
import { useHover } from './../hooks/useHover';




export const Hover = () => {  
  const ref = useRef<HTMLDivElement>(null) 
  const isHovering = useHover(ref)
  
  return  <div ref={ref} className="" style={{width: 200,
                                              height: 200, 
                                              background: isHovering? "orange" : "teal"}}>
  </div>
}