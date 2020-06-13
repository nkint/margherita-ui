import { SxStyleProp } from 'theme-ui'

export const ifStyle = (
  condition: boolean,
  style: SxStyleProp,
  elseStyle: SxStyleProp = {},
) => {
  return condition ? style : elseStyle
}

export const toPx = (size?: number | string): string | undefined =>
  typeof size === 'number' ? `${size}px` : size
