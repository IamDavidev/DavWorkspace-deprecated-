

export function formatMarkdownToText(markdownStr: string): string {
  return markdownStr
    .replaceAll('\n', ' ')
    .replaceAll('#', '')
    .replaceAll('*', '')
    .replaceAll('_', '')
    .replaceAll('`', '')
    .replaceAll('>', '')
    .replaceAll('!', '')
    .replaceAll('[', '')
    .replaceAll(']', '')
    .replaceAll('\\n', '')
}