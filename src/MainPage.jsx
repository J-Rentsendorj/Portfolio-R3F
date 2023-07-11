import React, { useEffect, useState, useRef } from 'react';
import './style.css'
import Experience from './Experience';
import { Canvas } from '@react-three/fiber';
import ErrorBoundary from './utils/ErrorBoundary';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Pacman from './assets/Pacman';
import muteIcon from './assets/mute.png';
import unmuteIcon from './assets/unmute.png';

function MainPage() {
    const [isMuted, setIsMuted] = useState(true);
    const overlayRef = useRef(null);
    const [exploreClicked, setExploreClicked] = useState(false)
    const [orbitEnabled, setOrbitEnabled] = useState(false);
    const videoRef = React.useRef(null);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    useEffect(() => {
        const videoElement = document.getElementById('background-video');
        if (videoElement) {
            videoElement.muted = isMuted;
        }

        const onScroll = () => {
            const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrollPercentage > 0) {
                overlayRef.current.style.background = `rgba(37, 37, 37, ${0.7})`;
            } else {
                overlayRef.current.style.background = `rgba(37, 37, 37, ${0.3})`;
            }
        };

        window.addEventListener('scroll', onScroll);

        // Add the canplaythrough event listener
        if (videoRef.current) {
            videoRef.current.addEventListener("canplaythrough", handleCanPlayThrough);
        }


        return () => {
            window.removeEventListener('scroll', onScroll);

            // Remove the canplaythrough event listener
            if (videoRef.current) {
                videoRef.current.removeEventListener("canplaythrough", handleCanPlayThrough);
            }
        };
    }, [isMuted]);

    const handleCanPlayThrough = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => console.log(error));
        }
    };

    return (
        <ErrorBoundary>
            <div className="main-container">
                <video
                    id="background-video"
                    className="video-background"
                    loop
                    autoPlay
                    muted
                    playsInline
                    ref={videoRef}
                    onCanPlayThrough={() => {
                        if (videoRef.current) {
                            videoRef.current.play().catch(error => console.log(error));
                        }
                    }}
                >
                    <source src="https://storage.googleapis.com/portfolio-videos-bucket/Inzo_Overthinker.mp4" type="video/mp4" />
                </video>
                <div ref={overlayRef} className="overlay"></div>
                <div className="top-icons">
                    <a href="https://github.com/J-Rentsendorj/Portfolio-R3F" target="GitHub" rel="https://github.com/J-Rentsendorj/Portfolio-R3F">
                        <FaGithub size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/baljinnyam-rentsendorj/" target="In" rel="https://www.linkedin.com/in/baljinnyam-rentsendorj/">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://program-and-control.vercel.app/" target="In" rel="https://program-and-control.vercel.app/">
                        <Pacman width={38} height={38} color='white' />
                    </a>
                </div>
                <button onClick={toggleMute} className="mute-button">
                    <img src={isMuted ? muteIcon : unmuteIcon} alt={isMuted ? "Unmute" : "Mute"} />
                </button>
                <div className="content">
                    <div className="text-content">
                        <h1>Jin Rentsendorj</h1>
                        <h1>
                            Creative Developer
                            U.S. Army Veteran
                            Let's Create Your Reality
                        </h1>
                        <h2>
                            React.JS | Three.JS
                        </h2>
                    </div>
                </div>
                <div className='scroll'>
                    <p>| Scroll & Chill |</p>
                </div>
                <div className="experience-container">
                    <div className="canvas-container" style={{ pointerEvents: orbitEnabled ? 'auto' : 'none' }}>
                        <Canvas
                            camera={{ fov: 90, near: 0.1, far: 2000, position: [-2, 0, 4] }}
                            style={{ width: "100vw", height: "100vh" }}>
                            <Experience exploreClicked={exploreClicked} orbitEnabled={orbitEnabled} setOrbitEnabled={setOrbitEnabled} />
                            {exploreClicked &&
                                <button onClick={() => setExploreClicked(true)} >
                                    Explore Project
                                </button>
                            }
                        </Canvas>
                        <div className='experience-scroll'>
                            <p>Click | Drag | Scroll</p>
                        </div>
                    </div>
                </div>
                <div className="project-section">
                    <h1 className="project-title">Program And Control</h1>
                    <p className="project-description">Pacman inspired React Three Fiber application.
                        The game uses several dependencies including react-three/drei &
                        react-three/fiber for 3D rendering in a React environment, react-three/rapier for physics,
                        howler for sound effects, leva for easy control management, react-use for custom hooks,
                        three.js for 3D graphics, and zustand for state management. The game is built to be played
                        in a web browser and provides an immersive 3D gaming experience reminiscent of the original
                        Pac-Man game with an EDM twist. Mobile version is currently in development.</p>
                    <div className="video-container">
                        <video className="project-video" loop muted playsInline autoPlay>
                            <source src="https://storage.googleapis.com/portfolio-videos-bucket/pac.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="bottom-icons">
                        <a href="https://github.com/J-Rentsendorj/ProgramAndControl" target="GitHub" rel="https://github.com/J-Rentsendorj/ProgramAndControl">
                            <FaGithub size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/baljinnyam-rentsendorj/" target="In" rel="https://www.linkedin.com/in/baljinnyam-rentsendorj/">
                            <FaLinkedin size={32} />
                        </a>
                        <a href="https://program-and-control.vercel.app/" target="In" rel="https://program-and-control.vercel.app/">
                            <Pacman width={38} height={38} color='#fff' />
                        </a>
                    </div>
                    <div className='credit'>
                        <p>Music by Inzo: Overthinker</p>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
}

export default MainPage;










// import React, { useEffect, useState, useRef } from 'react';
// import './style.css'
// import Experience from './Experience';
// import { Canvas } from '@react-three/fiber';
// import ErrorBoundary from './utils/ErrorBoundary';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import Pacman from './assets/Pacman';
// import muteIcon from './assets/mute.png';
// import unmuteIcon from './assets/unmute.png';

// function MainPage() {
//     const [isMuted, setIsMuted] = useState(true);
//     const overlayRef = useRef(null);
//     const [exploreClicked, setExploreClicked] = useState(false)
//     const [orbitEnabled, setOrbitEnabled] = useState(false);
//     const videoRef = React.useRef(null);

//     const toggleMute = () => {
//         setIsMuted(!isMuted);
//     };

//     useEffect(() => {
//         const videoElement = document.getElementById('background-video');
//         if (videoElement) {
//             videoElement.muted = isMuted;
//         }

//         const onScroll = () => {
//             const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
//             if (scrollPercentage > 0) {
//                 overlayRef.current.style.background = `rgba(37, 37, 37, ${0.7})`;
//             } else {
//                 overlayRef.current.style.background = `rgba(37, 37, 37, ${0.3})`;
//             }
//         };

//         window.addEventListener('scroll', onScroll);

//         return () => {
//             window.removeEventListener('scroll', onScroll);
//         };
//     }, [isMuted]);

//     return (
//         <ErrorBoundary>
//             <div className="main-container">
//                 <video
//                     id="background-video"
//                     className="video-background"
//                     loop
//                     autoPlay
//                     muted
//                     playsInline
//                     ref={videoRef}
//                     onCanPlayThrough={() => {
//                         if (videoRef.current) {
//                             videoRef.current.play().catch(error => console.log(error));
//                         }
//                     }}
//                 >
//                     <source src="https://storage.googleapis.com/portfolio-videos-bucket/Inzo_Overthinker.mp4" type="video/mp4" />
//                 </video>
//                 <div ref={overlayRef} className="overlay"></div>
//                 <div className="top-icons">
//                     <a href="https://github.com/J-Rentsendorj/Portfolio-R3F" target="GitHub" rel="https://github.com/J-Rentsendorj/Portfolio-R3F">
//                         <FaGithub size={32} />
//                     </a>
//                     <a href="https://www.linkedin.com/in/baljinnyam-rentsendorj/" target="In" rel="https://www.linkedin.com/in/baljinnyam-rentsendorj/">
//                         <FaLinkedin size={32} />
//                     </a>
//                     <a href="https://program-and-control.vercel.app/" target="In" rel="https://program-and-control.vercel.app/">
//                         <Pacman width={38} height={38} color='white' />
//                     </a>
//                 </div>
//                 <button onClick={toggleMute} className="mute-button">
//                     <img src={isMuted ? muteIcon : unmuteIcon} alt={isMuted ? "Unmute" : "Mute"} />
//                 </button>
//                 <div className="content">
//                     <div className="text-content">
//                         <h1>Jin Rentsendorj</h1>
//                         <h1>
//                             Creative Developer
//                             U.S. Army Veteran
//                             Let's Create Your Reality
//                         </h1>
//                         <h2>
//                             React.JS | Three.JS
//                         </h2>
//                     </div>
//                 </div>
//                 <div className='scroll'>
//                     <p>| Scroll & Chill |</p>
//                 </div>
//                 <div className="experience-container">
//                     <div className="canvas-container" style={{ pointerEvents: orbitEnabled ? 'auto' : 'none' }}>
//                         <Canvas
//                             camera={{ fov: 90, near: 0.1, far: 2000, position: [-2, 0, 4] }}
//                             style={{ width: "100vw", height: "100vh" }}>
//                             <Experience exploreClicked={exploreClicked} orbitEnabled={orbitEnabled} setOrbitEnabled={setOrbitEnabled} />
//                             {exploreClicked &&
//                                 <button onClick={() => setExploreClicked(true)} >
//                                     Explore Project
//                                 </button>
//                             }
//                         </Canvas>
//                         <div className='experience-scroll'>
//                             <p>Click | Drag | Scroll</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="project-section">
//                     <h1 className="project-title">Program And Control</h1>
//                     <p className="project-description">Pacman inspired React Three Fiber application.
//                         The game uses several dependencies including react-three/drei &
//                         react-three/fiber for 3D rendering in a React environment, react-three/rapier for physics,
//                         howler for sound effects, leva for easy control management, react-use for custom hooks,
//                         three.js for 3D graphics, and zustand for state management. The game is built to be played
//                         in a web browser and provides an immersive 3D gaming experience reminiscent of the original
//                         Pac-Man game with an EDM twist. Mobile version is currently in development.</p>
//                     <div className="video-container">
//                         <video className="project-video" loop muted playsInline autoPlay>
//                             <source src="https://storage.googleapis.com/portfolio-videos-bucket/pac.mp4" type="video/mp4" />
//                         </video>
//                     </div>
//                     <div className="bottom-icons">
//                         <a href="https://github.com/J-Rentsendorj/ProgramAndControl" target="GitHub" rel="https://github.com/J-Rentsendorj/ProgramAndControl">
//                             <FaGithub size={32} />
//                         </a>
//                         <a href="https://www.linkedin.com/in/baljinnyam-rentsendorj/" target="In" rel="https://www.linkedin.com/in/baljinnyam-rentsendorj/">
//                             <FaLinkedin size={32} />
//                         </a>
//                         <a href="https://program-and-control.vercel.app/" target="In" rel="https://program-and-control.vercel.app/">
//                             <Pacman width={38} height={38} color='#fff' />
//                         </a>
//                     </div>
//                     <div className='credit'>
//                         <p>Music by Inzo: Overthinker</p>
//                     </div>
//                 </div>
//             </div>
//         </ErrorBoundary>
//     );
// }

// export default MainPage;

