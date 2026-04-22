"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, BrainCircuit } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 20); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "교육 철학", href: "/philosophy" },
    { name: "프로그램", href: "/programs" },
    { name: "강의실", href: "/lectures" },
    { name: "질문 연구소", href: "/lab" },
    { name: "AI 인사이트", href: "/insight" },
    { name: "수업실", href: "/classroom" },
    { name: "문의하기", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
      style={
        isScrolled
          ? { background: "rgba(7, 5, 15, 0.85)" }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Magnetic>
            <Link href="/" className="flex items-center space-x-2 group">
              <BrainCircuit
                className="h-8 w-8 transition-all duration-300"
                style={{ color: "#f72585", filter: "drop-shadow(0 0 8px rgba(247,37,133,0.6))" }}
              />
              <span className="text-xl font-bold text-white tracking-tight">
                Maieutic{" "}
                <span
                  style={{
                    color: "#f72585",
                    textShadow: "0 0 12px rgba(247,37,133,0.6)",
                  }}
                >
                  AI Edu
                </span>
              </span>
            </Link>
          </Magnetic>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Magnetic key={item.name}>
                <Link
                  href={item.href}
                  className="relative font-medium transition-all duration-300 text-sm px-3 py-2 block rounded-md group"
                  style={{ color: "#94a3b8" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#00d4ff";
                    (e.currentTarget as HTMLElement).style.textShadow = "0 0 10px rgba(0,212,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                    (e.currentTarget as HTMLElement).style.textShadow = "none";
                  }}
                >
                  {item.name}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-4/5 transition-all duration-300"
                    style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }}
                  />
                </Link>
              </Magnetic>
            ))}
          </nav>

          <div className="hidden md:block">
            <Magnetic>
              <Link href="/contact" className="btn-primary py-2 px-5 text-xs block">
                출강 문의
              </Link>
            </Magnetic>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2" style={{ color: "#f72585" }}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(7, 5, 15, 0.97)",
            borderColor: "rgba(247,37,133,0.2)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-base font-medium rounded-md transition-all duration-200"
                style={{ color: "#94a3b8" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#00d4ff";
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
