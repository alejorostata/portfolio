import { NextResponse } from 'next/server';

// Official GoatCounter counter endpoint — no API token required once you enable
// "Allow adding visitor counts on your website" in GoatCounter site settings.
// The special path "TOTAL" returns the all-time site-wide visitor total.
// Docs: https://www.goatcounter.com/help/visitor-counter#json-10309
const COUNTER_URL = 'https://alejorostata.goatcounter.com/counter/TOTAL.json';

export async function GET() {
  try {
    const res = await fetch(COUNTER_URL, {
      // Cache for 5 minutes — GoatCounter's own cache is up to 4 hours,
      // so there's no benefit going lower than that on our end.
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return NextResponse.json({ count: null }, { status: 502 });
    }

    const data = await res.json();

    // GoatCounter returns count as a pre-formatted string with thousands separators
    // e.g. "1,234" — parse it to a raw number so we can format it ourselves.
    const raw = data?.count ?? '0';
    const count = parseInt(String(raw).replace(/[^0-9]/g, ''), 10) || 0;

    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
