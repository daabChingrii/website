"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div className={cn("relative p-[1.5px] group", containerClassName)}>
      {/* Subtle gradient animation */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: "200% 200%",
        }}
        className={cn(
          "absolute inset-0 rounded-lg z-[1] blur-sm opacity-70 group-hover:opacity-100 transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#FFB7C5,transparent),radial-gradient(circle_farthest-side_at_100%_0,#FFDDB7,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#B1C5FF,transparent),radial-gradient(circle_farthest-side_at_0_0,#4FABFF,#076EFF)]"
        )}
      />

      {/* Inner content */}
      <div className={cn("relative z-10 rounded-lg overflow-hidden", className)}>
        {children}
      </div>
    </div>
  );
};
