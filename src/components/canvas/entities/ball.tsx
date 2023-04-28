/* eslint-disable */
import { useCallback, useEffect, useRef, RefObject, MutableRefObject } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useRapier, RigidBody } from '@react-three/rapier'
import { useKeyboardControls } from '@react-three/drei'

type CustomRigidBody = typeof RigidBody & {
  wakeUp: () => void;
  applyImpulse: (impulse: THREE.Vector3 | { x:number, y:number, z:number }) => void;
  applyTorqueImpulse: (torque: THREE.Vector3) => void;
  translation: () => {x: number, y:number, z:number};
}

function Ball() {
  const { camera } = useThree()
  const bodyRef = useRef<any>(null!)
  const [subscribeKeys, getKeys] = useKeyboardControls()
  const { rapier, world } = useRapier()

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = getKeys()

    const impulse = new THREE.Vector3(0, 0, 0)
    const torque = new THREE.Vector3(0, 0, 0)

    const impulseStrength = 50 * delta
    const torqueStrength = 30 * delta

    if (forward) {
      impulse.z = -1
      torque.x = -1
    }
    if (backward) {
      impulse.z = 1
      torque.x = 1
    }
    if (rightward) {
      impulse.x = 1
      torque.z = -1
    }
    if (leftward) {
      impulse.x = -1
      torque.z = 1
    }

    const { current: body } = bodyRef;

    if (body && impulse.length() > 0) {
      body.wakeUp()
      impulse.applyMatrix4(camera.matrixWorld).sub(camera.position)
      impulse.setY(0)
      impulse.normalize().setLength(impulseStrength)
      // console.log("impulse", impulse)

      body.applyImpulse(impulse)
    }

    if (body && torque.length() > 0) {
      body.wakeUp()
      torque.applyMatrix4(camera.matrixWorld).sub(camera.position)
      torque.setY(0)
      torque.normalize().setLength(torqueStrength)
      // console.log("torque", torque)

      body.applyTorqueImpulse(torque)
    }
  })

  const jump = useCallback(() => {
    const { current: body } = bodyRef

    if (body) {
      const origin = body.translation()

      origin.y -= 1 + 0.05
      const direction = { x: 0, y: -1, z: 0 }
      const ray = new rapier.Ray(origin, direction)
      const hit = world.raw().castRay(ray, 10, true)

      if (hit && hit.toi < 0.15) {
        body.applyImpulse({ x: 0, y: 90, z: 0 })
      }
    }
  }, [rapier.Ray, world])

  useEffect(() => {
    const unsubscribeJump = subscribeKeys(
      (state: any) => state.jump,
      (value) => { if (value) jump() }
    );

    return () => { unsubscribeJump() }
  }, [subscribeKeys, jump])

  return (
    <RigidBody
      position={[0, 1, 0]}
      ref={bodyRef}
      colliders="ball"
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <mesh castShadow>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='red' flatShading />
      </mesh>
    </RigidBody>
  )
  
}

export default Ball
