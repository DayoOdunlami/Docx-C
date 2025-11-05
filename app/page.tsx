"use client"

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-greenTints-10 to-background py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Intelligent Interactive{' '}
              <span className="text-catapult-green">Knowledge Platforms</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform static playbooks into AI-powered, voice-enabled, 
              role-adaptive experiences. Built for Catapult&apos;s innovation programmes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo/siz">
                <Button size="lg" className="bg-catapult-green hover:bg-greenTints-80">
                  View SIZ Demo
                </Button>
              </Link>
              <Link href="/demo/credo">
                <Button size="lg" variant="outline" className="border-catapult-green text-catapult-green">
                  View CReDo Demo
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Platform Capabilities
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.2}>
              <Card className="border-l-4 border-l-catapult-green">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-greenTints-20 flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Static-first architecture delivers pages in under 50ms. 
                    Critical content loads instantly, even on slow connections.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="border-l-4 border-l-catapultBlue2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <CardTitle>AI Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ask questions in natural language. Get answers with 
                    citations to source material. Powered by RAG technology.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-4">
                    <span className="text-2xl">🔊</span>
                  </div>
                  <CardTitle>Voice Enabled</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Hands-free access to any section. Perfect for on-site 
                    work or accessibility needs.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
              Built for Innovation Programmes
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Currently powering Catapult&apos;s Station Innovation Zone and 
              Critical Infrastructure Resilience programmes.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.2}>
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-catapult-green">
                    Station Innovation Zone (SIZ)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Interactive playbook guiding railway stations through 
                    innovation trials. Stage-based navigation, role-specific 
                    content, and practical templates.
                  </p>
                  <Link href="/demo/siz">
                    <Button variant="outline" className="border-catapult-green text-catapult-green">
                      Explore SIZ →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-catapultBlue1">
                    CReDo Resilience Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Critical infrastructure resilience planning. Risk assessment 
                    frameworks, cascade analysis, and sector-specific guidance.
                  </p>
                  <Link href="/demo/credo">
                    <Button variant="outline" className="border-catapultBlue1 text-catapultBlue1">
                      Explore CReDo →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
