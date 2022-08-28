export const mixins = {
  spacing: (size: number): string => {
    const space = size * 4
    return `${space}px`
  }
}