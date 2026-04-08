import Link from "next/link";
import { ArrowRight, Brain, Lightbulb, MessageSquare, Code, Target, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-72 h-72 bg-secondary-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-6">
              <Award className="h-4 w-4" />
              <span>KT와이즈교육 AI블록코딩 공식 강사</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
              질문하고 토론하며 <br/>
              <span className="text-primary">스스로 생각하는</span> AI·코딩 수업
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              AI블록코딩, 파이썬, 생성형 AI, AICE Future 자격증까지. <br className="hidden md:block"/>
              아이들이 단순히 기술을 따라하는 것이 아니라, <br className="hidden md:block"/>
              철학적 질문을 통해 사고의 구조를 세우고 코딩으로 표현하게 합니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/programs" className="btn-primary flex items-center justify-center space-x-2">
                <span>프로그램 보기</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/classroom" className="btn-secondary flex items-center justify-center space-x-2">
                <span>수업실 체험하기</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Summary Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">생각의 근육을 키우는 AI 교육</h2>
          <p className="section-subtitle">
            우리는 '정답'을 찾는 기계가 아닌, '질문'을 던지는 창조자를 길러냅니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <MessageSquare className="h-10 w-10 text-primary" />,
                title: "질문과 토론",
                description: "철학적 질문을 통해 문제의 본질을 파악하고, 자신의 생각을 논리적으로 정리합니다."
              },
              {
                icon: <Brain className="h-10 w-10 text-secondary" />,
                title: "논리적 사고",
                description: "코딩을 단순한 기능이 아닌, 사고를 구조화하고 문제를 해결하는 도구로 활용합니다."
              },
              {
                icon: <Code className="h-10 w-10 text-accent" />,
                title: "실천적 표현",
                description: "생각한 해결책을 블록코딩과 파이썬으로 구현하며 실질적인 결과물을 만들어냅/니다."
              }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl border border-slate-100 card-hover text-left">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Preview Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <h2 className="section-title">대표 프로그램</h2>
              <p className="text-slate-600">아이의 성장 단계에 맞춘 체계적인 AI 커리큘럼</p>
            </div>
            <Link href="/programs" className="text-primary font-semibold flex items-center space-x-1 hover:underline mb-2">
              <span>전체 보기</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tag: "입문",
                title: "AI 블록코딩 첫걸음",
                desc: "코디니와 함께하는 재미있는 AI 기초",
                level: "초등 저/고학년"
              },
              {
                tag: "자격증",
                title: "AICE Future 대비반",
                desc: "1/2/3급 자격증 취득 및 역량 강화",
                level: "초등/중등"
              },
              {
                tag: "심화",
                title: "생각하는 파이썬",
                desc: "논리 구조를 세우는 텍스트 코딩 수업",
                level: "중학생/고급"
              },
              {
                tag: "미래",
                title: "생성형 AI 리터러시",
                desc: "ChatGPT와 함께하는 창의적 프로젝트",
                level: "초등 고학년/중등"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 card-hover">
                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded mb-4">{program.tag}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{program.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{program.desc}</p>
                <div className="flex items-center text-xs text-slate-400">
                  <Target className="h-3 w-3 mr-1" />
                  <span>{program.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">함께 고민하고 질문할 준비가 되었나요?</h2>
          <p className="text-primary-100 text-lg mb-10">
            학교, 기관, 학부모님들의 다양한 교육 목적에 맞춘 최적화된 AI 수업을 제안해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-slate-100 transition-colors">
              출강 및 수업 문의하기
            </Link>
            <Link href="/philosophy" className="px-8 py-4 bg-primary-600 text-white border border-primary-400 rounded-lg font-bold hover:bg-primary-700 transition-colors">
              교육 철학 더 읽어보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
