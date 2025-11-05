"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-catapult-green">
              CATAPULT
            </div>
            <div className="text-sm text-muted-foreground hidden sm:block">
              Doc X Platform
            </div>
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Link href="/demo/siz">
            <Button variant="ghost" size="sm">
              SIZ Playbook
            </Button>
          </Link>
          <Link href="/demo/credo">
            <Button variant="ghost" size="sm">
              CReDo Guide
            </Button>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

