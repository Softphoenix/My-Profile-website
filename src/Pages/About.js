import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';


export const About = () => {
  
  useEffect(() => {
        AOS.init();
     }, [])
  
  return (
    <div>About Us 
         vLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a enim molestie, ornare enim sed, laoreet nibh. Nulla et egestas orci. Integer lacinia vestibulum augue, vel hendrerit ipsum blandit ac. Suspendisse lorem tellus, tempor ut metus auctor, dictum sodales enim. Etiam pellentesque justo a mi dignissim, efficitur vulputate lacus auctor. Nunc non tortor sit amet ex maximus dignissim. Nulla rutrum quam nec mi suscipit laoreet. Ut at nunc tristique, mattis ipsum quis, dictum diam.

Suspendisse hendrerit vulputate ipsum nec finibus. Sed dignissim, erat quis egestas bibendum, magna risus consequat purus, vitae maximus metus ipsum ut eros. Suspendisse sed nisl nulla. Donec pellentesque eros augue, quis semper elit pharetra at. Mauris viverra imperdiet molestie. Duis finibus at massa ut aliquet. Vivamus placerat fringilla elementum. Suspendisse nibh ante, placerat a tempor id, ultrices id est. Praesent ornare commodo quam nec iaculis. Etiam facilisis, risus sed mattis feugiat, ante eros mattis nulla, non placerat augue dolor a mi.
    </div>
  )
}
