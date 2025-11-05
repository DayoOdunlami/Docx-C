"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

interface KeyboardShortcutsOptions {
  onSearch?: () => void;
  onHelp?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onCommandPalette?: () => void;
}

export function useKeyboardShortcuts(options: KeyboardShortcutsOptions) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Command/Ctrl + K: Command palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        options.onCommandPalette?.();
        return;
      }

      // Command/Ctrl + P: Quick search
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        options.onSearch?.();
        return;
      }

      // ?: Show help
      if (e.key === '?' && !e.shiftKey) {
        e.preventDefault();
        options.onHelp?.();
        return;
      }

      // /: Focus search
      if (e.key === '/' && !e.shiftKey) {
        e.preventDefault();
        options.onSearch?.();
        return;
      }

      // Arrow keys: Navigate
      if (e.key === 'ArrowRight' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        options.onNext?.();
        return;
      }

      if (e.key === 'ArrowLeft' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        options.onPrevious?.();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [options, router]);
}

