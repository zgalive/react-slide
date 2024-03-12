import { useState } from "react";

export function RenderIf(){
    const [showInfo, setShowInfo]= useState(true);

    const handleClick=()=>{
        setShowInfo(!showInfo)
    };

    return <div>
        <button onClick={handleClick}>click me</button>
        {
            showInfo? <div>show something</div> : <div>hide something</div>
        }
    </div>
}