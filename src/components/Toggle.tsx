/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC, ChangeEvent, Fragment } from 'react'
import { CheckDisable, Change } from './common-types'
import { ifStyle } from '../lib/if-prop'

type ToggleProps = Partial<CheckDisable> & Change

const Input: FC<
  CheckDisable & { onChange: (e: ChangeEvent<HTMLInputElement>) => void }
> = ({ disabled, checked, onChange }) => (
  <input
    type="checkbox"
    disabled={disabled}
    checked={checked}
    onChange={onChange}
    sx={{
      visibility: 'hidden',
      position: 'absolute',
      height: 0,
      width: 0,
      opacity: 0,
      overflow: 'hidden',
      backgroundColor: 'transparent',
      zIndex: -1,
    }}
  />
)

const ToggleHandler: FC<CheckDisable> = ({ checked, disabled }) => (
  <Fragment>
    <div
      sx={{
        width: '1.75rem',
        height: '0.875rem',
        borderRadius: '0.875rem',
        transitionDelay: '0.12s',
        transitionDuration: '0.2s',
        transitionProperty: 'background, border',
        transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        position: 'relative',
        border: '1px solid transparent',
        backgroundColor: 'lightGray',
        padding: 0,
        ...ifStyle(disabled, { borderColor: 'darkGray' }),
        ...ifStyle(checked, {
          backgroundColor: 'primary',
        }),
        ...ifStyle(checked && disabled, { backgroundColor: 'lightGray' }),
      }}
    >
      <span
        sx={{
          width: 'calc(0.875rem - 3px)',
          height: 'calc(0.875rem - 3px)',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: '1px',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0 1px 2px 0, rgba(0, 0, 0, 0.2) 0 1px 3px 0',
          transition: 'left 280ms cubic-bezier(0, 0, 0.2, 1)',
          borderRadius: '50%',
          border: '1px solid transparent',
          backgroundColor: 'background',
          ...ifStyle(checked, {
            left: 'calc(100% - (0.875rem - 2px))',
            boxShadow: 'none',
          }),
          ...ifStyle(disabled, {
            backgroundColor: 'darkGray',
            boxShadow: 'none',
            borderColor: 'darkGray',
          }),
        }}
      />
    </div>
  </Fragment>
)

export const Label: FC<Partial<CheckDisable>> = ({ children, disabled }) => (
  <label
    sx={{
      // '-webkit-tap-highlight-color': '0',
      display: 'inline-block',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      paddingTop: 1,
      paddingBottom: 1,
      paddingLeft: 0,
      paddingRight: 0,
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
    }}
  >
    {children}
  </label>
)

export const Toggle: FC<ToggleProps> = ({
  disabled = false,
  checked = false,
  onChange = () => {},
  children,
}) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    onChange(event.currentTarget.checked)
  }

  return (
    <Label disabled={disabled}>
      {children}
      <Input disabled={disabled} checked={checked} onChange={handleChange} />
      <ToggleHandler disabled={disabled} checked={checked} />
    </Label>
  )
}
