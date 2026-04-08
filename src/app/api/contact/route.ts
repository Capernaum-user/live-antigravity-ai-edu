import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organization, phone, email, type, content } = body;

    // 테이블이 없으면 생성 (예시 목적)
    await query(
      CREATE TABLE IF NOT EXISTS inquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        organization VARCHAR(200),
        phone VARCHAR(50),
        email VARCHAR(100),
        type VARCHAR(100),
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    );

    await query(
      'INSERT INTO inquiries (name, organization, phone, email, type, content) VALUES (?, ?, ?, ?, ?, ?)',
      [name, organization, phone, email, type, content]
    );

    return NextResponse.json({ message: 'Success' });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
