import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export const Portfolio = () => {
  useEffect(() => {
        AOS.init();
     }, [])
  return (
    <div>My Project</div>
  )
}
