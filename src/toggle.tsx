/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import cn from 'classnames'

interface ToggleProps {
  disabled?: boolean
  checked?: boolean
  onChange?: (event: boolean) => void
}

export const Toggle: React.FC<ToggleProps> = ({
  disabled = false,
  checked = false,
  onChange = () => {},
}) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onChange(event.currentTarget.checked)
  }

  return (
    <div
      sx={{
        ' label': {
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
          opacity: disabled ? 0.4 : 1,
        },

        ' input': {
          overflow: 'hidden',
          visibility: 'hidden',
          height: 0,
          opacity: 0,
          width: 0,
          position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: -1,
        },

        ' .body': {
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
        },

        ' .handler': {
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
        },

        ' label .checked > .handler': {
          left: 'calc(100% - (0.875rem - 2px))',
          boxShadow: 'none',
        },

        ' label .disabled': {
          borderColor: 'darkGray',
        },

        ' label .disabled > .handler': {
          backgroundColor: 'darkGray',
          boxShadow: 'none',
        },

        ' label .disabled.checked': {
          backgroundColor: 'lightGray',
        },

        ' label .checked': {
          backgroundColor: 'primary',
        },
      }}
    >
      <label>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
        />
        <div className={cn('body', { checked, disabled })}>
          <span className="handler" />
        </div>
      </label>
    </div>
  )
}
