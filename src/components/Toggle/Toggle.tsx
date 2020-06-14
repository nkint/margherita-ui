/** @jsx jsx */
import { jsx, Text, Label, LabelProps } from 'theme-ui'
import { FC, ChangeEvent, forwardRef, ReactNode } from 'react'
import { Check, Disabled, ForwardRef, SizeProps, ChangeBoolean } from '../common-types'
import { ifStyle } from '../../lib/if-prop'
import { disabledCursor } from '../common-style'
import { usePx } from '../../lib/use-px'

type ToggleProps = Partial<Disabled & Check> & ChangeBoolean

const Input: FC<Check & Disabled & ChangeBoolean> = ({
  onChange = () => {},
  ...rest
}) => (
  <input
    data-testid="ToggleInput"
    type="checkbox"
    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
    sx={{
      visibility: 'hidden',
      position: 'absolute',
      height: 0,
      width: 0,
      opacity: 0,
      overflow: 'hidden',
      bg: 'transparent',
      zIndex: -1,
    }}
    {...rest}
  />
)

const TOGGLE_HEIGHT = '0.875rem'

const ToggleHandler: FC<Check & Disabled & SizeProps> = ({
  checked,
  disabled,
  width = 0,
  height = 0,
  ...rest
}) => {
  const w = usePx(width)
  const h = usePx(height)
  return (
    <div
      sx={{
        width: w || '1.75rem',
        height: h || TOGGLE_HEIGHT,
        borderRadius: h || TOGGLE_HEIGHT,
        transitionDelay: '0.12s',
        transitionDuration: '0.2s',
        transitionProperty: 'background, border',
        transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        position: 'relative',
        border: '1px solid transparent',
        bg: 'lightGray',
        p: 0,
        ...ifStyle(disabled, { borderColor: 'darkGray' }),
        ...ifStyle(checked, {
          bg: 'primary',
        }),
        ...ifStyle(checked && disabled, { bg: 'lightGray' }),
      }}
      {...rest}
    >
      <span
        sx={{
          width: `calc(${h || TOGGLE_HEIGHT} - 3px)`,
          height: `calc(${h || TOGGLE_HEIGHT} - 3px)`,
          position: 'absolute',
          top: '50%',
          left: '1px',
          transition: 'left 280ms cubic-bezier(0, 0, 0.2, 1)',
          transform: 'translateY(-50%)',
          borderRadius: '50%',
          border: '1px solid transparent',
          bg: 'background',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0 1px 2px 0, rgba(0, 0, 0, 0.2) 0 1px 3px 0',
          ...ifStyle(checked, {
            left: `calc(100% - (${h || TOGGLE_HEIGHT} - 2px))`,
          }),
          ...ifStyle(disabled, {
            bg: 'darkGray',
            boxShadow: 'none',
            borderColor: 'darkGray',
          }),
        }}
      />
    </div>
  )
}

export const Wrapper: ForwardRef<HTMLLabelElement, Disabled & LabelProps> = forwardRef(
  ({ disabled, ...rest }, ref) => (
    <Label
      ref={ref}
      sx={{
        // '-webkit-tap-highlight-color': '0',
        display: 'inline-block',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        py: 1,
        px: 0,
        position: 'relative',
        ...disabledCursor(disabled),
      }}
      {...rest}
    />
  ),
)

export const Toggle: ForwardRef<
  HTMLLabelElement,
  ToggleProps & SizeProps & { children: ReactNode }
> = forwardRef(
  (
    { disabled = false, checked = false, onChange, children, width, height, ...rest },
    ref,
  ) => {
    return (
      <Wrapper disabled={disabled} {...rest} ref={ref}>
        <Text>{children}</Text>
        <Input disabled={disabled} checked={checked} onChange={onChange} />
        <ToggleHandler
          disabled={disabled}
          checked={checked}
          width={width}
          height={height}
          data-testid="ToggleHandler"
        />
      </Wrapper>
    )
  },
)
