import { useThemeUI, css, Theme } from 'theme-ui'

export function themeToPx(
  theme: Theme,
  x: number | string,
  type: 'sizes' | 'space' = 'sizes',
) {
  if (theme == null) {
    return null
  }

  const sizeOrSpace = theme[type]

  if (sizeOrSpace == null) {
    return `${x}px`
  }

  if (Array.isArray(sizeOrSpace) && typeof x === 'number') {
    return sizeOrSpace[x] || `${x}px`
  }

  const fromTheme: any = css({ [type]: x })(theme)
  // NOTE: this is any because seems that SerializedStyles is wrong
  // from node_modules/@emotion/utils/types/index.d.ts
  return typeof fromTheme[type] === 'number' ? `${fromTheme[type]}px` : x
}

export const usePx = (x: number | string, type: 'sizes' | 'space' = 'sizes') => {
  const { theme } = useThemeUI()
  return themeToPx(theme, x, type)
}
