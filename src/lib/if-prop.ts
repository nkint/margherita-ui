import { SxStyleProp } from 'theme-ui'

export const ifStyle = (
  condition: boolean,
  style: SxStyleProp,
  elseStyle: SxStyleProp = {},
) => {
  return condition ? style : elseStyle
}
