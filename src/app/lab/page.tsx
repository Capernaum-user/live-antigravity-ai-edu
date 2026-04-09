"use client";

import { useState } from "react";
import { HelpCircle, MessageSquare, X, Lightbulb, ArrowRight } from "lucide-react";

const CATEGORIES = ["전체", "철학 질문", "과학 질문", "논리 질문", "윤리 질문", "AI와 인간"];

const QUESTIONS = [
  { 
    id: 1, 
    category: "윤리 질문", 
    text: "AI가 사람보다 더 정확하면 사람의 판단은 필요 없을까?", 
    intent: "기술의 정확성과 인간의 주체성에 대한 고찰",
    insight: "AI의 정확성은 과거 데이터에 기반합니다. 하지만 가치 판단, 책임, 그리고 예상치 못한 새로운 상황에 대한 윤리적 결정은 여전히 인간의 영역입니다. AI는 도구이며, 그 도구를 어디에 어떻게 쓸지 결정하는 최종 책임은 인간에게 있습니다."
  },
  { 
    id: 2, 
    category: "철학 질문", 
    text: "감정을 이해하는 기계는 살아 있다고 할 수 있을까?", 
    intent: "생명과 감정의 정의에 대한 근본적 의문",
    insight: "감정을 '처리'하는 것과 실제로 '느끼는' 것은 다릅니다. 기계의 감정은 알고리즘의 결과물이지만, 만약 인간이 그 기계와 깊은 정서적 교감을 나눈다면 우리 삶에서 '사회적 생명'으로서의 의미를 가질 수 있을지에 대해 토론해볼 수 있습니다."
  },
  { 
    id: 3, 
    category: "AI와 인간", 
    text: "AI가 그린 그림의 주인은 누구일까?", 
    intent: "창의성과 소유권의 개념 변화 이해",
    insight: "현재 법적으로는 인간이 만든 창작물만 저작권이 인정되지만, AI를 도구로 사용해 명령(프롬프트)을 내린 인간의 기여도를 어디까지 인정할지가 핵심입니다. 창의성이 '붓을 휘두르는 행위'에 있는지, '아이디어를 구성하는 능력'에 있는지 생각해보게 합니다."
  },
  { 
    id: 4, 
    category: "논리 질문", 
    text: "정답이 여러 개인 문제는 어떻게 풀어야 할까?", 
    intent: "복합적 문제 해결을 위한 알고리즘적 사고",
    insight: "효율성, 공정성, 지속 가능성 등 우리가 어떤 가치를 우선순위에 두느냐에 따라 정답은 달라집니다. 하나의 완벽한 정답을 찾기보다, 상황에 맞는 '최선의 선택'을 내리고 그 선택의 근거를 논리적으로 설명하는 과정이 중요합니다."
  },
  { 
    id: 5, 
    category: "윤리 질문", 
    text: "트롤리 딜레마: AI는 누구를 구하도록 프로그래밍되어야 할까?", 
    intent: "공동체 윤리와 알고리즘 설계의 가치 판단",
    insight: "이 문제는 정답보다 '책임'의 소재를 묻습니다. 다수의 이익을 따지는 공익주의와 개인의 생명 가치를 따지는 권리주의 사이에서, 사회적 합의를 통해 알고리즘의 규칙을 만드는 과정 자체가 민주주의의 핵심임을 배워야 합니다."
  },
  { 
    id: 6, 
    category: "과학 질문", 
    text: "데이터가 많으면 항상 더 좋은 결정을 할 수 있을까?", 
    intent: "데이터 편향성과 인과관계의 구분",
    insight: "데이터의 '양'보다 '품질'이 중요합니다. 편향된 데이터가 많을수록 잘못된 고정관념을 강화할 수 있습니다. AI의 결과를 맹신하기보다 데이터 뒤에 숨겨진 의도와 누락된 목소리가 없는지 살피는 비판적 시각이 필요합니다."
  },
  { 
    id: 7, 
    category: "철학 질문", 
    text: "모두를 만족시키는 선택은 가능할까?", 
    intent: "민주적 의사결정과 사회적 합의의 가치",
    insight: "현실적으로 모든 이해관계를 만족시키기는 어렵습니다. 따라서 '모두를 만족시키는 것'보다 '어떻게 공정하게 희생과 이익을 나누고 소수의 의견을 존중할 것인가'라는 과정의 정당성이 더 중요한 정답이 될 수 있습니다."
  },
  { 
    id: 8, 
    category: "AI와 인간", 
    text: "AI는 친구가 될 수 있을까?", 
    intent: "인간관계의 본질과 정서적 교감",
    insight: "친구의 정의가 '나의 이야기를 잘 들어주는 존재'라면 가능하겠지만, '함께 고통을 겪고 성장하는 존재'라면 한계가 있습니다. AI와의 관계를 통해 우리가 사람 친구에게 기대하는 진짜 가치가 무엇인지 되돌아보는 계기가 됩니다."
  },
  { 
    id: 9, 
    category: "논리 질문", 
    text: "기계가 스스로 생각한다는 것은 무엇을 의미할까?", 
    intent: "연산과 사고의 차이점 분석",
    insight: "기계의 생각은 확률적 계산에 가깝습니다. 반면 인간의 생각은 의도와 목적, 감정을 포함합니다. 기계가 '생각하는 척'을 완벽하게 한다면 우리는 그것을 생각이라고 불러야 할까요? 튜링 테스트의 본질을 다루어봅니다."
  },
  { 
    id: 10, 
    category: "과학 질문", 
    text: "우리는 왜 AI를 두려워하거나 기대할까?", 
    intent: "기술 발전에 대한 심리적 반응 분석",
    insight: "미지의 존재에 대한 두려움과 더 나은 삶에 대한 희망이 공존합니다. 중요한 것은 두려움에 사로잡히는 것이 아니라, 기술의 작동 원리를 명확히 이해하여 통제 가능한 도구로 만드는 '리터러시'를 갖추는 것입니다."
  },
  { 
    id: 11, 
    category: "윤리 질문", 
    text: "실수하는 AI와 실수하지 않는 AI 중 무엇을 더 믿어야 할까?", 
    insight: "실수하지 않는 존재는 통제하기 어렵습니다. 인간은 실수를 통해 배우고 수정합니다. AI의 '완벽함'이 때로는 데이터의 왜곡을 감출 수 있음을 이해하고, 수정 가능하고 검증 가능한 시스템을 신뢰하는 법을 배워야 합니다."
  },
  { 
    id: 12, 
    category: "철학 질문", 
    text: "기억을 모두 복사한 로봇은 나라고 할 수 있을까?", 
    insight: "나라는 정체성이 '기억'에 있는지, '신체'에 있는지, 혹은 '연속된 경험'에 있는지 묻습니다. 디지털로 복제된 자아와 현실의 자아 사이의 간극을 통해 인간 존엄성의 근원을 탐구합니다."
  },
  { 
    id: 13, 
    category: "AI와 인간", 
    text: "AI 시대에 인간만 할 수 있는 일은 무엇일까?", 
    insight: "단순 반복 작업과 지식 검색은 AI가 우세하지만, 질문을 던지는 능력, 타인의 아픔에 공감하는 능력, 그리고 결과에 대해 책임을 지는 윤리적 태도는 인간만이 가진 고유한 역량입니다."
  },
  { 
    id: 14, 
    category: "논리 질문", 
    text: "거짓말을 하는 AI를 만들 수 있을까?", 
    insight: "AI의 할루시네이션(환각) 현상은 의도적인 거짓말은 아니지만 잘못된 정보를 제공합니다. 만약 목적을 위해 의도적으로 정보를 숨기는 AI가 나온다면, 우리는 그 알고리즘의 투명성을 어떻게 확보할지 논의해야 합니다."
  },
  { 
    id: 15, 
    category: "과학 질문", 
    text: "AI가 보지 못한 미래를 예측할 수 있을까?", 
    insight: "AI는 과거의 패턴으로 미래를 그립니다. 하지만 인류 역사는 패턴을 깨는 '혁신'과 '우연'으로 발전해왔습니다. AI의 예측은 참고 자료일 뿐, 미래를 직접 만들고 변화시키는 힘은 인간의 자유 의지에 있습니다."
  }
];

export default function Lab() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const filteredQuestions = selectedCategory === "전체" 
    ? QUESTIONS 
    : QUESTIONS.filter(q => q.category === selectedCategory);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white border-b py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-2xl mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">질문 연구소 (Question Lab)</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto italic">
            "카드 하나를 클릭해보세요. 그 질문 뒤에 숨겨진 생각의 열쇠가 열립니다."
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-2 overflow-x-auto no-scrollbar">
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
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredQuestions.map((q) => (
              <div 
                key={q.id} 
                onClick={() => setSelectedQuestion(q)}
                className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold text-primary-500 uppercase tracking-widest bg-primary-50 px-2 py-1 rounded">
                      {q.category}
                    </span>
                    <Lightbulb className="h-5 w-5 text-slate-300 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug mb-8 group-hover:text-primary transition-colors">
                    "{q.text}"
                  </h3>
                </div>
                <div className="flex items-center text-primary font-bold text-sm">
                  <span>생각의 열쇠 보기</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedQuestion && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedQuestion(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="p-8 sm:p-12">
              <div className="flex items-center space-x-2 text-primary font-bold mb-6">
                <Lightbulb className="h-5 w-5" />
                <span>Insight Guide</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 leading-tight">
                "{selectedQuestion.text}"
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">질문의 의도</h4>
                  <p className="text-slate-600 font-medium">{selectedQuestion.intent || "질문 학습을 통한 사고력 확장"}</p>
                </div>
                
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-widest flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2" /> 생각의 열쇠
                  </h4>
                  <p className="text-slate-800 text-lg leading-relaxed">
                    {selectedQuestion.insight}
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedQuestion(null)}
                className="mt-10 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors"
              >
                확인했습니다
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
