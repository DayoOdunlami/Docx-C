"use client"

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/playbook/breadcrumbs';
import { ReadingTime } from '@/components/playbook/reading-time';
import { ShareButton } from '@/components/playbook/share-button';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MOCK_SIZ } from '@/data/mock/siz-data';
import { ContentSearch } from '@/components/playbook/content-search';
import { MarkdownContent } from '@/components/playbook/markdown-content';
import { SectionSkeleton } from '@/components/playbook/section-skeleton';
import { AnimatedSection } from '@/components/animated-section';
import { ChatWidget } from '@/components/chat/chat-widget';
import { VoicePlayer } from '@/components/voice/voice-player';
import { FeedbackWidget } from '@/components/feedback/feedback-widget';
import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts';
import { toast } from 'sonner';
import { ChevronLeft, ChevronRight, Printer } from 'lucide-react';

export default function SIZPlaybook() {
  const [currentStage, setCurrentStage] = useState('intro');
  const [currentRole, setCurrentRole] = useState('all');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Filter sections by stage and role
  // If role is "all", show all sections. Otherwise filter by role
  const visibleSections = MOCK_SIZ.sections.filter(
    s => s.stage === currentStage && 
         (currentRole === 'all' || s.roles.includes('all') || s.roles.includes(currentRole))
  );

  const currentSection = visibleSections[currentSectionIndex] || visibleSections[0];
  const currentStageData = MOCK_SIZ.stages.find(s => s.id === currentStage);

  // Simulate loading for better UX
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [currentSectionIndex, currentStage]);

  // Keyboard shortcuts - must be called before any conditional returns
  useKeyboardShortcuts({
    onSearch: () => {
      toast.info("Search coming soon! Press '/' to search");
    },
    onHelp: () => {
      toast.info("Keyboard shortcuts: / = search, ? = help, ←/→ = navigate");
    },
    onNext: () => {
      if (currentSectionIndex < visibleSections.length - 1) {
        setCurrentSectionIndex(currentSectionIndex + 1);
      }
    },
    onPrevious: () => {
      if (currentSectionIndex > 0) {
        setCurrentSectionIndex(currentSectionIndex - 1);
      }
    },
  });

  if (!currentSection) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>No sections available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="border-b bg-muted/50">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumbs
            items={[
              { label: "SIZ", href: "/demo/siz" },
              { label: currentStageData?.title || "Playbook" },
              { label: currentSection?.title || "Section" },
            ]}
          />
        </div>
      </div>

      {/* Stage Navigation */}
      <div className="bg-card border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {MOCK_SIZ.stages.map((stage, idx) => (
              <div key={stage.id} className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentStage(stage.id);
                    setCurrentSectionIndex(0);
                  }}
                  className="flex flex-col items-center group transition-all duration-200 hover:scale-105"
                >
                  <div
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center 
                      text-2xl border-3 transition-all mb-2 relative
                      ${stage.status === 'complete' 
                        ? 'bg-catapult-green border-catapult-green text-white' 
                        : stage.status === 'current'
                        ? 'bg-white border-catapult-green text-catapult-green ring-4 ring-greenTints-20'
                        : 'bg-muted border-border text-muted-foreground'
                      }
                    `}
                  >
                    {stage.status === 'complete' ? '✓' : stage.icon}
                  </div>
                  
                  <div className="text-center">
                    <div className="font-semibold text-sm">{stage.title}</div>
                    <div className="text-xs text-muted-foreground">{stage.description}</div>
                  </div>
                </button>

                {idx < MOCK_SIZ.stages.length - 1 && (
                  <div 
                    className={`h-0.5 w-16 mx-4 mt-8 ${
                      stage.status === 'complete' 
                        ? 'bg-catapult-green' 
                        : 'bg-border'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar - Section Navigation */}
          <aside className="col-span-3">
            <Card className="p-4 sticky top-32">
              <div className="mb-4">
                <Badge className="bg-catapult-green text-white">
                  {currentStageData?.title}
                </Badge>
              </div>
              <nav className="space-y-1">
                {visibleSections.map((sec, idx) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setCurrentSectionIndex(idx)}
                    className={`
                      w-full text-left px-3 py-2 rounded text-sm transition-colors
                      ${idx === currentSectionIndex
                        ? 'bg-catapult-green text-white'
                        : 'hover:bg-muted text-foreground'
                      }
                    `}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="col-span-6">
            {isLoading ? (
              <SectionSkeleton />
            ) : (
              <AnimatedSection>
                <Card className="p-8">
              {/* Section Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {currentSection.lockMode !== 'locked' && (
                      <Badge variant="outline">
                        {currentSection.lockMode === 'semi-dynamic' 
                          ? 'Adaptable content' 
                          : 'Fully dynamic'
                        }
                      </Badge>
                    )}
                    {!currentSection.roles.includes('all') && (
                      <Badge variant="secondary">
                        Role: {currentSection.roles.join(', ')}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <ReadingTime content={currentSection.content} />
                    <ContentSearch content={currentSection.content} />
                    <ShareButton
                      sectionTitle={currentSection.title}
                      sectionSlug={currentSection.slug}
                      documentSlug={MOCK_SIZ.id}
                      domain={MOCK_SIZ.domain}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => window.print()}
                      className="gap-2 no-print"
                    >
                      <Printer className="h-4 w-4" />
                      Print
                    </Button>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {currentSection.title}
                </h1>
              </div>

              {/* Content */}
              <div id="content-area">
                <MarkdownContent content={currentSection.content} />
              </div>

              {/* Voice Player */}
              <div className="mt-6">
                <VoicePlayer
                  content={currentSection.content}
                  sectionTitle={currentSection.title}
                />
              </div>

              {/* Feedback */}
              <div className="mt-6 pt-6 border-t">
                <FeedbackWidget
                  sectionId={currentSection.id}
                  sectionTitle={currentSection.title}
                />
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  disabled={currentSectionIndex === 0}
                  onClick={() => setCurrentSectionIndex(currentSectionIndex - 1)}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <Button
                  className="bg-catapult-green hover:bg-greenTints-80 gap-2"
                  disabled={currentSectionIndex === visibleSections.length - 1}
                  onClick={() => setCurrentSectionIndex(currentSectionIndex + 1)}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
              </AnimatedSection>
            )}
          </main>

          {/* Right Sidebar - Role Selector & Info */}
          <aside className="col-span-3">
            <div className="sticky top-32 space-y-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-4">View as</h3>
                <Select value={currentRole} onValueChange={setCurrentRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="station-manager">Station Manager</SelectItem>
                    <SelectItem value="operations-lead">Operations Lead</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-2">Keyboard Shortcuts</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>/</span>
                    <span>Search</span>
                  </div>
                  <div className="flex justify-between">
                    <span>?</span>
                    <span>Help</span>
                  </div>
                  <div className="flex justify-between">
                    <span>⌘+←/→</span>
                    <span>Navigate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>⌘+K</span>
                    <span>Command palette</span>
                  </div>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </div>

      {/* Chat Widget - Global */}
      <ChatWidget documentId={MOCK_SIZ.id} sectionId={currentSection.id} />

      <Footer />
    </div>
  );
}

