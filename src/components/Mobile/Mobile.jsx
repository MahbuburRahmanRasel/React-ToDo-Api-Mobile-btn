import React, { useState } from 'react';

const Mobile = () => {
    const [battary,setBattary]= useState(100);
    const battaryDown = ()=>{
        const newBattary = battary-10;
        if(newBattary<0){
            newBattary = 0;
        }
        setBattary(newBattary)

    }

    return (
        <div>
            <p>Battery Charge : {battary}</p>
            <button onClick={battaryDown}>Battery down</button>
        </div>
    );
};

export default Mobile;