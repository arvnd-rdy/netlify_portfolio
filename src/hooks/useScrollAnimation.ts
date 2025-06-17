
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export const useScrollAnimation = (amount = 0.1, margin = '-50px') => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount, 
    margin,
    once: true 
  });

  return { ref, isInView };
};

export const useParallaxScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const smoothY = useSpring(y, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        y.set(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [y]);

  return { ref, y: smoothY };
};
