const ASEEC_EMPHASIS_PHRASES = [
  'software, application, run-time system, architecture, circuit, and technology levels',
  'big data analytics, IoT, biomedical computing, and wearable imaging and vision',
  'heterogeneous processor and memory architectures',
  'implementation technology and security requirements',
  'secure and energy-efficient computer system',
  'Secure and Sustainable Computing',
  'hardware security and trust',
  'security and energy-efficiency',
  'architecture design',
  'big data computing',
  'collaborative bonds',
  'ASEEC lab',
];

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function emphasizePhrases(
  text: string,
  phrases: readonly string[] = ASEEC_EMPHASIS_PHRASES
): string {
  let result = escapeHtml(text);

  for (const phrase of phrases) {
    const pattern = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(pattern, 'gi');
    result = result.replace(regex, (match, offset, full) => {
      const before = full.slice(0, offset);
      const openTags = (before.match(/<strong>/g) || []).length;
      const closeTags = (before.match(/<\/strong>/g) || []).length;
      if (openTags > closeTags) {
        return match;
      }
      return `<strong>${match}</strong>`;
    });
  }

  return result;
}
