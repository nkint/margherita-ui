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

const ToggleHandler: FC<SizeProps> = ({
  width = 2,
  height = 1,
  ...rest
}) => {
  const w = usePx(width)
  const h = usePx(height)

  return (
    <div
      sx={{
        width: w,
        height: h,
        borderRadius: h,
        transitionDelay: '0.12s',
        transitionDuration: '0.2s',
        transitionProperty: 'background, border',
        transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        position: 'relative',
        border: '1px solid transparent',
        bg: 'lightGray',
        p: 0,
        'input:disabled + &': {
          borderColor: 'darkGray',
          span: {
            bg: 'darkGray',
            boxShadow: 'none',
            borderColor: 'darkGray',
          },
        },
        'input:checked + &': {
          bg: 'primary',
          span: {
            left: `calc(100% - (${h} - 2px))`,
          },
        },
        'input:checked:disabled &': { bg: 'lightGray' },
      }}
      {...rest}
    >
      <span
        sx={{
          width: `calc(${h} - 3px)`,
          height: `calc(${h} - 3px)`,
          position: 'absolute',
          top: '50%',
          left: '1px',
          transition: 'left 280ms cubic-bezier(0, 0, 0.2, 1)',
          transform: 'translateY(-50%)',
          borderRadius: '50%',
          border: '1px solid transparent',
          bg: 'background',
          boxShadow: 1,
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

type TT = ForwardRef<
  HTMLLabelElement,
  ToggleProps & Omit<LabelProps, 'onChange'> & SizeProps & { children?: ReactNode }
>

export const Toggle: TT = forwardRef(
  (
    { disabled = false, checked = false, onChange, children, width, height, ...rest },
    ref,
  ) => {
    return (
      <Wrapper disabled={disabled} {...rest} ref={ref}>
        <Text>{children}</Text>
        <Input disabled={disabled} checked={checked} onChange={onChange} />
        <ToggleHandler width={width} height={height} data-testid="ToggleHandler" />
      </Wrapper>
    )
  },
)
