"use client";

import { useState } from "react";
import { Search, Filter, HelpCircle, MessageSquare } from "lucide-react";

const CATEGORIES = ["전체", "철학 질문", "과학 질문", "논리 질문", "윤리 질문", "AI와 인간"];

const QUESTIONS = [
  { id: 1, category: "윤리 질문", text: "AI가 사람보다 더 정확하면 사람의 판단은 필요 없을까?", intent: "기술의 정확성과 인간의 주체성에 대한 고찰" },
  { id: 2, category: "철학 질문", text: "감정을 이해하는 기계는 살아 있다고 할 수 있을까?", intent: "생명과 감정의 정의에 대한 근본적 의문" },
  { id: 3, category: "AI와 인간", text: "AI가 그린 그림의 주인은 누구일까?", intent: "창의성과 소유권, 저작권의 개념 변화 이해" },
  { id: 4, category: "논리 질문", text: "정답이 여러 개인 문제는 어떻게 풀어야 할까?", intent: "복합적 문제 해결을 위한 알고리즘적 사고" },
  { id: 5, category: "윤리 질문", text: "트롤리 딜레마: AI는 누구를 구하도록 프로그래밍되어야 할까?", intent: "공동체 윤리와 알고리즘 설계의 가치 판단" },
  { id: 6, category: "과학 질문", text: "데이터가 많으면 항상 더 좋은 결정을 할 수 있을까?", intent: "데이터 편향성과 상관관계/인과관계의 구분" },
  { id: 7, category: "철학 질문", text: "모두를 만족시키는 선택은 가능할까?", intent: "민주적 의사결정과 사회적 합의의 가치" },
  { id: 8, category: "AI와 인간", text: "AI는 친구가 될 수 있을까?", intent: "인간관계의 본질과 기계와의 정서적 교감" },
  { id: 9, category: "논리 질문", text: "기계가 스스로 생각한다는 것은 무엇을 의미할까?", intent: "연산과 사고의 차이점에 대한 논리적 분석" },
  { id: 10, category: "과학 질문", text: "우리는 왜 AI를 두려워하거나 기대할까?", intent: "기술 발전과 인간의 심리적 반응 분석" },
  { id: 11, category: "윤리 질문", text: "실수하는 AI와 실수하지 않는 AI 중 무엇을 더 믿어야 할까?", intent: "신뢰의 기준과 완벽주의에 대한 의문" },
  { id: 12, category: "철학 질문", text: "기억을 모두 복사한 로봇은 나라고 할 수 있을까?", intent: "정체성과 자아의 영속성에 대한 철학적 탐구" },
  { id: 13, category: "AI와 인간", text: "AI 시대에 인간만 할 수 있는 일은 무엇일까?", intent: "미래 역량과 인간 고유의 가치 발견" },
  { id: 14, category: "논리 질문", text: "거짓말을 하는 AI를 만들 수 있을까? 왜 그래야 할까?", intent: "언어의 사회적 기능과 속임수의 논리" },
  { id: 15, category: "과학 질문", text: "AI가 보지 못한 미래를 예측할 수 있을까?", intent: "통계적 추론의 한계와 직관의 역할" }
];

export default function Lab() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredQuestions = selectedCategory === "전체" 
    ? QUESTIONS 
    : QUESTIONS.filter(q => q.category === selectedCategory);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-white border-b py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-2xl mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">질문 연구소 (Question Lab)</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            AI 교육의 시작은 정답이 아닌 '질문'입니다. <br/>
            아이들의 사고를 자극하는 다양한 질문 카드를 탐색해보세요.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Questions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredQuestions.map((q) => (
              <div key={q.id} className="group bg-white p-8 rounded-2xl border border-slate-200 card-hover flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-primary-500 uppercase tracking-wider mb-4 block">
                    {q.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-8 group-hover:text-primary transition-colors">
                    "{q.text}"
                  </h3>
                </div>
                <div className="pt-6 border-t border-slate-50">
                  <div className="flex items-start space-x-3 text-slate-500 italic">
                    <MessageSquare className="h-4 w-4 mt-1 flex-shrink-0" />
                    <p className="text-sm">생각 포인트: {q.intent}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredQuestions.length === 0 && (
            <div className="text-center py-24">
              <p className="text-slate-400">해당 카테고리의 질문이 아직 준비되지 않았습니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* Suggestion Section */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-slate-900 rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">새로운 질문을 제안해주세요</h2>
          <p className="text-slate-400 mb-8">아이들과 함께 나누고 싶은 가치 있는 질문이 있다면 알려주세요. 질문 연구소의 소중한 자료가 됩니다.</p>
          <button className="btn-primary border-none">질문 제안하기</button>
        </div>
      </section>
    </div>
  );
}
