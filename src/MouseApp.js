import React from "react";
import useBackground from "./hooks/useBackground";

const MouseApp = () => {
    const {background, position} = useBackground();

    return (
        /**puede ser backgroun unicamente o background: background */
        <div style={{ background, height: '100vh'}}>
            <pre>
                {JSON.stringify(position, null, 2)}
            </pre>
        </div>
    )
}

export default MouseApp;