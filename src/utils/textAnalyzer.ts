export function calculateTextStats(text: string) {
  const words = text.trim().split(/\s+/).length;
  const sentences = text.split(/[.!?]+\s+/).length;
  const avgWordsPerSentence = words / sentences;
  
  // Calculate reading time (assuming 200 words per minute)
  const readingTime = Math.ceil(words / 200);
  
  // Calculate complexity based on average words per sentence
  const complexity = Math.min(Math.ceil((avgWordsPerSentence / 20) * 100), 100);
  
  // Calculate formality score based on word choice
  const formalWords = text.match(/\b(therefore|furthermore|consequently|moreover|thus)\b/gi) || [];
  const contractions = text.match(/\b(won't|can't|shouldn't|couldn't|wouldn't|ain't|y'all)\b/gi) || [];
  
  const formalityScore = Math.min(
    Math.ceil(((formalWords.length * 10) - (contractions.length * 5)) / words * 100),
    100
  );
  
  return {
    wordCount: words,
    readingTime,
    complexity,
    formalityScore: Math.max(formalityScore, 0),
  };
}