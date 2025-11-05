"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react"
import { toast } from "sonner"

interface FeedbackWidgetProps {
  sectionId: string;
  sectionTitle: string;
}

export function FeedbackWidget({ sectionId, sectionTitle }: FeedbackWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"helpful" | "not-helpful" | null>(null);
  const [comment, setComment] = useState("");

  const handleQuickFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackType(type);
    toast.success(
      type === "helpful" 
        ? "Thanks for your feedback! 👍" 
        : "Thanks! We'll work on improving this.",
      {
        description: "Your feedback helps us improve the platform.",
      }
    );
    
    // In real implementation, send to analytics/feedback API
    console.log("Feedback submitted:", { sectionId, type, timestamp: new Date() });
  };

  const handleSubmitDetailed = () => {
    if (!feedbackType) {
      toast.error("Please select if this was helpful or not");
      return;
    }

    toast.success("Thank you for your detailed feedback!", {
      description: "We'll review this and use it to improve the platform.",
    });

    // In real implementation, send to feedback API
    console.log("Detailed feedback:", {
      sectionId,
      feedbackType,
      comment,
      timestamp: new Date(),
    });

    setComment("");
    setFeedbackType(null);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleQuickFeedback("helpful")}
        className="gap-2"
      >
        <ThumbsUp className="h-4 w-4" />
        Helpful
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleQuickFeedback("not-helpful")}
        className="gap-2"
      >
        <ThumbsDown className="h-4 w-4" />
        Not helpful
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md px-3 text-xs border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
          >
            <MessageSquare className="h-4 w-4" />
            Give feedback
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Feedback on: {sectionTitle}</DialogTitle>
            <DialogDescription>
              Your feedback helps us improve this content. What did you think?
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label className="mb-2 block">Was this section helpful?</Label>
              <RadioGroup
                value={feedbackType || ""}
                onValueChange={(value) => setFeedbackType(value as "helpful" | "not-helpful")}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="helpful" id="helpful" />
                  <Label htmlFor="helpful" className="cursor-pointer">
                    Yes, helpful
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-helpful" id="not-helpful" />
                  <Label htmlFor="not-helpful" className="cursor-pointer">
                    Not helpful
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="comment">Additional comments (optional)</Label>
              <Textarea
                id="comment"
                placeholder="Tell us more about what worked or what didn't..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-2"
                rows={4}
              />
            </div>
            <Button
              onClick={handleSubmitDetailed}
              className="w-full bg-catapult-green hover:bg-greenTints-80"
            >
              Submit Feedback
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

