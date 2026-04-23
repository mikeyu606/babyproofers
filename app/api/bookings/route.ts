import { NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebaseAdmin';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, date, time, notes } = body;

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const booking = {
      name,
      email,
      date,
      time,
      notes: notes ?? '',
      createdAt: new Date().toISOString()
    };

    const db = getAdminDb();
    await db.collection('consultationBookings').add(booking);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Unable to create booking at this time.' },
      { status: 500 }
    );
  }
}
