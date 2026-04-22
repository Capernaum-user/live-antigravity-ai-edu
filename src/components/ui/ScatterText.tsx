"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function ScatterText({ text, className = "" }: { text: string; className?: string }) {
  // 띄어쓰기를 기준으로 단어를 분리
  const words = text.split(" ");

  // 컴포넌트 렌더링 시 랜덤 위치를 고정하여 서버-클라이언트 hydration 일치 방지 및 유지
  const scatterConfig = useMemo(() => {
    return text.split("").map(() => ({
      x: (Math.random() - 0.5) * 150, // 더 넓게 파편화 (반경 150px)
      y: (Math.random() - 0.5) * 150,
      rotate: (Math.random() - 0.5) * 270, // 강하게 회전
    }));
  }, [text]);

  let charIndexCounter = 0;

  return (
    <motion.span whileHover="hover" className={`inline-block ${className}`} style={{ cursor: 'none' }}>
      {words.map((word, wordIdx) => {
        const chars = word.split("");
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {chars.map((char, charIdx) => {
              const currentGlobalIndex = charIndexCounter++;
              const config = scatterConfig[currentGlobalIndex] || { x: 50, y: 50, rotate: 90 };
              
              return (
                <motion.span
                  key={charIdx}
                  className="inline-block relative"
                  variants={{
                    hover: {
                      x: config.x,
                      y: config.y,
                      rotate: config.rotate,
                      scale: 1.2,
                      color: "#4F46E5", // 파편화 시 색상 변경
                      zIndex: 10,
                    },
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, mass: 0.8 }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </motion.span>
  );
}
