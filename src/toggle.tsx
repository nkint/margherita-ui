/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { ICheckDisable, IChange } from './api'

type ToggleProps = Partial<ICheckDisable> & IChange

const HiddenInput: React.FC<
  {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  } & ICheckDisable
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

const Handler: React.FC<ICheckDisable> = ({ checked, disabled }) => (
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
      backgroundColor: 'background',
      ...(checked
        ? {
            left: 'calc(100% - (0.875rem - 2px))',
            boxShadow: 'none',
          }
        : {}),
      ...(disabled
        ? { backgroundColor: 'darkGray', boxShadow: 'none', borderColor: 'darkGray' }
        : {}),
    }}
  />
)

export const Body: React.FC<ICheckDisable> = ({ checked, disabled, children }) => (
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
      ...(checked
        ? {
            backgroundColor: 'primary',
          }
        : {}),
      ...(checked && disabled ? { backgroundColor: 'lightGray' } : {}),
    }}
  >
    {children}{' '}
  </div>
)

export const LabelContainer: React.FC<ICheckDisable> = ({
  children,
  disabled,
  checked,
}) => (
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
      ...(checked ? {} : {}),
    }}
  >
    {children}
  </label>
)

export const Toggle: React.FC<ToggleProps> = ({
  disabled = false,
  checked = false,
  onChange = () => {},
}) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange(event.currentTarget.checked)
  }

  const cd: ICheckDisable = { checked, disabled }

  return (
    <div>
      <LabelContainer {...cd}>
        <HiddenInput {...cd} onChange={handleChange} />
        <Body {...cd}>
          <Handler {...cd} />
        </Body>
      </LabelContainer>
    </div>
  )
}
