// https://medium.com/@zmommaerts/how-to-create-3d-text-in-react-three-fiber-a35376456a04
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import roboto from '~/../public/Roboto Medium_Regular.json'
import { Text3D } from '@react-three/drei'

// import { ThreeElements, extend, useFrame, ReactThreeFiber } from '@react-three/fiber'
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
// import * as THREE from 'three'

// extend({ TextGeometry })

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'textGeometry': ReactThreeFiber.Object3DNode<TextGeometry, typeof TextGeometry>;
//     }
//   }
// }

// export default function Text3D(props: any) {
//   const ref = useRef<ReactThreeFiber.Object3DNode<TextGeometry, typeof TextGeometry>>(null!)
//   const font = new FontLoader().parse(cormorant)

//   // useFrame((state, delta) => {
//   //   ref.current.material.color = new THREE.Color(actualColor)
//   // })

//   return (
//     <mesh ref={ref} {...props} receiveShadow castShadow>
//       <textGeometry args={[props.text, {font, size: 1, height: 1}]} />
//       <meshStandardMaterial attach='material' color={props.color} />
//     </mesh>
//   )
// }

export default function T3D(props: any) {
  return (
    <Text3D font={roboto} {...props} receiveShadow castShadow>
      T4
      <meshNormalMaterial />
    </Text3D>
  )
}