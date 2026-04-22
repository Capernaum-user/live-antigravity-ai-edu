"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `* { cursor: none !important; }` }} />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 18),
          y: mousePosition.y - (isHovering ? 24 : 18),
          width: isHovering ? 48 : 36,
          height: isHovering ? 48 : 36,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.6 }}
        style={{
          border: isHovering
            ? "1.5px solid rgba(0, 212, 255, 0.9)"
            : "1.5px solid rgba(247, 37, 133, 0.8)",
          boxShadow: isHovering
            ? "0 0 12px rgba(0, 212, 255, 0.6), inset 0 0 8px rgba(0, 212, 255, 0.1)"
            : "0 0 12px rgba(247, 37, 133, 0.5), inset 0 0 8px rgba(247, 37, 133, 0.1)",
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 1500, damping: 40, mass: 0.1 }}
        style={{
          background: isHovering ? "#00d4ff" : "#f72585",
          boxShadow: isHovering
            ? "0 0 8px rgba(0, 212, 255, 0.9)"
            : "0 0 8px rgba(247, 37, 133, 0.9)",
        }}
      />

      {/* Trail glow */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          opacity: isHovering ? 0.5 : 0.25,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 25, mass: 1 }}
        style={{
          background: "radial-gradient(circle, rgba(247,37,133,0.4) 0%, transparent 70%)",
        }}
      />
    </>
  );
}
