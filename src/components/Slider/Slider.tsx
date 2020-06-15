/** @jsx jsx */
import { jsx, LabelProps, Label } from 'theme-ui'
import { ChangeEvent, forwardRef, ReactNode } from 'react'
import { Disabled, ChangeNumber, ForwardRef, SizeProps } from '../common-types'
import { ifStyle } from '../../lib/if-prop'
import { disabledCursor } from '../common-style'

export type SliderProps = Partial<Disabled> &
  ChangeNumber & {
    min?: number
    max?: number
    value: number
    step?: number
    label: string
  }

const thumb = {
  appearance: 'none',
  width: 1,
  height: 1,
  backgroundColor: 'background',
  border: '2px solid',
  borderColor: 'primary',
  borderRadius: 9999,
  boxShadow: 1,
}

export const Slider: ForwardRef<
  HTMLLabelElement,
  SliderProps & LabelProps & SizeProps & { children?: ReactNode }
> = forwardRef(
  (
    {
      disabled = false,
      label,
      min = 0,
      max = 1,
      value,
      step = 0.1,
      onChange = () => {},
      ...rest
    },
    ref,
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      !disabled && onChange(parseFloat(e.currentTarget.value))
    }

    const thumbDisabled = { ...thumb, ...ifStyle(disabled, { borderColor: 'darkGray' }) }

    return (
      <Label
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'text',
          fontWeight: 0,
          fontSize: 0,
          lineHeight: 1,
          whiteSpace: 'nowrap',
          fontFamily: 'body',
          paddingRight: 2,
        }}
      >
        {label}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          sx={{
            height: '0.2rem', // TODO: from props, and usePx
            appearance: 'none',
            borderRadius: 9999,
            backgroundColor: 'primary',
            ...disabledCursor(disabled),
            ':focus': {
              outline: 'none',
              color: 'primary',
            },
            ...{
              '&::-webkit-slider-thumb': thumbDisabled,
              '&::-moz-range-thumb': thumbDisabled,
              '&::-ms-thumb': thumbDisabled,
            },
            ...ifStyle(disabled, { backgroundColor: 'darkGray' }),
          }}
          onChange={handleChange}
        />
        <input
          type={'number'}
          sx={{
            color: 'text',
            textAlign: 'center',
            fontWeight: 0,
            fontSize: 0,
            lineHeight: 1,
            fontFamily: 'body',
            width: 5,
          }}
          value={value}
          onChange={handleChange}
        />
      </Label>
    )
  },
)
