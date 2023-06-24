export interface Token {
  token: string
  foreground: string
  background?: string
}

export const rules: Token[] = [
  {
    token: 'keyword.md',
    foreground: '#EF596F'
  },
  {
    token: 'strong.md',
    foreground: '#D8985F'
  },
  {
    token: 'emphasis.md',
    foreground: '#d55fde'
  },
  {
    token: 'string.link.md',
    foreground: '#d55fde'
  }
]