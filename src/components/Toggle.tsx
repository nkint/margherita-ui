/** @jsx jsx */
import { jsx } from "theme-ui";
import { FC, ChangeEvent } from "react";

interface ToggleProps {
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: boolean) => void;
}

const Label: FC<{ disabled: boolean }> = ({ disabled, ...rest }) => (
  <label
    sx={{
      // '-webkit-tap-highlight-color': '0',
      display: "inline-block",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      userSelect: "none",
      py: 1,
      px: 0,
      position: "relative",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
    }}
    {...rest}
  />
);

type OnInputChange = (event: ChangeEvent<HTMLInputElement>) => void;
const Input: FC<{
  type: string;
  disabled: boolean;
  checked: boolean;
  onChange: OnInputChange;
}> = (props) => (
  <input
    sx={{
      overflow: "hidden",
      visibility: "hidden",
      height: 0,
      opacity: 0,
      width: 0,
      position: "absolute",
      backgroundColor: "transparent",
      zIndex: -1,
    }}
    {...props}
  />
);
const ToggleHandler: FC<{
  disabled: boolean;
  checked: boolean;
}> = ({ disabled, checked, ...rest }) => (
  <div
    sx={{
      width: "1.75rem",
      height: "0.875rem",
      borderRadius: "0.875rem",
      transitionDelay: "0.12s",
      transitionDuration: "0.2s",
      transitionProperty: "background, border",
      transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      position: "relative",
      border: "1px solid transparent",
      backgroundColor: "lightGray",
      padding: 0,
      ...(checked
        ? {
            backgroundColor: "primary",
          }
        : {}),
      ...(disabled
        ? {
            borderColor: "darkGray",
          }
        : {}),

      ...(disabled && checked
        ? {
            backgroundColor: "lightGray",
          }
        : {}),
    }}
    {...rest}
  >
    <span
      sx={{
        width: "calc(0.875rem - 3px)",
        height: "calc(0.875rem - 3px)",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "1px",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0 1px 2px 0, rgba(0, 0, 0, 0.2) 0 1px 3px 0",
        transition: "left 280ms cubic-bezier(0, 0, 0.2, 1)",
        borderRadius: "50%",
        backgroundColor: "background",
        ...(checked
          ? {
              left: "calc(100% - (0.875rem - 2px))",
              boxShadow: "none",
            }
          : {}),
        ...(disabled
          ? {
              backgroundColor: "darkGray",
              boxShadow: "none",
            }
          : {}),
      }}
    />
  </div>
);

export const Toggle: FC<ToggleProps> = ({
  disabled = false,
  checked = false,
  onChange,
  children,
}) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    onChange?.(event.currentTarget.checked);
  }

  return (
    <Label disabled={disabled}>
      {children}
      <Input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
      />

      <ToggleHandler disabled={disabled} checked={checked} />
    </Label>
  );
};
