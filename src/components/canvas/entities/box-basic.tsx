import React, { useRef, useEffect, useState, ReactNode } from 'react'
import * as THREE from 'three'
import { useFrame, ThreeElements } from '@react-three/fiber'

interface BoxProps {
  color?: string
}

function BasicBox(props: BoxProps) {
  const mesh = useRef<THREE.Mesh>(null!)

  // useFrame((state, delta) => (mesh.current.rotation.x += direction * delta))
  useEffect(() => {
    console.log(Boolean(mesh.current))
  }, [])

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <boxGeometry args={[1,1,1]} />
      <meshPhongMaterial color={props.color} />
    </mesh>
  )
}

export default BasicBox
