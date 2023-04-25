// https://medium.com/@zmommaerts/how-to-create-3d-text-in-react-three-fiber-a35376456a04
import React, { useRef } from 'react'
import { ThreeElements, extend, useFrame, ReactThreeFiber } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import cormorant from '../../../../public/Cormorant Garamond Medium_Regular.json'
import * as THREE from 'three'

extend({ TextGeometry })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'textGeometry': ReactThreeFiber.Object3DNode<TextGeometry, typeof TextGeometry>;
    }
  }
}

export default function Text3D(props: any) {
  const ref = useRef<ReactThreeFiber.Object3DNode<TextGeometry, typeof TextGeometry>>(null!)
  const font = new FontLoader().parse(cormorant)

  // useFrame((state, delta) => {
  //   ref.current.material.color = new THREE.Color(actualColor)
  // })

  return (
    <mesh ref={ref} {...props} receiveShadow castShadow>
      <textGeometry args={[props.text, {font, size: 1, height: 1}]} />
      <meshPhongMaterial attach='material' color={props.color} />
    </mesh>
  )
}
