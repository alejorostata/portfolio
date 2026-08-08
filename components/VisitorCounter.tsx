'use client';

import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Set to 0 to show exact live raw count from GoatCounter
const VISITOR_OFFSET = 0;

export const VisitorCounter: React.FC = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
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

    fetchCount();

    // Poll live count every 15 seconds
    const interval = setInterval(fetchCount, 15000);

    return () => clearInterval(interval);
  }, []);

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
