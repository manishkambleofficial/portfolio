"use client"

import { useEffect } from "react"
import gsap from "@/Motion/gsapConfig"

export default function useSectionReveal(ref) {
  useEffect(() => {
    if (!ref.current) return

    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
  }, [ref])
}