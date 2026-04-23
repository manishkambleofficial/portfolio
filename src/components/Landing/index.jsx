'use client';

import Image from 'next/image';
import styles from './style.module.scss';
import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Landing() {
  const containerRef = useRef(null);
  const [time, setTime] = useState('');

  // India Time
  useEffect(() => {
    const updateTime = () => {
      const indiaTime = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(indiaTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Hero Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        y: 200,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      });

      gsap.from('.roleLine', {
        y: 60,
        opacity: 0,
        delay: 0.4,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.description', {
        opacity: 0,
        y: 30,
        delay: 0.8,
        duration: 1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className={styles.landing}>
      <Image
        src="/images/MKposter SVG transperent.svg"
        alt="Background"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />

      <div className={styles.overlay}></div>

      <div className={styles.identityBlock}>
        <h1 className={styles.bigName}>
          <span className={styles.mask}>
            <span className="reveal">Manish</span>
          </span>
          <span className={styles.mask}>
            <span className="reveal">Kamble</span>
          </span>
        </h1>

        <div className={styles.roleStrip}>
          <span className="roleLine">
             SQL Developer — Web Developer — Technical Support — Creative Engineer
          </span>
        </div>
      </div>

      <div className={styles.description}>
        <p>Computer Software Engineer</p>
        <p>India: {time}</p>
      </div>
    </main>
  );
}