import { ReactNode, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from "@react-three/drei";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier";
import Ball from '~/components/canvas/entities/ball'
import * as THREE from 'three'
import type { Camera } from 'three'

interface RapierSceneProps {
  children?: ReactNode
}

const RapierScene = ({ children }: RapierSceneProps) => {
  const cameraRef = useRef<Camera>();
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["KeyW"] },
        { name: "backward", keys: ["KeyS"] },
        { name: "leftward", keys: ["KeyA"] },
        { name: "rightward", keys: ["KeyD"] },
        { name: "jump", keys: ["Space"] }
      ]}
    >
      <Canvas shadows style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: 1}} >
        <Physics gravity={[0, -60, 0]} >

          <PerspectiveCamera
            makeDefault
            fov={90}
            position={[0, 1, -10]}
            ref={cameraRef}
          />
          <OrbitControls
            camera={cameraRef.current}
          />
          <Environment background>
            <mesh scale={100}>
              <sphereGeometry args={[1, 64, 64]} />
              <meshBasicMaterial color={'blue'} side={THREE.BackSide} />
            </mesh>
          </Environment>
          <spotLight
            position={[15, 15, 15]}
            // angle={0.3}
            penumbra={1}
            castShadow
            intensity={2}
            shadow-bias={-0.0001}
          />
          {/* <gridHelper args={[30, 30, 30]} position-y="0" />
          <axesHelper args={[5]} /> */}
          {children}

          <RigidBody position-y={1}>
            <mesh castShadow>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="blue" />
            </mesh>
          </RigidBody>

          <Ball />

          {/** Floor */}
          <RigidBody
            type="fixed"
            position-y={-0.1 / 2}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh receiveShadow>
              <boxGeometry args={[100, 100, 0.1]} />
              <meshStandardMaterial color="gray" transparent opacity={0.8} />
            </mesh>
          </RigidBody>

        </Physics>
      </Canvas>
    </KeyboardControls>
  )
}

export default RapierScene
