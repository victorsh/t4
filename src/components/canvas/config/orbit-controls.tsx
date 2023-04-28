/* eslint-disable @typescript-eslint/no-namespace */
import React, { useEffect, useRef } from 'react'
import { extend, useThree, ReactThreeFiber, useFrame } from '@react-three/fiber'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {
  OrbitControls,
  PerspectiveCamera,
  Environment
} from "@react-three/drei"
import * as THREE from 'three'

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'orbitControls': ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
//     }
//   }
// }

// function Controls(props: any) {
//   const { camera, gl } = useThree()
//   const myMesh = React.useRef<ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>>(null!)
//   useEffect(() => {
//     myMesh.current.panSpeed = 0
//   },[])
//   // let speed = 0.01
//   // useFrame(({ clock }) => {
//   //   if (camera.position.z > -10) {
//   //     camera.position.z -= speed * clock.getElapsedTime()
//   //     speed += 0.01
//   //   }
//   // })
//   return (
//     <orbitControls ref={myMesh}
//       {...props}
//       attach={"OrbitControls"}
//       args={[camera, gl.domElement]}
//       // minAzimuthAngle={-Math.PI / 4}
//       // maxAzimuthAngle={Math.PI / 4}
//       // minPolarAngle={Math.PI / 6}
//       // maxPolarAngle={Math.PI - Math.PI / 6}
//       // minDistance={3}
//       // maxDistance={12}
//       enablePanning={false}
//     />
//   )
// }

function Controls(props: any) {
  const cameraRef = useRef<THREE.Camera>()
  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={90}
        position={[0, 1, 10]}
        ref={cameraRef}
      />
      <OrbitControls
        camera={cameraRef.current}
      />
      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color={'#333377'} side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  )
}

export default Controls
