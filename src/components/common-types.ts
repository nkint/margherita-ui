import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'

export type ForwardRef<T, P> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>

export type SizeProps = {
  width?: string | number
  height?: string | number
}

export type CheckDisable = {
  checked: boolean
  disabled: boolean
}

export type Change = {
  onChange?: (checked: boolean) => void
}
