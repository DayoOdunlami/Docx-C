"use client"

import { useState } from "react"
import { Share2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface ShareButtonProps {
  sectionTitle: string;
  sectionSlug: string;
  documentSlug: string;
  domain: string;
}

export function ShareButton({ sectionTitle, sectionSlug, documentSlug, domain }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${domain}/${documentSlug}#${sectionSlug}`
    : `https://docx.platform/${domain}/${documentSlug}#${sectionSlug}`;

  const handleShare = async () => {
    try {
      // Try Web Share API first (mobile)
      if (navigator.share) {
        await navigator.share({
          title: sectionTitle,
          text: `Check out this section: ${sectionTitle}`,
          url: shareUrl,
        });
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        toast.success("Link copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      // User cancelled or error occurred
      if (error instanceof Error && error.name !== 'AbortError') {
        // Fallback to clipboard on error
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        toast.success("Link copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleShare}
      className="gap-2"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          Share
        </>
      )}
    </Button>
  );
}

