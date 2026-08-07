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

    // Sum count_unique across all page paths for total unique visitor estimate
    // For a single-page portfolio, this equals the root "/" unique visits
    const hits: { count: number; count_unique: number }[] = data?.hits ?? [];
    const totalUnique = hits.reduce((sum, hit) => sum + (hit.count_unique ?? 0), 0);

    return NextResponse.json({ count: totalUnique });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
