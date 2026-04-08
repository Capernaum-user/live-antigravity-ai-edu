import { query } from '@/lib/db';
export default async function Admin() {
  let inquiries: any = [];
  try { inquiries = await query('SELECT * FROM inquiries ORDER BY created_at DESC'); } catch(e) { console.error(e); }
  return (
    <div className='p-8 max-w-7xl mx-auto'><h1 className='text-2xl font-bold mb-8'>관리자 대시보드 (문의 내역)</h1><div className='overflow-x-auto'><table className='w-full text-sm text-left border-collapse'>
      <thead className='bg-slate-50'><tr><th className='p-4 border'>날짜</th><th className='p-4 border'>이름</th><th className='p-4 border'>기관</th><th className='p-4 border'>유형</th><th className='p-4 border'>내용</th></tr></thead>
      <tbody>{inquiries.map((iq: any) => (<tr key={iq.id}><td className='p-4 border'>{new Date(iq.created_at).toLocaleDateString()}</td><td className='p-4 border'>{iq.name}</td><td className='p-4 border'>{iq.organization}</td><td className='p-4 border'>{iq.type}</td><td className='p-4 border'>{iq.content}</td></tr>))}</tbody>
    </table>{inquiries.length === 0 && <p className='text-center py-12 text-slate-400'>아직 문의 내역이 없습니다.</p>}</div></div>
  );
}
