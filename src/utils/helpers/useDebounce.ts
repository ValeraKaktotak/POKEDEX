import { useEffect, useState, type FC } from 'react'

interface useDebounceProps {
  value: number | null
  delay?: number
}

export const useDebounce: FC<useDebounceProps> = ({ value, delay = 500 }) => {
  const [debouncedValue, setDebouncedValue] = useState<number | null>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}
