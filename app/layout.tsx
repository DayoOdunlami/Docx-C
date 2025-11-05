import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doc X Platform - Intelligent Knowledge Experiences",
  description: "Transform structured content into intelligent, adaptive web experiences with AI chat, voice narration, and role-based personalization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

