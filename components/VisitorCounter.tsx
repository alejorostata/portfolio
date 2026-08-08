'use client';

import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Configurable offset for initial display — set to 0 anytime to show exact raw count
const VISITOR_OFFSET = 5000;

export const VisitorCounter: React.FC = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // Cache-busting fetch request for instant live updates
        const res = await fetch(`/api/visitors?_t=${Date.now()}`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (typeof data.count === 'number') {
            setCount(data.count);
          }
        }
      } catch {
        // Silently fail — visitor counter is non-critical
      } finally {
        setLoading(false);
      }
    };

    // 1. Initial live fetch on mount
    fetchCount();

    // 2. Real-time background polling every 15 seconds to capture new visits automatically without refreshing
    const interval = setInterval(fetchCount, 15000);

    return () => clearInterval(interval);
  }, []);

  // Hide while initial loading or if API fails
  if (loading || count === null) return null;

  const totalVisits = count + VISITOR_OFFSET;

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700/60 text-slate-400 font-semibold text-[11px] transition-all"
      title="Live portfolio visits tracked in real-time by GoatCounter"
    >
      {/* Live Pulsing Green Status Indicator */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>

      <Users className="w-3 h-3 text-slate-400 shrink-0" aria-hidden="true" />
      <span>{totalVisits.toLocaleString()} {t('footer.visits')}</span>
    </span>
  );
};
