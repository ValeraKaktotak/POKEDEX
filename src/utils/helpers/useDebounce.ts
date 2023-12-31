import { type FC,useEffect, useState } from 'react'

interface useDebounceProps {
  value: number | null
  delay?: number
}

export const useDebounce: FC<useDebounceProps> = ({ value, delay = 500 }) => {
  const [debouncedValue, setDebouncedValue] = useState<number | null>(value)

  useEffect(() => {
    if (!value) setDebouncedValue(value)

    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}
