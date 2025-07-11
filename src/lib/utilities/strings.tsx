/**
 * Converts a character to an HEX entity (slighty harder for bots to read).
 */
export const toHexEntity = (char: string): string => `&#x${char.charCodeAt(0).toString(16)};`;

/**
 * Converts a character to an HTML entity.
 */
export const toHtmlEntity = (char: string): string => `&#${char.charCodeAt(0)};`;

/**
 * Obfuscates an email address for use in innerHTML — both href and visible text.
 */

export function obfuscatedHTML(text: string): string {
  return text.split('').map(toHexEntity).join('');
}
