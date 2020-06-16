import {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  FormEvent,
} from 'react'

export type ForwardRef<T, P> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>

export type SizeProps = {
  width?: string | number
  height?: string | number
}

export type Disabled = {
  disabled: boolean
}

export type Check = {
  checked: boolean
}

export type ChangeBoolean = {
  //onChange?: ((value: boolean) => void) | ((event: FormEvent<HTMLLabelElement>) => void)
  onChange?: (value: boolean) => void
}

export type ChangeNumber = {
  onChange?: (value: number) => void
}
