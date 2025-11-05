"use client"

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const lines = content.split('\n');
  const elements: JSX.Element[] = [];
  let inList = false;
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside mb-4 space-y-1">
          {listItems.map((item, i) => (
            <li key={i} className="text-foreground">{item}</li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Headers
    if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={`h3-${index}`} className="text-xl font-bold mt-6 mb-3 text-foreground">
          {trimmed.replace(/^###\s*/, '')}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={`h2-${index}`} className="text-2xl font-bold mt-8 mb-4 text-foreground">
          {trimmed.replace(/^##\s*/, '')}
        </h2>
      );
      return;
    }

    if (trimmed.startsWith('# ')) {
      flushList();
      elements.push(
        <h1 key={`h1-${index}`} className="text-3xl font-bold mt-10 mb-6 text-foreground">
          {trimmed.replace(/^#\s*/, '')}
        </h1>
      );
      return;
    }

    // List items
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!inList) {
        flushList();
        inList = true;
      }
      listItems.push(trimmed.replace(/^[-*]\s*/, ''));
      return;
    }

    // Empty line
    if (trimmed === '') {
      flushList();
      if (elements.length > 0 && elements[elements.length - 1].type !== 'br') {
        elements.push(<br key={`br-${index}`} />);
      }
      return;
    }

    // Regular paragraph
    flushList();
    elements.push(
      <p key={`p-${index}`} className="mb-4 text-foreground leading-relaxed">
        {trimmed}
      </p>
    );
  });

  flushList();

  return <div className="prose prose-lg dark:prose-invert max-w-none">{elements}</div>;
}

