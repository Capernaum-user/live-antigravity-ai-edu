"use client";

import Link from "next/link";
import { ArrowRight, Brain, Lightbulb, MessageSquare, Code, Target, Award } from "lucide-react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import Magnetic from "@/components/ui/Magnetic";
import ScatterText from "@/components/ui/ScatterText";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <div className="flex flex-col w-full overflow-hidden" style={{ background: "#07050f" }}>

      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

        {/* Parallax background image */}
        <motion.div
          style={{ y: bgY, opacity: bgOpacity, willChange: "transform" }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/neon-cloud-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            }}
          />
          {/* Dark overlay so text is readable */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(7,5,15,0.55) 0%, rgba(7,5,15,0.3) 50%, rgba(7,5,15,0.9) 100%)",
            }}
          />
        </motion.div>

        {/* Animated neon orbs */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(247,37,133,0.25) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-10 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -60, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-[200px] h-[200px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,106,0,0.15) 0%, transparent 70%)", filter: "blur(50px)" }}
        />

        {/* Neon rectangle frame (matches the image aesthetic) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-64 md:w-96 md:h-96"
            style={{
              border: "2px solid transparent",
              backgroundClip: "padding-box",
              boxShadow: "0 0 30px rgba(247,37,133,0.4), 0 0 60px rgba(0,212,255,0.2), inset 0 0 30px rgba(255,106,0,0.1)",
              background: "linear-gradient(rgba(7,5,15,0), rgba(7,5,15,0)) padding-box, linear-gradient(135deg, #ff6a00, #f72585, #00d4ff) border-box",
            }}
          />
        </motion.div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
              style={{
                background: "rgba(247,37,133,0.1)",
                border: "1px solid rgba(247,37,133,0.4)",
                color: "#f72585",
                boxShadow: "0 0 20px rgba(247,37,133,0.15)",
              }}
            >
              <Award className="h-4 w-4" />
              <ScatterText text="KT와이즈교육 AI블록코딩 공식 강사" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-white"
            >
              <ScatterText text="질문하고 토론하며" />
              <br />
              <span className="gradient-text-neon">
                <ScatterText text="스스로 생각하는" />
              </span>
              <br />
              <ScatterText text="AI·코딩 수업" />
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl mb-10 leading-relaxed font-medium"
              style={{ color: "#94a3b8" }}
            >
              <ScatterText text="AI블록코딩, 파이썬, 생성형 AI, AICE Future 자격증까지." />
              <br className="hidden md:block" />
              <ScatterText text="아이들이 단순히 기술을 따라하는 것이 아니라," />
              <br className="hidden md:block" />
              <ScatterText text="철학적 질문을 통해 사고의 구조를 세우고 코딩으로 표현하게 합니다." />
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Magnetic>
                <Link href="/programs">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center justify-center space-x-2 py-4 px-8 text-lg"
                  >
                    <ScatterText text="프로그램 보기" />
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/classroom">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center justify-center space-x-2 py-4 px-8 text-lg"
                  >
                    <ScatterText text="수업실 체험하기" />
                  </motion.div>
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "#475569" }}>scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, #f72585, transparent)" }}
          />
        </motion.div>
      </section>

      {/* ─── Maieutic Storytelling ─── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #07050f 0%, #0d0a1a 50%, #07050f 100%)" }}
      >
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          whileInView={{ opacity: 0.04, rotate: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none"
        >
          <Brain className="w-[600px] h-[600px] text-white" />
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-16"
          >
            <motion.div variants={fadeInUp} className="md:w-1/3 text-center">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center p-6 rounded-full mb-6"
                style={{
                  background: "rgba(247,37,133,0.08)",
                  border: "1px solid rgba(247,37,133,0.3)",
                  boxShadow: "0 0 30px rgba(247,37,133,0.15)",
                }}
              >
                <Lightbulb
                  className="h-16 w-16"
                  style={{ color: "#f72585", filter: "drop-shadow(0 0 10px rgba(247,37,133,0.6))" }}
                />
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
                <ScatterText text="Maieutic" />
              </h2>
              <p
                className="font-bold tracking-[0.3em] uppercase text-sm"
                style={{ color: "#f72585" }}
              >
                <ScatterText text="[마이유틱]" />
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-6 text-white">
                <ScatterText text="왜 'Maieutic(마이유틱)'인가요?" />
              </h3>
              <p className="text-xl leading-relaxed mb-6 font-medium" style={{ color: "#94a3b8" }}>
                <ScatterText text="마이유틱(Maieutic)은 고대 그리스 철학자 소크라테스의 교육법인 " />
                <strong
                  className="border-b-2 pb-1"
                  style={{ color: "#f72585", borderColor: "#f72585" }}
                >
                  <ScatterText text="산파술(조산술)" />
                </strong>
                <ScatterText text="을 뜻합니다." />
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#64748b" }}>
                <ScatterText text="우리는 아이들에게 그저 정답을 주입하지 않습니다. 대신 아이들이 내면에 가진 '생각의 씨앗'이 발아하도록 끊임없이 " />
                <strong style={{ color: "#00d4ff" }}>
                  <ScatterText text="질문(Question)" />
                </strong>
                <ScatterText text="을 던집니다. 스스로 해답을 낳게 도와주는 과정, 그것이 바로 코딩보다 더 큰 세상을 배우는 Maieutic AI Edu의 철학입니다." />
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Philosophy Cards ─── */}
      <section className="py-32" style={{ background: "#07050f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              <ScatterText text="생각의 근육을 키우는 AI 교육" />
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-16 max-w-2xl mx-auto font-medium" style={{ color: "#64748b" }}>
              <ScatterText text="우리는 '정답'을 찾는 기계가 아닌, '질문'을 던지는 창조자를 길러냅니다." />
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="h-12 w-12" style={{ color: "#f72585", filter: "drop-shadow(0 0 8px rgba(247,37,133,0.5))" }} />,
                  title: "질문과 토론",
                  desc: "철학적 질문을 통해 문제의 본질을 파악하고, 자신의 생각을 논리적으로 정리합니다.",
                  accent: "#f72585",
                  glow: "rgba(247,37,133,0.15)",
                },
                {
                  icon: <Brain className="h-12 w-12" style={{ color: "#00d4ff", filter: "drop-shadow(0 0 8px rgba(0,212,255,0.5))" }} />,
                  title: "논리적 사고",
                  desc: "코딩을 단순한 기능이 아닌, 사고를 구조화하고 문제를 해결하는 도구로 활용합니다.",
                  accent: "#00d4ff",
                  glow: "rgba(0,212,255,0.15)",
                },
                {
                  icon: <Code className="h-12 w-12" style={{ color: "#ff6a00", filter: "drop-shadow(0 0 8px rgba(255,106,0,0.5))" }} />,
                  title: "실천적 표현",
                  desc: "생각한 해결책을 블록코딩과 파이썬으로 구현하며 실질적인 결과물을 만들어냅니다.",
                  accent: "#ff6a00",
                  glow: "rgba(255,106,0,0.15)",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 0 40px ${item.glow}, 0 30px 60px rgba(0,0,0,0.5)`,
                    borderColor: item.accent,
                  }}
                  className="p-10 rounded-3xl text-left transition-all duration-300"
                  style={{
                    background: "rgba(13,10,26,0.8)",
                    border: `1px solid rgba(255,255,255,0.06)`,
                  }}
                >
                  <div
                    className="mb-8 p-4 inline-block rounded-2xl"
                    style={{ background: `${item.glow}`, border: `1px solid ${item.accent}30` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    <ScatterText text={item.title} />
                  </h3>
                  <p className="leading-relaxed text-lg" style={{ color: "#64748b" }}>
                    <ScatterText text={item.desc} />
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Program Preview ─── */}
      <section className="py-32" style={{ background: "#0d0a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            >
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                  <ScatterText text="대표 프로그램" />
                </h2>
                <p className="text-xl font-medium" style={{ color: "#64748b" }}>
                  <ScatterText text="아이의 성장 단계에 맞춘 체계적인 AI 커리큘럼" />
                </p>
              </div>
              <Magnetic>
                <Link href="/programs">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="font-bold flex items-center space-x-2 text-lg"
                    style={{ color: "#f72585" }}
                  >
                    <ScatterText text="전체 보기" />
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Magnetic>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { tag: "입문", title: "AI 블록코딩 첫걸음", desc: "코디니와 함께하는 재미있는 AI 기초", level: "초등 저/고학년", accent: "#f72585", tagBg: "rgba(247,37,133,0.1)" },
                { tag: "자격증", title: "AICE Future 대비반", desc: "1/2/3급 자격증 취득 및 역량 강화", level: "초등/중등", accent: "#ff6a00", tagBg: "rgba(255,106,0,0.1)" },
                { tag: "심화", title: "생각하는 파이썬", desc: "논리 구조를 세우는 텍스트 코딩 수업", level: "중학생/고급", accent: "#00d4ff", tagBg: "rgba(0,212,255,0.1)" },
                { tag: "미래", title: "생성형 AI 리터러시", desc: "ChatGPT와 함께하는 창의적 프로젝트", level: "초등 고학년/중등", accent: "#7b2fff", tagBg: "rgba(123,47,255,0.1)" },
              ].map((program, index) => (
                <motion.div
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.03,
                    borderColor: program.accent,
                    boxShadow: `0 0 30px ${program.tagBg}, 0 20px 40px rgba(0,0,0,0.4)`,
                  }}
                  key={index}
                  className="p-8 rounded-3xl cursor-pointer transition-all duration-300"
                  style={{
                    background: "rgba(7,5,15,0.8)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-6"
                    style={{ background: program.tagBg, color: program.accent }}
                  >
                    <ScatterText text={program.tag} />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    <ScatterText text={program.title} />
                  </h3>
                  <p className="mb-6 font-medium" style={{ color: "#64748b" }}>
                    <ScatterText text={program.desc} />
                  </p>
                  <div className="flex items-center text-sm font-semibold mt-auto" style={{ color: "#475569" }}>
                    <Target className="h-4 w-4 mr-2" style={{ color: program.accent }} />
                    <ScatterText text={program.level} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 relative overflow-hidden" style={{ background: "#07050f" }}>
        {/* Neon cloud background echo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/neon-cloud-bg.jpg')" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(247,37,133,0.12) 0%, rgba(0,212,255,0.06) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #07050f 0%, transparent 20%, transparent 80%, #07050f 100%)" }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white"
            >
              <ScatterText text="함께 고민하고 질문할 준비가 되었나요?" />
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl mb-12 leading-relaxed"
              style={{ color: "#64748b" }}
            >
              <ScatterText text="학교, 기관, 학부모님들의 다양한 교육 목적에 맞춘 최적화된 AI 수업을 제안해 드립니다." />
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-6">
              <Magnetic>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-8 py-4 text-lg rounded-xl font-bold"
                  >
                    <ScatterText text="출강 및 수업 문의하기" />
                  </motion.div>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/philosophy">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary px-8 py-4 text-lg rounded-xl font-bold"
                  >
                    <ScatterText text="교육 철학 더 읽어보기" />
                  </motion.div>
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
