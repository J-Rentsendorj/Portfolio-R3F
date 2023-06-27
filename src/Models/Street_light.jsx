import { useControls } from 'leva'
import { useGLTF } from '@react-three/drei'

export function Street_light() {
  const { nodes, materials } = useGLTF('street_light/scene-transformed.glb')

  // const { position, scale } = useControls("Street Light", {
  //   scale: {
  //     value: 0.01,
  //     min: 0.01,
  //     max: 0.05,
  //     step: 0.001,
  //   },
  //   position: [-1, -0.8, 0],
  // })

  return (
    <group dispose={null} scale={ 0.01 } position={[ -1, -0.8, 0 ]} >
      <mesh castShadow receiveShadow geometry={nodes.Handle_low_blinn1_0.geometry} material={materials.blinn1} scale={[1, 1, 0.99]} />
      <mesh castShadow receiveShadow geometry={nodes.G_low_blinn1_0.geometry} material={materials.blinn1} position={[0, -0.12, 0]} scale={[1.02, 1.11, 1.02]} />
      <mesh castShadow receiveShadow geometry={nodes.Light_Handle_low_blinn1_0.geometry} material={materials.blinn1} />
      <mesh castShadow receiveShadow geometry={nodes.hh_low_blinn1_0.geometry} material={materials.blinn1} />
      <mesh castShadow receiveShadow geometry={nodes.cube_low_blinn1_0.geometry} material={materials.blinn1} />
      <mesh castShadow receiveShadow geometry={nodes.S_low_blinn1_0.geometry} material={materials.blinn1} />
      <mesh castShadow receiveShadow geometry={nodes.Light_low_blinn1_0.geometry} material={materials.blinn1} />
      <mesh castShadow receiveShadow geometry={nodes.pipe_low_blinn1_0.geometry} material={materials.blinn1} rotation={[-Math.PI, 0.37, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.P1_low_blinn1_0.geometry} material={materials.blinn1} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
