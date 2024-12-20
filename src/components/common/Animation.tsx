// Path: src/components/common/Animation.tsx
// Reusable animation components using Framer Motion
import React from 'react';
import { FC, ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
}

export const FadeIn: FC<AnimationProps> = ({ children, delay = 0 }) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn: FC<AnimationProps> = ({ children, delay = 0 }) => {
  const variants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}; 