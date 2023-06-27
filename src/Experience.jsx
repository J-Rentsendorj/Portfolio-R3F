import { OrbitControls, Environment, Html } from '@react-three/drei'
import { Pacman_arcade } from './Models/Pacman_arcade'
import { Ground_snow } from './Models/Ground_snow'
import { Street_light } from './Models/Street_light'
import { Suspense } from 'react'
import Lights from './Lights'
import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { angleToRadians } from './utils/angle'
import { Neon } from './Models/Neon'

export default function Experience({ showOverlay, orbitEnabled, setOrbitEnabled }) {
    const orbitControlsRef = useRef(null)

    const exploreProject = () => {
        setOrbitEnabled(!orbitEnabled);
    };

    useEffect(() => {
        if (orbitControlsRef.current) {
            orbitControlsRef.current.enabled = orbitEnabled;
        }
    }, [orbitEnabled]);

    useEffect(() => {
        if (orbitControlsRef.current) {
            orbitControlsRef.current.enabled = orbitEnabled;
        }
    }, [orbitEnabled]);

    return (
        <>
            <OrbitControls
                ref={orbitControlsRef}
                minPolarAngle={angleToRadians(0)}
                maxPolarAngle={angleToRadians(90)}
                minDistance={1}
                maxDistance={15}
                enabled={orbitEnabled}
            />
            {!showOverlay &&
                <Html center pointerEvents="auto">
                    <button onClick={exploreProject} className='explore-button'>
                        {orbitEnabled ? 'Exit 3D View' : 'Explore Project'}
                    </button>
                </Html>
            }
            <Suspense fallback={null}>
                <Ground_snow />
                <Pacman_arcade />
                <Street_light />
                <Lights />
                <Neon />
            </Suspense>
            <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial side={THREE.BackSide} color='#050505' />
                </mesh>
            </Environment>
        </>
    )
}



