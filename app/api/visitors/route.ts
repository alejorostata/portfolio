import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GOATCOUNTER_API_TOKEN;

  if (!token) {
    // Dev fallback: show a mock number when no token is set
    return NextResponse.json({ count: 142 });
  }

  try {
    // GoatCounter API: fetch all-time hits grouped by page path
    // start = your account launch date, end = today
    const start = '2026-08-01';
    const end = new Date().toISOString().split('T')[0];

    const res = await fetch(
      `https://alejorostata.goatcounter.com/api/v0/stats/hits?start=${start}&end=${end}&limit=200`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        // Cache for 1 hour — avoids hitting GoatCounter on every page load
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ count: null }, { status: 502 });
    }

    const data = await res.json();

    // GoatCounter returns time-series data per path.
    // data.total = total visit count across all paths and the queried date range.
    const count: number = data?.total ?? 0;

    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
