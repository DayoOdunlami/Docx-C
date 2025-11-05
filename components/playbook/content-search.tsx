"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ContentSearchProps {
  content: string;
  onHighlight?: (searchTerm: string) => void;
}

export function ContentSearch({ content, onHighlight }: ContentSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [matches, setMatches] = useState<number[]>([]);
  const [currentMatch, setCurrentMatch] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchTerm) {
      const regex = new RegExp(searchTerm, "gi");
      const matchesArray: number[] = [];
      let match;
      while ((match = regex.exec(content)) !== null) {
        matchesArray.push(match.index);
      }
      setMatches(matchesArray);
      setCurrentMatch(0);
      onHighlight?.(searchTerm);
    } else {
      setMatches([]);
      setCurrentMatch(0);
      onHighlight?.("");
    }
  }, [searchTerm, content, onHighlight]);

  const handleNext = () => {
    if (matches.length > 0) {
      setCurrentMatch((prev) => (prev + 1) % matches.length);
      scrollToMatch(matches[(currentMatch + 1) % matches.length]);
    }
  };

  const handlePrevious = () => {
    if (matches.length > 0) {
      setCurrentMatch((prev) => (prev - 1 + matches.length) % matches.length);
      scrollToMatch(matches[(currentMatch - 1 + matches.length) % matches.length]);
    }
  };

  const scrollToMatch = (position: number) => {
    // This would scroll to the match position in the content
    // Implementation depends on how content is rendered
    const element = document.getElementById("content-area");
    if (element) {
      // Scroll to position
      element.scrollTop = position / 10; // Rough approximation
    }
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="gap-2"
      >
        <Search className="h-4 w-4" />
        Search
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search in this section</DialogTitle>
            <DialogDescription>
              Find text within the current section
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              {searchTerm && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchTerm("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            {searchTerm && matches.length > 0 && (
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  {currentMatch + 1} of {matches.length} matches
                </span>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handlePrevious}
                    disabled={matches.length === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleNext}
                    disabled={matches.length === 0}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
            {searchTerm && matches.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No matches found
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

