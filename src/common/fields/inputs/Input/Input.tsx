import type { FC } from 'react'

interface IInput extends React.ComponentPropsWithRef<'input'> {
  isLoading?: boolean
}

export const Input: FC<IInput> = () => {
  return <div>Input</div>
}
