/** @jsx jsx */
import {
  jsx,
  Text,
  Label,
  LabelProps,
  SxStyleProp,
  Box,
  BoxProps,
  TextProps,
  InputProps,
} from 'theme-ui'
import { FC, ChangeEvent, forwardRef, ReactNode, ElementType, Ref } from 'react'
import { Check, Disabled, ForwardRef, SizeProps, ChangeBoolean } from '../common-types'
import { disabledCursor } from '../common-style'
import { usePx } from '../../lib/use-px'
import { ifStyle } from '../../lib/if-prop'

type ToggleProps = Partial<Disabled & Check> &
  ChangeBoolean & {
    textProps?: TextProps & { 'data-testid': string }
    wrapperProps?: LabelProps & { 'data-testid': string }
    containerProps?: BoxProps & { 'data-testid': string }
    handleProps?: BoxProps & { 'data-testid': string }
    inputProps?: Omit<InputProps, 'onChange'> & { 'data-testid'?: string }

    textRef?: Ref<HTMLDivElement> | undefined
    containerRef?: Ref<HTMLDivElement> | undefined
    handleRef?: Ref<HTMLDivElement> | undefined // NOTE: this should be HTMLSpanElement but there is a but in <Box as="span"/> type
    inputRef?: Ref<HTMLInputElement> | undefined
  }

const Input: FC<
  Check &
    Disabled &
    ChangeBoolean & { inputRef: ToggleProps['inputRef'] } & ToggleProps['inputProps']
> = ({ inputRef, onChange = () => {}, ...rest }) => (
  <input
    ref={inputRef}
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

const ToggleContainer: FC<
  Check &
    Disabled &
    SizeProps & {
      containerProps?: BoxProps
      handleProps?: BoxProps
      containerRef?: Ref<HTMLDivElement>
      handleRef?: Ref<HTMLDivElement>
    }
> = ({
  width,
  height,
  checked,
  disabled,
  containerRef,
  containerProps,
  handleRef,
  handleProps,
}) => {
  console.log(
    ifStyle(checked, {
      bg: 'primary',
    }),
  )

  return (
    <Box
      ref={containerRef}
      sx={{
        width: width,
        height: height,
        borderRadius: height,
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
            left: `calc(100% - (${height} - 2px))`,
          },
        },
        'input:checked:disabled + &': { bg: 'lightGray' },
      }}
      {...containerProps}
    >
      <Box
        as="span"
        ref={handleRef}
        sx={{
          width: `calc(${height} - 3px)`,
          height: `calc(${height} - 3px)`,
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
        {...handleProps}
      />
    </Box>
  )
}

const Wrapper: ForwardRef<HTMLLabelElement, Disabled & LabelProps> = forwardRef(
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

type TT<KK extends ElementType<any>> = ForwardRef<
  HTMLLabelElement,
  ToggleProps &
    Omit<LabelProps, 'onChange'> &
    SizeProps & { children?: ReactNode } & {
      sx?: SxStyleProp
    } & Omit<React.ComponentPropsWithRef<KK>, 'onChange'>
>

export const Toggle: TT<'label'> = forwardRef(
  (
    {
      disabled = false,
      checked = false,
      onChange,
      children,
      width = 2,
      height = 1,

      textProps,
      wrapperProps,
      containerProps,
      handleProps,
      inputProps,

      textRef,
      containerRef,
      handleRef,
      inputRef,

      ...rest
    },
    ref,
  ) => {
    const w: any = usePx(width)
    const h: any = usePx(height)

    return (
      <Wrapper disabled={disabled} {...rest} {...wrapperProps} ref={ref}>
        <Text {...textProps} ref={textRef}>
          {children}
        </Text>
        <Input
          inputRef={inputRef}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          {...inputProps}
        />
        <ToggleContainer
          width={w}
          height={h}
          disabled={disabled}
          checked={checked}
          containerProps={containerProps}
          handleProps={handleProps}
        />
      </Wrapper>
    )
  },
)
