import { StyleOptions } from '../types';

const casualSynonyms: Record<string, string[]> = {
  'utilize': ['use', 'work with'],
  'therefore': ['so', 'that\'s why'],
  'additionally': ['also', 'plus'],
  'however': ['but', 'though'],
  'demonstrate': ['show', 'prove'],
};

const academicSynonyms: Record<string, string[]> = {
  'use': ['utilize', 'employ', 'implement'],
  'show': ['demonstrate', 'indicate', 'illustrate'],
  'but': ['however', 'nevertheless', 'conversely'],
  'also': ['furthermore', 'moreover', 'additionally'],
  'think': ['postulate', 'hypothesize', 'theorize'],
};

const casualStarters = [
  'You know,',
  'I think',
  'Basically,',
  'Look,',
  'Here\'s the thing:',
];

const academicStarters = [
  'It is worth noting that',
  'Research suggests that',
  'Evidence indicates that',
  'One could argue that',
  'Upon analysis,',
];

export function humanizeText(text: string, options: StyleOptions): string {
  let processed = text;
  
  // Apply transformations based on selected tone
  if (options.tone === 'casual') {
    processed = replaceFormalWords(processed, casualSynonyms);
    processed = addSentenceStarters(processed, casualStarters, options.creativity);
    processed = addContractions(processed);
  } else if (options.tone === 'academic') {
    processed = replaceFormalWords(processed, academicSynonyms);
    processed = addSentenceStarters(processed, academicStarters, options.creativity);
  } else {
    // Balanced approach
    processed = balancedTransformation(processed, options.creativity);
  }
  
  // Preserve keywords if option is enabled
  if (options.preserveKeywords) {
    processed = preserveKeywords(processed, text);
  }
  
  return processed;
}

function replaceFormalWords(text: string, synonyms: Record<string, string[]>): string {
  Object.entries(synonyms).forEach(([word, alternatives]) => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    text = text.replace(regex, () => 
      alternatives[Math.floor(Math.random() * alternatives.length)]
    );
  });
  return text;
}

function addSentenceStarters(text: string, starters: string[], creativity: number): string {
  const sentences = text.split(/[.!?]+\s+/);
  return sentences
    .map((sentence, index) => {
      if (index > 0 && Math.random() < creativity * 0.3) {
        return `${starters[Math.floor(Math.random() * starters.length)]} ${sentence}`;
      }
      return sentence;
    })
    .join('. ');
}

function addContractions(text: string): string {
  return text
    .replace(/\b(I am)\b/g, "I'm")
    .replace(/\b(You are)\b/g, "You're")
    .replace(/\b(It is)\b/g, "It's")
    .replace(/\b(That is)\b/g, "That's")
    .replace(/\b(cannot)\b/g, "can't")
    .replace(/\b(will not)\b/g, "won't");
}

function balancedTransformation(text: string, creativity: number): string {
  // Mix casual and academic elements based on creativity level
  const mixedSynonyms = {
    ...casualSynonyms,
    ...academicSynonyms,
  };
  
  let processed = replaceFormalWords(text, mixedSynonyms);
  
  if (Math.random() < creativity * 0.5) {
    processed = addSentenceStarters(
      processed,
      [...casualStarters, ...academicStarters],
      creativity * 0.5
    );
  }
  
  return processed;
}

function preserveKeywords(processed: string, original: string): string {
  // Extract potential keywords (capitalized words and technical terms)
  const keywords = original.match(/\b[A-Z][a-z]+\b|\b[A-Z]+\b/g) || [];
  
  // Preserve each keyword in the processed text
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    processed = processed.replace(regex, keyword);
  });
  
  return processed;
}