import { FileText, Download, Lock } from 'lucide-react';
export default function Resources() {
  return (
    <div className='bg-slate-50 min-h-screen py-20'><div className='max-w-7xl mx-auto px-4'><h1 className='text-4xl font-bold mb-12 text-center'>교육 자료실</h1><div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {[
        { title: 'AI 블록코딩 활동지 (샘플)', size: '2.4MB', type: 'PDF' },
        { title: '질문 연구소 수업 카드 세트', size: '15MB', type: 'ZIP' },
        { title: 'AICE Future 급수별 가이드', size: '1.2MB', type: 'PDF' }
      ].map((res, i) => (
        <div key={i} className='bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between'>
          <div className='flex items-center space-x-4'><div className='p-3 bg-primary-50 rounded-xl'><FileText className='h-6 w-6 text-primary'/></div><div><h4 className='font-bold'>{res.title}</h4><p className='text-xs text-slate-400'>{res.type} · {res.size}</p></div></div>
          <button className='p-2 text-slate-400 hover:text-primary transition-colors'><Download className='h-5 w-5'/></button>
        </div>
      ))}
    </div><div className='mt-16 p-12 bg-white rounded-3xl border border-dashed border-slate-300 text-center'><Lock className='h-12 w-12 text-slate-300 mx-auto mb-4'/><h3 className='text-xl font-bold text-slate-900 mb-2'>수강생 전용 자료실</h3><p className='text-slate-500 mb-6'>실제 수업을 수강하는 학생과 기관은 더 풍부한 자료를 이용할 수 있습니다.</p></div></div></div>
  );
}
