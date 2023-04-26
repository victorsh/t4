import { Canvas } from '@react-three/fiber'
import BoxRotator from '~/components/canvas/entities/box'
import Text3D from './entities/text3d'
import Controls from './config/orbit-controls'
import RayBox from './entities/ray-box'

const Scene = () => {
  return (
    <Canvas style={{position: 'fixed', top: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: 1}}>
      <ambientLight intensity={0.9} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {/* <BoxRotator position={[-1.2, 0, 0]} />
      <BoxRotator position={[1.2, 0, 0]} />
      <BoxRotator position={[0, -1.2, 0]} />
      <BoxRotator position={[0, 1.2, 0]} /> */}
      <Text3D text='T4' color={'#aaaaaa'} position={[-1, 0, 1]}/>
      <RayBox />
      <Controls />
    </Canvas>
  )
}

export default Scene
