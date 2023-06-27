import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export function Neon() 
{
  const group = useRef()
  const { nodes, materials } = useGLTF('/neon.glb')

  // Debug
  // const { scale, position, rotation } = useControls("neon", {
  //   scale: {
  //     value: 0.3,
  //     min: 0.1,
  //     max: 0.5,
  //     step: 0.1,
  //   },
  //   position: [ -1.25, 1.14, -0.03],
  //   rotation: [ 0, 179, 0],
  // })

  return (
    <group ref={group} dispose={null} scale={ 0.3 } position={[ -1.25, 1.14, -0.03 ]} rotation={[ 0, 179, 0 ]}>
      <mesh geometry={nodes.Text001.geometry} material={materials['Material.001']} position={[-0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text003.geometry} material={materials['Material.001']} position={[-0.07, 0, -0.26]} rotation={[Math.PI / 2, 0, Math.PI]} />
      <mesh geometry={nodes.NurbsPath.geometry} material={materials['Material.004']} position={[-0.02, 4.6, -0.13]} scale={[0.26, 1, 1]} />
      <mesh geometry={nodes.NurbsPath001.geometry} material={materials['Material.005']} position={[0.39, 2.32, -0.13]} rotation={[0, 0, -Math.PI / 2]} scale={[1.27, 0.99, 0.99]} />
      <mesh geometry={nodes.NurbsPath002.geometry} material={materials['Material.006']} position={[-0.47, 3.73, -0.13]} rotation={[0, 0, -Math.PI / 2]} scale={[0.49, 0.99, 0.99]} />
      <mesh geometry={nodes.NurbsPath004.geometry} material={materials['Material.007']} position={[-0.02, 0.23, -0.13]} scale={[0.26, 1, 1]} />
      <mesh geometry={nodes.NurbsPath003.geometry} material={materials['Material.006']} position={[-0.47, 3.73, -0.13]} rotation={[0, 0, -Math.PI / 2]} scale={[0.49, 0.99, 0.99]} />
      <mesh geometry={nodes.NurbsPath005.geometry} material={materials['Material.006']} position={[-0.47, 1.42, -0.13]} rotation={[0, 0, -Math.PI / 2]} scale={[0.73, 0.99, 0.99]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.010']} position={[-0.59, 2.82, -0.13]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.14, 0.1, 0.02]} />
      <mesh geometry={nodes.Text002.geometry} material={materials['Material.001']} position={[-0.01, 0, -0.04]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text004.geometry} material={materials['Material.001']} position={[-0.07, 0, -0.26]} rotation={[Math.PI / 2, 0, Math.PI]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.003']} position={[-0.04, 2.42, -0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.41, 2.08, 2.17]} />
      <mesh geometry={nodes.NurbsPath006.geometry} material={materials['Material.011']} position={[-0.5, 1.35, -0.5]} rotation={[-0.1, 0, -0.04]} scale={[27, 27.91, 27.91]} />
      <mesh geometry={nodes.NurbsPath007.geometry} material={materials['Material.011']} position={[-0.13, 1.35, -0.52]} rotation={[-0.1, 0, -0.04]} scale={[27, 27.91, 27.91]} />
      <mesh geometry={nodes.NurbsPath010.geometry} material={materials['Material.011']} position={[-0.46, 1.34, -0.29]} rotation={[-0.1, 0, -0.04]} scale={[27, 27.91, 27.91]} />
      <mesh geometry={nodes.NurbsPath011.geometry} material={materials['Material.011']} position={[-0.09, 1.34, -0.31]} rotation={[-0.1, 0, -0.04]} scale={[27, 27.91, 27.91]} />
      <mesh geometry={nodes.NurbsPath008.geometry} material={materials['Material.011']} position={[-0.02, 1.41, 0.18]} rotation={[-3.05, -0.05, 2.62]} scale={[27, 38, 27]} />
      <mesh geometry={nodes.NurbsPath009.geometry} material={materials['Material.011']} position={[-0.07, 1.42, -0.02]} rotation={[-3.05, -0.05, 2.62]} scale={[27, 38, 27]} />
    </group>
  )
}

useGLTF.preload('/neon.glb')
