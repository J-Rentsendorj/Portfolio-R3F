import './style.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experience from './Experience.jsx';
import MainPage from './MainPage.jsx';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';  
import LoadingPage from './LoadingPage';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const handleEnter = () => {
        setIsLoading(false);
    };

    return (
        <Router>
            {isLoading ? (
                <LoadingPage handleEnter={handleEnter} />
            ) : (
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/experience" element={
                        <Canvas
                            camera={{ fov: 90, near: 0.1, far: 2000, position: [-2, 0, 4] }}
                            style={{ width: '100vw', height: '100vh' }}
                        >
                            <Experience />
                        </Canvas>
                    } />
                </Routes>
            )}
        </Router>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />); 

