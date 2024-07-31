/* eslint-disable */
import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
let useSSREffect
if (!window) {
  useSSREffect = useLayoutEffect
} else {
  useSSREffect = useEffect
}
export const useIsMounted = () => {
  const ref = useRef(true)
  useSSREffect(() => {
    return () => {
      ref.current = false
    }
  }, [])
  return useCallback(() => ref.current, [])
}
