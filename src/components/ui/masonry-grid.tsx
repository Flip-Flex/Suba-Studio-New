'use client';

import * as React from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface MasonryGridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  gap?: string;
  staggerDelay?: number;
}

const GridItem = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ['20deg', '-20deg']
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ['-20deg', '20deg']
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
      }}
      className="relative w-full h-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        whileTap={{ scale: 0.95 }}
        className="w-full h-full transition-transform duration-75"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const MasonryGrid = <T,>({
  items,
  renderItem,
  className,
  gap = '1rem',
  staggerDelay = 0.1,
}: MasonryGridProps<T>) => {

  const itemVariants = {
    hidden: (index: number) => {
      // Determine if mobile on mount. If window is undefined (SSR), default to mobile false.
      const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;
      return {
        opacity: 0,
        y: 50,
        // Slide from left for even indices, right for odd indices on mobile
        x: isMobile ? (index % 2 === 0 ? -150 : 150) : 0,
        scale: 0.9,
      };
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        // Use a modulo for delay so scrolling always feels staggered without causing massive delays for bottom items
        delay: (index % 3) * staggerDelay,
      },
    }),
  };

  return (
    <div
      className={cn('w-full', className)}
      style={{ columnGap: gap }}
      role="list"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "50px 0px -50px 0px" }}
          className="mb-4 break-inside-avoid"
          variants={itemVariants}
          role="listitem"
        >
          <GridItem>{renderItem(item, index)}</GridItem>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGrid;
