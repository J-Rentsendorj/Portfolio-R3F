import { useControls } from 'leva'
import { useGLTF } from '@react-three/drei'

export function Ground_snow() {
  const { nodes, materials } = useGLTF('ground_snow/scene-transformed.glb')

  // const { scale, position, rotation } = useControls("Ground Snow", {
  //   scale: {
  //     value: 10,
  //     min: 1,
  //     max: 100,
  //     step: 1,
  //   },
  //   position: [-16.5, 10.7, -17.8],
  //   rotation: [0, -.39, 0],
  // })

  return (
    <group dispose={null} scale={ 10 } position={[-16.5, 10.7, -17.8]} rotation={[0, -.39, 0]} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.model_tex_u1_v1_0.geometry} material={materials.tex_u1_v1} />
          <mesh castShadow receiveShadow geometry={nodes.model_tex_u1_v1_0_1.geometry} material={materials.tex_u1_v1} />
          <mesh castShadow receiveShadow geometry={nodes.model_tex_u1_v1_0_2.geometry} material={materials.tex_u1_v1} />
          <mesh castShadow receiveShadow geometry={nodes.model_tex_u1_v1_0_3.geometry} material={materials.tex_u1_v1} />
          <mesh castShadow receiveShadow geometry={nodes.model_tex_u1_v1_0_4.geometry} material={materials.tex_u1_v1} />
          <mesh castShadow receiveShadow geometry={nodes.model_tex_u1_v1_0_5.geometry} material={materials.tex_u1_v1} />
          <mesh castShadow receiveShadow geometry={nodes.model_tex_u1_v1_0_6.geometry} material={materials.tex_u1_v1} />
          <mesh castShadow receiveShadow geometry={nodes.model_tex_u1_v1_0_7.geometry} material={materials.tex_u1_v1} />
          <mesh castShadow receiveShadow geometry={nodes.model_tex_u1_v1_0_8.geometry} material={materials.tex_u1_v1} />
          <mesh castShadow receiveShadow geometry={nodes.model_tex_u1_v1_0_9.geometry} material={materials.tex_u1_v1} />
          <mesh castShadow receiveShadow geometry={nodes.model_tex_u1_v1_0_10.geometry} material={materials.tex_u1_v1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
