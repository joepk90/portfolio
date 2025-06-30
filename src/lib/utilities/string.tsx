type EmailProps = {
  obfuscated: string;
};

export const obfuscatesEmail = ({ obfuscated }: EmailProps) => (
  <a href={`mailto:${obfuscated}`} dangerouslySetInnerHTML={{ __html: obfuscated }} />
);

/**
 * Converts a character to an HTML entity.
 */
const toHtmlEntity = (char: string): string => `&#${char.charCodeAt(0)};`;

/**
 * Obfuscates an email address for use in innerHTML — both href and visible text.
 */
export function obfuscatedEmailHTML(email: string): string {
  const obfuscatedText = email.split('').map(toHtmlEntity).join('');
  const obfuscatedHref = 'mailto:' + email.split('').map(toHtmlEntity).join('');

  return obfuscatedHref;
}
