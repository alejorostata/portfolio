import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// GoatCounter counter endpoints:
// 1. /counter/%2F.json returns real-time visits for the root path (/)
// 2. /counter/TOTAL.json returns background aggregate total
const ROOT_COUNTER_URL = 'https://alejorostata.goatcounter.com/counter/%2F.json';
const TOTAL_COUNTER_URL = 'https://alejorostata.goatcounter.com/counter/TOTAL.json';

export async function GET() {
  try {
    const timestamp = Date.now();
    const headers = {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
    };

    // Fetch both root path and total endpoints concurrently to guarantee real-time accuracy
    const results = await Promise.allSettled([
      fetch(`${ROOT_COUNTER_URL}?_t=${timestamp}`, { cache: 'no-store', headers }),
      fetch(`${TOTAL_COUNTER_URL}?_t=${timestamp}`, { cache: 'no-store', headers }),
    ]);

    let maxCount = 0;

    for (const res of results) {
      if (res.status === 'fulfilled' && res.value.ok) {
        try {
          const data = await res.value.json();
          const rawCount = parseInt(String(data?.count ?? '0').replace(/[^0-9]/g, ''), 10) || 0;
          const rawUnique = parseInt(String(data?.count_unique ?? '0').replace(/[^0-9]/g, ''), 10) || 0;
          maxCount = Math.max(maxCount, rawCount, rawUnique);
        } catch {
          // Skip invalid JSON
        }
      }
    }

    return NextResponse.json(
      { count: maxCount },
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
