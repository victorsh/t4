//https://stackoverflow.com/questions/69955057/how-to-control-movement-of-a-person-in-react-three-fiber
import { useState, useEffect } from 'react'

const useControls = () => {

  interface KeyboardKeys {
    ArrowLeft: string,
    ArrowRight: string,
    ArrowUp: string,
    ArrowDown: string
  }

  const keys: KeyboardKeys = {
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ArrowUp: 'up',
    ArrowDown: 'down'
  }

  const isKeyOfKeyboardKeys = (key: string): key is keyof KeyboardKeys => {
    return key in keys
  }

  const moveFieldByKey = (key: string): string => {
    if (isKeyOfKeyboardKeys(key)) {
      return keys[key]
    } else {
      return ''
    }
  }

  const [movement, setMovement] = useState({
    left: false,
    right: false,
    up: false,
    down: false
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return (() => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    })
  })

  return movement
}

export default useControls
