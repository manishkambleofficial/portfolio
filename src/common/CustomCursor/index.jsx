///-----------Working Code------------------

"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import styles from "./style.module.scss"

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [hoverText, setHoverText] = useState("")
  const timeoutRef = useRef(null)
  const prev = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // ✅ Hide initially (fix top-left issue)
    gsap.set(cursorRef.current, {
      x: -100,
      y: -100,
    })

    const moveCursor = (e) => {
      const xDiff = e.clientX - prev.current.x
      const yDiff = e.clientY - prev.current.y

      const xScale = gsap.utils.clamp(0.8, 1.2, Math.abs(xDiff) / 100)
      const yScale = gsap.utils.clamp(0.8, 1.2, Math.abs(yDiff) / 100)

      prev.current = { x: e.clientX, y: e.clientY }

      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        scaleX: xScale,
        scaleY: yScale,
        duration: 0.15,
        ease: "power2.out",
        overwrite: true,
        force3D: true,
      })

      clearTimeout(timeoutRef.current)

      timeoutRef.current = setTimeout(() => {
        gsap.to(cursorRef.current, {
          scaleX: 1,
          scaleY: 1,
          duration: 0.2,
          ease: "power2.out",
          overwrite: true,
        })
      }, 100)
    }

    const addHoverEvents = () => {
      const elements = document.querySelectorAll("a, button, .cursor-hover")

      elements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(cursorRef.current, {
            scale: 1.8,
            duration: 0.3,
            ease: "power3.out",
          })
          setHoverText("VIEW")
        })

        el.addEventListener("mouseleave", () => {
          gsap.to(cursorRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
          })
          setHoverText("")
        })
      })
    }

    window.addEventListener("mousemove", moveCursor)
    addHoverEvents()

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <div ref={cursorRef} className={styles.cursor}>
      <span className={styles.text}>{hoverText}</span>
    </div>
  )
}