'use client';

import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Configurable offset for baseline display count
const VISITOR_OFFSET = 5000;

export const VisitorCounter: React.FC = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const fetchCount = async () => {
      try {
        // Fetch with no-store cache control
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

    // Defer execution until browser idle to ensure 0 impact on initial page load speed
    const deferFetch = () => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          fetchCount();
          intervalId = setInterval(fetchCount, 15000);
        });
      } else {
        setTimeout(() => {
          fetchCount();
          intervalId = setInterval(fetchCount, 15000);
        }, 300);
      }
    };

    deferFetch();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  // Hide while initial loading or if API fails
  if (loading || count === null) return null;

  const totalVisits = count + VISITOR_OFFSET;

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700/60 text-slate-400 font-semibold text-[11px] transition-all"
      title="Live portfolio visits tracked by GoatCounter"
    >
      <Users className="w-3 h-3 text-slate-400 shrink-0" aria-hidden="true" />
      <span>{totalVisits.toLocaleString()} {t('footer.visits')}</span>
    </span>
  );
};
