"use client";

import { useState } from "react";
import { BookOpen, CheckCircle2, Play, Info, MessageCircle, Lightbulb } from "lucide-react";

const SAMPLE_LESSONS = [
  {
    id: 1,
    title: "트롤리 딜레마와 AI의 선택",
    topic: "AI 윤리",
    steps: [
      { label: "오늘의 질문", content: "AI가 사람의 생명을 결정해야 한다면, 어떤 기준을 가져야 할까요?", icon: <MessageCircle className="h-5 w-5" /> },
      { label: "상황 제시", content: "자율주행 자동차가 피할 수 없는 사고 상황에 직면했습니다. 직진하면 5명의 보행자를 치고, 방향을 틀면 1명의 보행자를 칩니다. AI는 어떻게 해야 할까요?", icon: <Info className="h-5 w-5" /> },
      { label: "토론 포인트", content: "다수의 이익이 항상 우선일까요? 생명의 가치를 숫자로 계산할 수 있을까요?", icon: <Lightbulb className="h-5 w-5" /> },
      { label: "실습 미션", content: "블록코딩을 사용하여 다양한 상황에 따른 자율주행 알고리즘을 설계해봅시다.", icon: <Play className="h-5 w-5" /> }
    ]
  },
  {
    id: 2,
    title: "데이터를 믿어야 할까?",
    topic: "데이터 과학",
    steps: [
      { label: "오늘의 질문", content: "우리가 보는 데이터는 항상 진실만을 말할까요?", icon: <MessageCircle className="h-5 w-5" /> },
      { label: "상황 제시", content: "아이스크림 판매량이 늘어날 때 익사 사고도 늘어난다는 통계가 있습니다. 아이스크림이 익사 사고의 원인일까요?", icon: <Info className="h-5 w-5" /> },
      { label: "토론 포인트", content: "상관관계와 인과관계의 차이는 무엇일까요? 데이터를 해석할 때 우리가 범하는 오류는 무엇일까요?", icon: <Lightbulb className="h-5 w-5" /> },
      { label: "실습 미션", content: "편향된 데이터를 학습시킨 AI 모델의 결과를 확인하고, 이를 보정하는 과정을 실습합니다.", icon: <Play className="h-5 w-5" /> }
    ]
  },
  {
    id: 3,
    title: "AI는 친구가 될 수 있을까?",
    topic: "인간과 기계",
    steps: [
      { label: "오늘의 질문", content: "기계와의 정서적 교감이 인간관계와 같을 수 있을까요?", icon: <MessageCircle className="h-5 w-5" /> },
      { label: "상황 제시", content: "나의 모든 고민을 들어주고 공감해주는 AI 챗봇이 있습니다. 나는 이 챗봇을 친구라고 부를 수 있을까요?", icon: <Info className="h-5 w-5" /> },
      { label: "토론 포인트", content: "감정의 주체는 누구인가요? 공감하는 척하는 것과 진짜 공감하는 것의 차이는 무엇일까요?", icon: <Lightbulb className="h-5 w-5" /> },
      { label: "실습 미션", content: "간단한 감정 인식 챗봇을 직접 구현해보고, 사용자 경험을 분석해봅시다.", icon: <Play className="h-5 w-5" /> }
    ]
  }
];

export default function Classroom() {
  const [activeLesson, setActiveLesson] = useState(SAMPLE_LESSONS[0]);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center space-x-2 text-primary font-bold mb-2">
              <BookOpen className="h-5 w-5" />
              <span>실시간 수업실</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900">질문으로 시작하는 AI 클래스</h1>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="btn-primary text-sm px-6">강의 자료 다운로드</button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Lesson List */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider px-2">샘플 강의 목록</h3>
              {SAMPLE_LESSONS.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setActiveLesson(lesson)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border ${
                    activeLesson.id === lesson.id 
                    ? "bg-primary-50 border-primary text-primary shadow-sm" 
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-xs font-semibold block mb-1 opacity-70">{lesson.topic}</span>
                  <span className="font-bold block leading-snug">{lesson.title}</span>
                </button>
              ))}
            </div>

            {/* Main Content - Lesson Player */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="p-8 border-b bg-slate-50">
                  <h2 className="text-2xl font-bold text-slate-900">{activeLesson.title}</h2>
                </div>
                
                <div className="p-8 space-y-12">
                  {activeLesson.steps.map((step, index) => (
                    <div key={index} className="flex space-x-6 relative">
                      {index !== activeLesson.steps.length - 1 && (
                        <div className="absolute left-6 top-14 bottom-0 w-px bg-slate-100"></div>
                      )}
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary z-10">
                        {step.icon}
                      </div>
                      <div className="pb-4">
                        <h4 className="text-sm font-bold text-primary-600 mb-2">{step.label}</h4>
                        <div className="text-slate-800 text-lg leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          {step.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-slate-900 text-white flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-green-400" />
                    <span>이 수업을 성공적으로 마쳤다면, 자신의 생각을 정리해보세요.</span>
                  </div>
                  <button className="px-6 py-2 bg-white text-slate-900 rounded-lg font-bold text-sm hover:bg-slate-100">
                    성찰 일지 쓰기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
