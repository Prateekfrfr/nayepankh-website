"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedProps = MotionProps & {
  children: ReactNode;
  className?: string;
};

export function FadeIn({ children, className, transition, ...props }: AnimatedProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut", ...transition }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
