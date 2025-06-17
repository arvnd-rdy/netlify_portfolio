
import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

export const useParallaxScroll = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 1000]);
  
  return { ref, y };
};

export const useFixedBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  return { ref, y };
};

export const useSlidingContent = (startOffset = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [startOffset, -startOffset]);
  
  return { ref, y };
};
