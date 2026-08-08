import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Authenticated GoatCounter Stats API — real-time, zero cache delay
// Returns the same data as the GoatCounter dashboard
const STATS_API_URL = 'https://alejorostata.goatcounter.com/api/v0/stats/total';

export async function GET() {
  const token = process.env.GOATCOUNTER_API_TOKEN;

  if (!token) {
    return NextResponse.json({ count: null }, { status: 500 });
  }

  try {
    const res = await fetch(STATS_API_URL, {
      cache: 'no-store',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ count: null }, { status: 502 });
    }

    const data = await res.json();

    // The authenticated API returns { total: number } — this is the exact
    // same real-time count that the GoatCounter admin dashboard shows.
    const count = typeof data?.total === 'number' ? data.total : 0;

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
