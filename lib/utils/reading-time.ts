/**
 * Calculate estimated reading time for content
 * Assumes average reading speed of 200 words per minute
 */
export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return minutes;
}

/**
 * Format reading time as human-readable string
 */
export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return "1 minute read";
  }
  return `${minutes} minutes read`;
}

