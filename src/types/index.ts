export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface PageProps {
  children: React.ReactNode;
}

export interface TextStats {
  wordCount: number;
  readingTime: number;
  complexity: number;
  formalityScore: number;
}

export interface StyleOptions {
  tone: 'casual' | 'balanced' | 'academic';
  creativity: number;
  preserveKeywords: boolean;
}