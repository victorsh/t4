import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useFrame, ThreeElements } from '@react-three/fiber'

function BoxRotator(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const direction = Math.random() > 0.5 ? -1 : 1

  // useFrame((state, delta) => (mesh.current.rotation.x += direction * delta))
  useEffect(() => {
    console.log(Boolean(mesh.current))
  }, [])

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxGeometry args={[1,1,1]} />
      <meshPhongMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default BoxRotator
