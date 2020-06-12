/** @jsx jsx */
import { jsx, Text, Label, LabelProps } from 'theme-ui'
import { FC, ChangeEvent, forwardRef, ReactNode } from 'react'
import { CheckDisable, Change, ForwardRef } from '../common-types'
import { ifStyle } from '../../lib/if-prop'

type ToggleProps = Partial<CheckDisable> & Change

const Input: FC<CheckDisable & Change> = ({ onChange = () => {}, ...rest }) => (
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

const ToggleHandler: FC<CheckDisable> = ({ checked, disabled, ...rest }) => (
  <div
    sx={{
      width: '1.75rem',
      height: TOGGLE_HEIGHT,
      borderRadius: TOGGLE_HEIGHT,
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
        width: `calc(${TOGGLE_HEIGHT} - 3px)`,
        height: `calc(${TOGGLE_HEIGHT} - 3px)`,
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
          left: `calc(100% - (${TOGGLE_HEIGHT} - 2px))`,
          boxShadow: 'none',
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

export const Wrapper: ForwardRef<
  HTMLLabelElement,
  Partial<CheckDisable> & LabelProps
> = forwardRef(({ disabled, ...rest }, ref) => (
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
      cursor: disabled ? 'not-allowed' : 'pointer',
    }}
    {...rest}
  />
))

export const Toggle: ForwardRef<
  HTMLLabelElement,
  ToggleProps & { children: ReactNode }
> = forwardRef(
  ({ disabled = false, checked = false, onChange, children, ...rest }, ref) => {
    return (
      <Wrapper disabled={disabled} {...rest} ref={ref}>
        <Text>{children}</Text>
        <Input disabled={disabled} checked={checked} onChange={onChange} />
        <ToggleHandler
          disabled={disabled}
          checked={checked}
          data-testid="ToggleHandler"
        />
      </Wrapper>
    )
  },
)
