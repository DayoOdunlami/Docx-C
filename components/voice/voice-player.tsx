"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Volume2, Pause, Play, VolumeX } from "lucide-react"
import { toast } from "sonner"

interface VoicePlayerProps {
  content: string;
  sectionTitle: string;
}

export function VoicePlayer({ content, sectionTitle }: VoicePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Simulate audio generation and playback
  const handlePlay = async () => {
    if (isPlaying) {
      // Pause
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);
    toast.info("Generating audio... (Mock)");

    // Simulate TTS generation delay
    setTimeout(() => {
      setIsLoading(false);
      setIsPlaying(true);
      
      // Mock audio - in real implementation, this would be from OpenAI TTS API
      // For now, we'll simulate progress
      const estimatedDuration = Math.ceil(content.split(' ').length / 2.5) * 1000; // ~2.5 words/sec
      setDuration(estimatedDuration);
      
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 100;
        setProgress(currentProgress);
        
        if (currentProgress >= estimatedDuration) {
          clearInterval(interval);
          setIsPlaying(false);
          setProgress(0);
          toast.success("Audio playback complete");
        }
      }, 100);

      // Store interval for cleanup
      (audioRef.current as any) = { interval };
      
      toast.success("Audio playback started");
    }, 1500);
  };

  useEffect(() => {
    const currentAudio = audioRef.current;
    return () => {
      if (currentAudio && (currentAudio as any).interval) {
        clearInterval((currentAudio as any).interval);
      }
    };
  }, []);

  const handleStop = () => {
    if (audioRef.current && (audioRef.current as any).interval) {
      clearInterval((audioRef.current as any).interval);
    }
    setIsPlaying(false);
    setProgress(0);
    toast.info("Playback stopped");
  };

  const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;
  const remainingTime = duration > 0 ? Math.ceil((duration - progress) / 1000) : 0;

  return (
    <Card className="p-4 bg-gradient-to-br from-greenTints-10 to-background border-2 border-catapult-green/20">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-catapult-green flex items-center justify-center">
            <Volume2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Voice Narration</h3>
            <p className="text-xs text-muted-foreground">{sectionTitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePlay}
            disabled={isLoading}
            className="gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Generating...
              </>
            ) : isPlaying ? (
              <>
                <Pause className="h-4 w-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Play
              </>
            )}
          </Button>
          {isPlaying && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleStop}
              className="gap-2"
            >
              <VolumeX className="h-4 w-4" />
              Stop
            </Button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="space-y-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-catapult-green h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{Math.floor(progress / 1000)}s</span>
            <span>{remainingTime}s remaining</span>
          </div>
        </div>
      )}

      {!isPlaying && !isLoading && (
        <p className="text-xs text-muted-foreground">
          💡 Listen to this section read aloud. Perfect for accessibility or hands-free learning.
        </p>
      )}
    </Card>
  );
}

