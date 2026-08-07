'use client';

import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

export const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('/api/visitors');
        if (res.ok) {
          const data = await res.json();
          setCount(data.count);
        }
      } catch {
        // Silently fail — visitor counter is non-critical
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  // Hide while loading or if API fails
  if (loading || count === null) return null;

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700/60 text-slate-400 font-semibold text-[11px]"
      title="Unique portfolio visitors tracked by GoatCounter"
    >
      <Users className="w-3 h-3 text-slate-500 shrink-0" aria-hidden="true" />
      <span>{count.toLocaleString()} visits</span>
    </span>
  );
};
