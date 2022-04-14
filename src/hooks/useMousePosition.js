import { useState, useEffect } from "react";

const initialPosition= { x: null , y: null }

const useMousePosition = () => {
    const [position, setPosition] = useState(initialPosition)

    useEffect(() => {
        const handleMouseMove = (e) => {
            const {clientX, clientY} = e;
            setPosition({
                x: clientX,
                y: clientY
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        //cuando agregamos un listener a un efecto, tenermos que remover el listener cuando el efecto se desmont
        return() => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, []);

    return position;
}

export default useMousePosition;