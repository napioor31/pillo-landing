const NBSP = '\u00A0';
// Matches a single-letter word (including Polish characters) followed by a space
const ORPHAN_RE = /(\s|^)([a-zA-Z\u00e0-\u024f\u0104\u0106\u0118\u0141\u0143\u00d3\u015a\u0179\u017b\u0105\u0107\u0119\u0142\u0144\u00f3\u015b\u017a\u017c])\s/g;

export function preventOrphans(text) {
  if (!text || typeof text !== 'string') return text;
  return text.replace(ORPHAN_RE, (_, before, letter) => `${before}${letter}${NBSP}`);
}
