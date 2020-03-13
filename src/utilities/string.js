export function pluralize(count, noun, suffix = 's') {
  if (!noun) return '';
  return `${count} ${noun}${count !== 1 ? suffix : ''}`;
}
