import { useControls } from 'leva'
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { FaGithub } from 'react-icons/fa';
import { isMobile } from 'react-device-detect';

export function Pacman_arcade() {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('pacman_arcade/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)

  // Animation
  useEffect(() => {
    actions["pac man"].play();
  }, [])

  // Debug
  // const { scale, position } = useControls("arcade", {
  //   scale: {
  //     value: 0.03,
  //     min: 0.01,
  //     max: 0.05,
  //     step: 0.005,
  //   },
  //   position: [0, -1, -0.3],
  // })

  // Click Camera Animation
  const vec = new THREE.Vector3()
  const [clicked, setClicked] = useState(false)
  const [originalPosition, setOriginalPosition] = useState(null)
  const isMobileDevice = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };


  useFrame(state => {
    if (clicked) {
        if (!originalPosition) {
            setOriginalPosition(state.camera.position.clone())
        }

        if (isMobile) {
            state.camera.lookAt(0, 0.2, 0);
        } else {
            state.camera.lookAt(0, 0.5, 0);
        }

        state.camera.position.lerp(isMobile ? vec.set(0, 0.3, 1) : vec.set(0, 0.5, 0.67), 1);
        state.camera.updateProjectionMatrix();
    } else if (originalPosition) {
        state.camera.position.copy(originalPosition);
        setOriginalPosition(null);
    }
});

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);


  return (
    <>
      <group ref={group} dispose={null} scale={0.03} position={[0, -1, -0.3]} onClick={() => setClicked(!clicked)}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="ad72bb6817744cbea1b39b136ec1313cfbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="pacman" position={[7.34, 37.74, -1.74]} rotation={[-0.81, 0, 0]} scale={0.09} >
                    <group name="mouth_top">
                      <group name="Object_10" position={[0, -0.32, 0]}>
                        <mesh name="mouth_top_pac_&_ghost_0" castShadow receiveShadow geometry={nodes['mouth_top_pac_&_ghost_0'].geometry} material={materials.pac__ghost} />
                      </group>
                    </group>
                    <group name="mouth_bott">
                      <group name="Object_13" position={[0, -0.32, 0]}>
                        <mesh name="mouth_bott_pac_&_ghost_0" castShadow receiveShadow geometry={nodes['mouth_bott_pac_&_ghost_0'].geometry} material={materials.pac__ghost} />
                      </group>
                    </group>
                    <group name="Object_7" position={[0, -0.32, 0]}>
                      <mesh name="pacman_pac_&_ghost_0" castShadow receiveShadow geometry={nodes['pacman_pac_&_ghost_0'].geometry} material={materials.pac__ghost} />
                    </group>
                  </group>
                  <group name="ghost1" position={[-0.93, 37.65, -1.62]} rotation={[-0.81, 0, 0]} scale={0.09}>
                    <mesh name="ghost1_pac_&_ghost_0" castShadow receiveShadow geometry={nodes['ghost1_pac_&_ghost_0'].geometry} material={materials.pac__ghost} />
                  </group>
                  <group name="ghost2" position={[6.75, 41.93, -6.15]} rotation={[-0.81, 0, 0]} scale={0.09}>
                    <mesh name="ghost2_pac_&_ghost_0" castShadow receiveShadow geometry={nodes['ghost2_pac_&_ghost_0'].geometry} material={materials.pac__ghost} />
                  </group>
                  <group name="ghost3" position={[0.92, 37.64, -1.61]} rotation={[-0.81, 0, 0]} scale={0.09}>
                    <mesh name="ghost3_pac_&_ghost_0" castShadow receiveShadow geometry={nodes['ghost3_pac_&_ghost_0'].geometry} material={materials.pac__ghost} />
                  </group>
                  <group name="ghost4" position={[-3.88, 37.69, -1.65]} rotation={[-0.81, 0, 0]} scale={0.09}>
                    <mesh name="ghost4_pac_&_ghost_0" castShadow receiveShadow geometry={nodes['ghost4_pac_&_ghost_0'].geometry} material={materials.pac__ghost} />
                  </group>
                  <group name="pac_man_machine" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh name="pac_man_machine_automat_0" castShadow receiveShadow geometry={nodes.pac_man_machine_automat_0.geometry} material={materials.automat} />
                  </group>
                  <group name="scheibe" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh name="scheibe_scheibe_0" castShadow receiveShadow geometry={nodes.scheibe_scheibe_0.geometry} material={materials.scheibe} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      {clicked && (
        <Html>
          <a
            href="https://github.com/J-Rentsendorj/ProgramAndControl"
            target="PAC GitHub"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub size={30} />
          </a>
          <div className="custom-text">
            <h3 className="pac-title">Program and Control</h3>
            <h5>
              Immersive 3D Pacman React Three Fiber Browser Game with an EDM twist.
              Mobile version is in development.
            </h5>
          </div>
          <a
            href="https://program-and-control.vercel.app/"
            target="Program and Control"
            rel="noopener noreferrer"
            className="custom-button button-play"
            style={{ bottom: "25px" }}
          >
            Play
          </a>
          <button
            className="custom-button"
            onClick={(e) => {
              e.stopPropagation();
              setClicked(false);
            }}
          >
            Return
          </button>
        </Html>
      )}

    </>
  )
}

useGLTF.preload('/scene-transformed.glb')

