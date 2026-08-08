import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Official GoatCounter counter endpoint — returns live site-wide visitor total.
const BASE_COUNTER_URL = 'https://alejorostata.goatcounter.com/counter/TOTAL.json';

export async function GET() {
  try {
    // Append timestamp query parameter to bypass upstream HTTP caching completely
    const liveUrl = `${BASE_COUNTER_URL}?_t=${Date.now()}`;
    
    const res = await fetch(liveUrl, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ count: null }, { status: 502 });
    }

    const data = await res.json();

    // GoatCounter returns count as a pre-formatted string with thousands separators (e.g. "1,234")
    const raw = data?.count ?? '0';
    const count = parseInt(String(raw).replace(/[^0-9]/g, ''), 10) || 0;

    return NextResponse.json(
      { count },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
        },
      }
    );
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
