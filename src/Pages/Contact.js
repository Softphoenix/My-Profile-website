import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'



export const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>Contact Me Via</div>
  )
}
