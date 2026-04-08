import { Image as ImageIcon } from 'lucide-react';
export default function Gallery() {
  return (
    <div className='bg-white min-h-screen py-20'><div className='max-w-7xl mx-auto px-4 text-center'><h1 className='text-4xl font-bold mb-6'>수업 갤러리/성과</h1><p className='text-slate-600 mb-16'>함께 질문하고 성장하는 아이들의 소중한 순간들입니다.</p>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className='aspect-video bg-slate-100 rounded-3xl flex flex-col items-center justify-center text-slate-400 group overflow-hidden relative'>
          <ImageIcon className='h-12 w-12 mb-2 group-hover:scale-110 transition-transform'/>
          <span className='text-sm'>수업 활동 사진 예정</span>
          <div className='absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity'></div>
        </div>
      ))}
    </div></div></div>
  );
}
