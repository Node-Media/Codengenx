/**
 * Tailwind CSS class name merger utility
 * Combines class names and removes duplicates
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
