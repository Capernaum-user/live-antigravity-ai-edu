import Link from "next/link";
import { BrainCircuit, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-slate-400 py-16 relative overflow-hidden"
      style={{ background: "#07050f", borderTop: "1px solid rgba(247,37,133,0.15)" }}
    >
      {/* Background glow blobs */}
      <div
        className="absolute bottom-0 left-1/4 w-96 h-48 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(247,37,133,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-40 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <BrainCircuit
                className="h-7 w-7"
                style={{ color: "#f72585", filter: "drop-shadow(0 0 6px rgba(247,37,133,0.5))" }}
              />
              <span className="text-xl font-bold text-white tracking-tight">
                Maieutic{" "}
                <span style={{ color: "#f72585", textShadow: "0 0 8px rgba(247,37,133,0.5)" }}>
                  AI Edu
                </span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-500">
              <strong className="text-slate-300">Maieutic(마이유틱)</strong>은 소크라테스의 산파술을 의미합니다.
              <br />
              지식을 주입하는 것이 아니라, 끊임없는 질문을 통해 아이들 스스로 해답과 생각을 낳도록 돕는 미래 교육을 지향합니다.
            </p>
          </div>

          <div>
            <h4
              className="font-semibold mb-6 text-sm uppercase tracking-widest"
              style={{ color: "#f72585" }}
            >
              바로가기
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/about", label: "강사 소개" },
                { href: "/philosophy", label: "교육 철학" },
                { href: "/programs", label: "프로그램" },
                { href: "/lab", label: "질문 연구소" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-all duration-200 hover:text-[#00d4ff]"
                    style={{ color: "#64748b" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-6 text-sm uppercase tracking-widest"
              style={{ color: "#00d4ff" }}
            >
              학습 지원
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/classroom", label: "온라인 수업실" },
                { href: "/resources", label: "교육 자료실" },
                { href: "/gallery", label: "갤러리/성과" },
                { href: "/admin", label: "관리자" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-all duration-200 hover:text-[#00d4ff]"
                    style={{ color: "#64748b" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-6 text-sm uppercase tracking-widest"
              style={{ color: "#ff6a00" }}
            >
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: "#f72585" }} />
                <span className="text-slate-400">maieutic.edu@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: "#00d4ff" }} />
                <span className="text-slate-400">010-XXXX-XXXX (예약제)</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: "#ff6a00" }} />
                <span className="text-slate-400">서울/경기/온라인 전 지역 출강</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-slate-600">
            © 2026 Maieutic AI Edu. All rights reserved. KT Wise AI Coding Instructor.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-slate-600 hover:text-slate-300 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-slate-600 hover:text-slate-300 transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
