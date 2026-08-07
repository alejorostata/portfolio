import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GOATCOUNTER_API_TOKEN;

  if (!token) {
    // Dev fallback: show a mock number when no token is set
    return NextResponse.json({ count: 142 });
  }

  try {
    // start = your GoatCounter account launch date
    // end = tomorrow in UTC to account for UTC+8 Manila timezone offset
    //       (visits recorded on "2026-08-08 Manila" = "2026-08-07 UTC")
    const start = '2026-08-01';
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 1);
    const end = endDate.toISOString().split('T')[0];

    const res = await fetch(
      `https://alejorostata.goatcounter.com/api/v0/stats/hits?start=${start}&end=${end}&limit=200`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        // Cache for 5 minutes — balance between freshness and API rate limits
        next: { revalidate: 300 },
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
