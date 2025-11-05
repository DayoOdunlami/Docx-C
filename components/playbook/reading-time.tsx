"use client"

import { Clock } from "lucide-react"
import { calculateReadingTime, formatReadingTime } from "@/lib/utils/reading-time"

interface ReadingTimeProps {
  content: string;
}

export function ReadingTime({ content }: ReadingTimeProps) {
  const minutes = calculateReadingTime(content);
  const formatted = formatReadingTime(minutes);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Clock className="h-4 w-4" />
      <span>{formatted}</span>
    </div>
  );
}

