import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, ThreeElements } from '@react-three/fiber'
import useForwardRaycast from "~/components/canvas/config/raycast-forward"
import useControls from '~/components/canvas/config/useControls'

const RayBox = () => {
  const ref = useRef<THREE.Mesh>(null!)
  const raycast = useForwardRaycast(ref)
  const { left, right, up, down } = useControls()

  useFrame((state, delta) => {
    // ref.current.rotation.y += 1 * delta
    if (left) {
      ref.current.position.x -= 1 * delta
    }

    if (right) {
      ref.current.position.x += 1 * delta
    }

    if (up) {
      ref.current.position.z -= 1 * delta
    }

    if (down) {
      ref.current.position.z += 1 * delta
    }
    
    const intersections = raycast()
    // console.log(intersections)
  })

  return (
    <>
      <mesh ref={ref}>
        <boxGeometry />
        <meshStandardMaterial color='orage' />
      </mesh>
      <mesh position={[1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color='hotpink' />
      </mesh>
    </>
  )
}

export default RayBox
