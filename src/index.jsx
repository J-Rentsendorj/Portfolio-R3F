import './style.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experience from './Experience.jsx';
import MainPage from './MainPage.jsx';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';  

function App() {
    const [isEntered, setIsEntered] = useState(false);

    const handleEnter = () => {
        setIsEntered(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage handleEnter={handleEnter} />} />
                <Route path="/experience" element={isEntered && (
                        <Canvas
                            camera={{
                                fov: 90,
                                near: 0.1,
                                far: 2000,
                                position: [-2, 0, 4]
                            }}
                            style={{ width: '100vw', height: '100vh' }}
                        >
                            <Experience />
                        </Canvas>
                    )} />
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />); 

