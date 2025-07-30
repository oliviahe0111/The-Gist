'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyDateProps {
  dateStr: string;
  className?: string;
}

export function ClientOnlyDate({ dateStr, className = '' }: ClientOnlyDateProps) {
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const date = new Date(dateStr);
    const formatted = date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    setFormattedDate(formatted);
  }, [dateStr]);

  if (!isClient) {
    // Return a static fallback for SSR
    return <span className={className}>Loading...</span>;
  }

  return <span className={className}>{formattedDate}</span>;
}
