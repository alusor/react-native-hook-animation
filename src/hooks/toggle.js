import { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

const useToggle = ((active) => {
    const value = useRef(new Animated.Value(0)).current
    const toggle = () => {
      Animated.timing(value, {
        duration: 300,
        toValue: active? 1 : 0
      }).start()
    }
    useEffect(function() {
      toggle()
    }, [active])
    return value
  })

  export default useToggle
