import Link from "next/link";
import { BookOpen, Award, Terminal, Sparkles, ChevronRight } from "lucide-react";

const PROGRAMS = [
  {
    id: "ai-block-intro",
    icon: <BookOpen className="h-6 w-6" />,
    category: "입문",
    title: "AI 블록코딩 첫걸음",
    description: "엔트리와 코디니를 활용하여 AI의 기본 원리를 쉽고 재미있게 배웁니다.",
    target: "초등 저학년/고학년",
    features: ["블록코딩 기초", "인식 모델 만들기", "간단한 게임 개발"]
  },
  {
    id: "aice-future",
    icon: <Award className="h-6 w-6" />,
    category: "자격증",
    title: "AICE Future 완벽 대비",
    description: "KT가 주관하는 AI 능력시험 AICE Future 1/2/3급 자격증 취득을 위한 핵심 과정입니다.",
    target: "초등 고학년/중등",
    features: ["급수별 기출 분석", "핵심 개념 정리", "모의고사 풀이"]
  },
  {
    id: "thinking-python",
    icon: <Terminal className="h-6 w-6" />,
    category: "심화",
    title: "생각하는 파이썬 (Python)",
    description: "단순 문법 암기가 아닌, 논리적 사고를 바탕으로 한 텍스트 코딩 입문 과정입니다.",
    target: "중학생/초등 심화",
    features: ["데이터 타입과 제어문", "알고리즘 문제 해결", "미니 프로젝트"]
  },
  {
    id: "gen-ai-literacy",
    icon: <Sparkles className="h-6 w-6" />,
    category: "미래",
    title: "생성형 AI 리터러시",
    description: "ChatGPT, Dall-E 등 생성형 AI를 올바르게 활용하고 비판적으로 수용하는 능력을 기릅니다.",
    target: "전 연령",
    features: ["프롬프트 엔지니어링", "AI 윤리와 저작권", "창의적 콘텐츠 제작"]
  }
];

export default function Programs() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">교육 프로그램</h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            기초부터 심화까지, 아이들의 사고 성장을 단계별로 지원하는 전문 커리큘럼을 소개합니다.
          </p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROGRAMS.map((program) => (
              <div key={program.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col md:flex-row h-full">
                <div className="p-8 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-4">
                      {program.category}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{program.title}</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                      {program.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {program.features.map((f, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-500">
                          <ChevronRight className="h-4 w-4 text-primary mr-2" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href={`/programs/${program.id}`}
                    className="inline-flex items-center font-bold text-primary hover:text-primary-700 transition-colors"
                  >
                    <span>상세 커리큘럼 보기</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <div className="bg-slate-50 p-8 md:w-1/3 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-slate-100">
                  <div className="p-4 bg-white rounded-2xl shadow-sm mb-4">
                    {program.icon}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">권장 대상</span>
                  <span className="text-sm font-bold text-slate-700">{program.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Program CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-slate-900 text-white">
            <h2 className="text-3xl font-bold mb-6">기관 맞춤형 프로그램</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              학교, 도서관, 기업 사회공헌 등 각 기관의 목적과 시간, 환경에 맞춰 <br/>
              최적화된 커리큘럼을 새롭게 구성해 드립니다.
            </p>
            <Link href="/contact" className="btn-primary border-none">
              맞춤형 상담 신청
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
