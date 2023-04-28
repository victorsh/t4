//https://codesandbox.io/s/tpl-r3f-9cplyk
import { useMemo } from 'react'
import { useThree } from '@react-three/fiber'
import { Raycaster, Vector3, Object3D } from 'three'
import { RefObject } from 'react'

const useForwardRaycast = (obj: RefObject<Object3D>) => {
  const raycaster = useMemo(() => new Raycaster(), [])
  const pos = useMemo(() => new Vector3(), [])
  const dir = useMemo(() => new Vector3(), [])
  const scene = useThree((state) => state.scene)

  return () => {
    if (!obj.current) return []
    raycaster.set(obj.current.getWorldPosition(pos), obj.current.getWorldDirection(dir))
    return raycaster.intersectObjects(scene.children)
  }
}

export default useForwardRaycast
