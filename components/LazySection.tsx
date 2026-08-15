'use client';

import React, { useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  minHeight?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({ children, minHeight = '500px' }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we are in a bot environment (Googlebot usually uses very tall viewports, but just in case, we can check user agent or just let the tall viewport trigger it)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px' } // Load well before it comes into view to avoid layout shifts
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isIntersecting ? 'auto' : minHeight }}>
      {isIntersecting ? children : null}
    </div>
  );
};
