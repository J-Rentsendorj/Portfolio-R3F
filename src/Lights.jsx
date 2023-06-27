import { useState, useEffect } from 'react'

export default function Lights () 
{
    const [color, setColor] = useState('#ffffff')
    useEffect(() => {
        const interval = setInterval(() => {
            setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
        }, 1000) // Change color every second
        return () => clearInterval(interval)
    }, [])

    return <>
        < ambientLight intensity={0.02} />

        <rectAreaLight 
            color={ color } 
            intensity={ 20 }
            width={ 1.3 }
            height={ 1 } 
            position={[ 0.1, 3, 0 ]} 
            rotation-x={-Math.PI / 2} 
        />
    </>
}

