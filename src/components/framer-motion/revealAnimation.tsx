"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealAnimationProps {
  children: ReactNode;
  className?: string;
}

const RevealAnimation = ({ children, className }: RevealAnimationProps) => {
  return (
    <motion.div
      className={`${className}`}
      initial={{ clipPath: "inset(0 50% 0 50%)" }}
      animate={{ clipPath: "inset(0 0% 0 0%)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
